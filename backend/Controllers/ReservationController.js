const HttpError = require("../Models/http-error");

const { validationResult } = require("express-validator");
// for sending confirmation email upon reservation
const { sendConfirmation } = require("../HelperFunctions/EmailFunctions");
const Reservation = require("../Models/ReservationModel");
const {
    convertToDateTimeFormat,
    convertToDateTimeObject,
} = require("../HelperFunctions/DateTimeFormattingFunctions");
const { json } = require("body-parser");

require("dotenv").config();
const adminInterfaceLink = process.env.ADMIN_INTERFACE;

const t_list = [
    "1200",
    "1230",
    "1300",
    "1330",
    "1400",
    "1430",
    "1500",
    "1530",
    "1600",
    "1630",
    "1700",
    "1730",
    "1800",
    "1830",
    "1900",
    "1930",
    "2000",
    "2030",
    "2100",
    "2130",
    "2200",
    "2230",
];

const combine_rule = {
    3: [
        [1, 2],
        [1, 3],
        [2, 3],
        [3, 4],
    ],
    4: [
        [1, 2],
        [1, 3],
        [2, 3],
        [3, 4],
    ],
    5: [
        [7, 13],
        [5, 9],
        [4, 11],
        [1, 2, 3],
        [1, 3, 4],
        [2, 3, 4],
    ],
    6: [
        [7, 13],
        [5, 9],
        [4, 11],
        [1, 2, 3],
        [1, 3, 4],
        [2, 3, 4],
    ],
    7: [
        [9, 10],
        [13, 16],
        [14, 15],
        [3, 4, 11],
        [1, 2, 3, 4],
    ],
    8: [
        [9, 10],
        [13, 16],
        [14, 15],
        [3, 4, 11],
        [1, 2, 3, 4],
    ],
    9: [
        [5, 9, 10],
        [2, 3, 4, 11],
    ],
    10: [
        [5, 9, 10],
        [2, 3, 4, 11],
    ],
};

const two_pax_table = [1, 2, 3, 4, 5, 6, 7];

const four_pax_table = [8, 9, 10, 11, 12, 13, 14, 15, 16];

// ========================main functions========================

