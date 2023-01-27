const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.TRANSPORTER_AUTH_USER,
        pass: process.env.TRANSPORTER_AUTH_PASSWORD,
    },
});

// email scenarios: (can refactor later)
// confirmaion
const sendConfirmation = async (reservationDetails) => {
    const {
        email: recipient,
        name,
        pax,
        date_of_visit,
        _id:reservation_id,
    } = reservationDetails;

    emailSubject = "Reservation Confirmation";
    emailContent = `<h4>Dear ${name},</h4>  Thank you for making a reservation with us. 
    Your reservation details are as follows: <br><br>
    &nbsp;&nbsp;Reference: ${reservation_id} 
    <br> &nbsp;&nbsp;Date of Visit: ${date_of_visit} 
    <br> &nbsp;&nbsp;Number of Pax: ${pax} 
    <br><br> We look forward to seeing you!\n\n<br>
    <h5>Regards, <br>- Honey Night</h5>`;

    await transporter.sendMail({
        from: `"Honey Night" ${process.env.TRANSPORTER_AUTH_USER}`, // sender address
        to: recipient, // list of receivers
        subject: emailSubject, // Subject line
        html: emailContent, // html body
    });
};

module.exports = { sendConfirmation };