const getAvailableTiming = async (req, res, next) => {
    /*
    const test = new Reservation({
        email: "shchong.2020@gmail.com",
        name: "sanghil",
        pax: 5,
        date_of_visit: "2023-01-24 1200",
        table_id: [4,11],
        status: 1
    });

    test.save();
    
    res.json({message: "successful"});
    */

    const error = validationResult(req);

    if (!error.isEmpty()) {
        const err = new HttpError("Invalid inputs passed", 422);
        return next(err);
    }

    const { date, pax } = req.body;

    let date_input = date;
    let num_pax = pax;
    let reservations;

    try {
        reservations = await Reservation.find({});
    } catch (error) {
        const err = new HttpError(
            "Something went wrong while fetching data",
            500
        );
        return next(err);
    }

    //Create an empty list to store all the filtered rows that match the date of visit selected and reservation status = 1
    let filtered_rows = [];

    for (let i = 0; i < reservations.length; i++) {
        let reservation = reservations[i].toObject();
        let date_fetched = reservation.date_of_visit.split(" ")[0];

        if (date_fetched === date_input) {
            filtered_rows.push(reservation);
        }
    }

    //Create two empty lists -> One to store all the 2 pax table IDs and another to store all the 4 pax table IDs
    let first_list = []; //Stores all the 2 pax table IDs from filtered_rows
    let second_list = []; //Stores all the 4 pax table IDs from filtered rows

    //Loop two_pax_table against the filtered rows and add all the rows that have the table id of 2 pax tables (change)
    for (let j = 0; j < filtered_rows.length; j++) {
        let filtered_row = filtered_rows[j];
        let array = filtered_row.table_id;
        array.map(function (element) {
            if (two_pax_table.includes(element)) {
                filtered_row.table_id = element;
                first_list.push(filtered_row);
            } else {
                filtered_row.table_id = element;
                second_list.push(filtered_row);
            }
        });
    }

    //We now have two filtered rows: first_list and second_list

    //If pax is 1 or 2
    if (num_pax === 1 || num_pax === 2) {
        //Create an empty array that will return timings to be blocked out (it means at that timing, all the tables are booked)
        let return_list = [];

        //Initialize the sum to be added up
        let sum = 0;

        //WHILE all the timings in the t_list have been looped through, starting from 0800, loop t_list against first_list
        let counter = 0;
        while (counter <= t_list.length - 1) {
            let compare_timing = t_list[counter];
            for (let i = 0; i < first_list.length; i++) {
                //Whenever there is a match with the timing, sum the table IDs up
                let row = first_list[i];
                let timing = row.date_of_visit.split(" ")[1];
                if (timing === compare_timing) {
                    sum += row.table_id;
                }
            }
            if (sum === 28) {
                //Push the timing into return_list since all tables are booked at that timing
                return_list.push(compare_timing);
            }

            counter++;
            sum = 0;
        }

        res.json(return_list);
    } else if (num_pax === 3 || num_pax === 4) {
        //Either One 4 pax table can be used or Two 2 pax tables can be used
        //BUT we need to prioritize One 4 pax table first
        //For each of the timing in t_list, we need to first check if there is at least one available 4 pax table

        //Create an empty array that will return timings to be blocked out (it means at that timing, all the tables are booked)
        let return_list = [];

        //WHILE all the timings in the t_list have been looped through, starting from 0800, loop t_list against second_list
        let counter = 0;

        let sum = 0;

        while (counter <= t_list.length - 1) {
            let compare_timing = t_list[counter];
            for (let i = 0; i < second_list.length; i++) {
                //Whenever there is a match with the timing, sum the table IDs up
                let row = second_list[i];
                let timing = row.date_of_visit.split(" ")[1];
                if (timing === compare_timing) {
                    sum += row.table_id;
                }
            }

            if (sum === 108) {
                //If the code reaches here, that means that all the 4 pax tables are fully filled at that particular timing
                //Next we need to check if there is at least Two 2 pax tables available which also follow the table combination rule
                //Prepare the id_list that contains all the IDs of 2 pax tables.
                let id_list = [1, 2, 3, 4, 5, 6, 7];

                //Using the timing in the current loop, loop it through the first_list
                //If there is a match with the timing, remove that particular table id from the id_list
                for (let j = 0; j < first_list.length; j++) {
                    let row = first_list[j];
                    let timing = row.date_of_visit.split(" ")[1];
                    let compare_id = row.table_id;
                    if (timing === compare_timing) {
                        let index = id_list.indexOf(compare_id);
                        id_list.splice(index, 1);
                    }
                }

                //If length of id_list is 0 or 1, there are insufficient 2 pax tables available to be combined
                //No 4 pax tables and 2 pax tables available to cater to the number of pax indicated by the user
                //Push the timing into return_list to be blocked out
                if (id_list.length === 0 || id_list.length === 1) {
                    return_list.push(compare_timing);
                } else {
                    //There are at least Two 2 pax tables available
                    //We then need to check if there is at least one combination that follows the table combination rule
                    //Under the combine_rule, refer to the array that contains the combination for the particular key
                    //In this case, the key is the number of pax indicated by the user
                    let combinations = combine_rule[num_pax];

                    //Initialize the total number of combinations
                    let total_combination = combinations.length;

                    //Initialize the fail_counter to check how many combinations failed
                    let fail_counter = 0;

                    //Loop through the combinations and then loop through the IDs within the id_list and check if the IDs exist in
                    //the combination. Whenever there is a match, increase the check_counter_exist. After looping through the contents,
                    //check if the number of elements inside the combination === check_counter. If they are equal, it means that
                    //there are table IDs that match the combination. As long as there is one match, we can say that the user is able
                    //to book for that particular timing. We can break from the loop.
                    for (let i = 0; i < combinations.length; i++) {
                        //Initialize a check_counter to see how many combinations cannot match
                        let check_counter_exist = 0;
                        let combination = combinations[i];
                        let combination_length = combination.length;
                        for (let j = 0; j < id_list.length; j++) {
                            let id_check = id_list[j];
                            if (combination.includes(id_check)) {
                                check_counter_exist++;
                            }
                        }
                        if (combination_length === check_counter_exist) {
                            break;
                        } else {
                            //Increase the fail_counter since the combination failed
                            fail_counter++;
                            //Continue the loop with different combination
                            check_counter_exist = 0;
                        }
                    }

                    //Check if fail_counter === total_combinations. If they are equal, it means that all the combinations failed
                    //and there are so available two pax tables that can be combined
                    //Finally, push that timing into the return list
                    if (fail_counter === total_combination) {
                        return_list.push(compare_timing);
                    }

                    //Continue the while loop using the next timing
                    //Reset the id_list to its original to be used for next iteration
                    counter++;
                    sum = 0;
                    id_list = [1, 2, 3, 4, 5, 6, 7];
                }
            } else {
                //If you reach here means that there is at least one available 4 Pax Table so continue the loop using the next value
                counter++;
                sum = 0;
            }
        }

        res.json({ return_list });
    } else {
        //If you reach this block means that number of pax is 5 or greater
        //Since from 5pax onwards, tables need to be combined no matter what, instead of separating the filtered rows into first_list and second_list, based on the table IDs,
        //we will directly use the filtered rows that contain all the 2 pax and 4 pax IDs
        //Instead, we will create the id_list that contains ALL the table IDs as well.
        let id_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        //Initialize the return_list that will return the timings to be blocked out on the UI
        let return_list = [];

        //***
        //The idea is that, for EACH of the timing in the t_list, we are going to filter out those table IDs that are already booked at particular timing by removing
        //those IDs from the id_list. So the id_list will remain with the table IDs that are not booked at that particular timing. We will then use the key -> num_pax
        //to get the combinations from the combine_rule, which is the form of list of lists.
        //We will loop through the combinations and also loop through the content within each combination and check if table IDs within the filtered id_list exist in the
        //combination list. Whenever there is a match, we will increment the check_match. If the check_match equal to number of elements inside the combination list, that
        //combination is available and we can stop the looping because as long as there is one available combination, we can cater to that number of pax indicated by user
        //***

        //Initialize the combinations using the key -> num_pax
        let combinations = combine_rule[num_pax];

        //WHILE we have looped through the all the timings in t_list, we start looping (starting from 0800) in t_list against the filtered rows
        let counter = 0;

        while (counter <= t_list.length - 1) {
            let compare_timing = t_list[counter];
            for (let i = 0; i < filtered_rows.length; i++) {
                let row = filtered_rows[i];
                let row_timing = row.date_of_visit.split(" ")[1];
                let id_check = row.table_id;
                //We compare the timing in the t_list and the timing of the each row. If the timing matches, it means that particular table is already booked at that timing
                if (compare_timing === row_timing) {
                    //Since this table is already booked at this timing, remove that table ID from id_list
                    let index = id_list.indexOf(id_check);
                    id_list.splice(index, 1);
                }
            }

            //Once we reach here, the id_list is now filtered and only contains tables that are not booked at that particular timing
            //Initialize the total number of combinations
            let total_combination = combinations.length;

            //Initialize the fail_counter to check how many combinations failed
            let fail_counter = 0;

            //Now, we will loop combinations which will then loop the contents within each combination
            for (let i = 0; i < combinations.length; i++) {
                //Initialize a check_counter to see how many combinations cannot match
                let check_counter_exist = 0;
                let combination = combinations[i];
                let combination_length = combination.length;
                for (let j = 0; j < id_list.length; j++) {
                    let id_check = id_list[j];
                    if (combination.includes(id_check)) {
                        check_counter_exist++;
                    }
                }
                if (combination_length === check_counter_exist) {
                    //If it reaches here, it means that the combination can be formed and we can cater to the pax indicated to the user. Break from looping immediately
                    break;
                } else {
                    //Increase the fail_counter since the combination failed
                    fail_counter++;
                    //Continue the loop with different combination
                    check_counter_exist = 0;
                }
            }

            //Check if fail_counter === total_combinations. If they are equal, it means that all the combinations failed
            //and there are so available two pax tables that can be combined
            //Finally, push that timing into the return list
            if (fail_counter === total_combination) {
                return_list.push(compare_timing);
            }

            //Continue the while loop using the next timing
            //Reset the id_list to its original to be used for next iteration
            counter++;
            id_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        }

        res.json({ return_list });
    }
};

const createReservation = async (req, res, next) => {
    const { email, name, pax, date_of_visit, table_id, status } = req.body;
    try {
        // 1) get the original datetime object --> original
        // 2) add 30 min to original --> dummy
        // 3) create a new reservation with original
        // 4) create reservation with dummy datetime
        // 5) send confirmation email for 3)

        // because GMT +8
        const originalDateTimeInMs =
            Date.parse(date_of_visit);
        // first 30 min
        const originalDateTime = new Date(originalDateTimeInMs);
        // second 30 min
        const dummyDateTimeInMs = originalDateTimeInMs + 30 * 60 * 1000;
        const dummyDateTime = new Date(dummyDateTimeInMs);

        const newReservation = new Reservation({
            email,
            name,
            pax,
            date_of_visit: convertToDateTimeFormat(originalDateTime),
            table_id,
            status,
        });

        const dummyReservation = new Reservation({
            email,
            name,
            pax,
            date_of_visit: convertToDateTimeFormat(dummyDateTime),
            table_id,
            status,
        });

        const createReservationPromise = await Reservation.create(
            newReservation
        );
        const createDummyReservationPromise = await Reservation.create(
            dummyReservation
        );

        // this is to ensure the confirmation email is only sent after both reservations are successfully created
        Promise.allSettled([
            createReservationPromise,
            createDummyReservationPromise,
        ])
            .then(async (results) => {
                // if both succeed, send email
                const originalReservation = results[0].value;
                console.log("originalReservation", originalReservation);
                await sendConfirmation(
                    originalReservation,
                    adminInterfaceLink +
                        "/reservation/cancel/" +
                        originalReservation._id
                )
                    .then(() => {
                        return res.json({
                            message: "Reservation created successfully",
                            data: originalReservation._id,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getReservationById = async (req, res, next) => {
    const { reservationId } = req.params;
    try {
        result = await Reservation.findById(reservationId);
        if (!result) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

const testEmailConfirmation = async (req, res) => {
    const fakeReservation = {
        email: "sm.lee.2020@smu.edu.sg",
        name: "Siang Meng",
        pax: 2,
        date_of_visit: new Date().toISOString(),
        table_id: "11",
    };
    await sendConfirmation(
        fakeReservation,
        adminInterfaceLink + "/reservation/cancel/" + "reservationId"
    ).then(() => {
        return res.status(200).json({
            message: "Email sent",
        });
    });
};

const cancelReservation = async (req, res) => {
    const { reservationId } = req.params;
    try {
        const existingReservation = await Reservation.findById(reservationId);
        if (!existingReservation) {
            return res.status(404).json({
                message: "Reservation not found.",
            });
        }
        const { email, name, pax, date_of_visit, table_id } =
            existingReservation;
        const currentDate = new Date();
        const reservationDate = convertToDateTimeObject(date_of_visit);
        if (currentDate >= reservationDate) {
            return res.status(500).json({
                message: "Too late to cancel",
            });
        }
        const dummyReservation = await Reservation.findOne({
            email,
            name,
            pax,
            date_of_visit: convertToDateTimeFormat(
                new Date(Date.parse(reservationDate) + 30 * 60 * 1000)
            ),
            table_id,
        });
        const deleteOriginalReservation = await Reservation.deleteOne(
            existingReservation
        );
        const deleteDummyReservation = await Reservation.deleteOne(
            dummyReservation
        );

        Promise.allSettled([deleteOriginalReservation, deleteDummyReservation])
            .then(() => {
                return res.status(200).json({
                    message: "Reservation deleted",
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: "Failed to delete",
                });
            });

    } catch (err) {
        console.warn(err);
        return res.status(500).json({
            message: "Failed to delete",
        });
    }
};

module.exports = {
    getAvailableTiming,
    createReservation,
    cancelReservation,
    testEmailConfirmation,
    getReservationById,
};
