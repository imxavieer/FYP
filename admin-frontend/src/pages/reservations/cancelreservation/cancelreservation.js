import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function CancelReservation() {
    const [loading, setLoading] = useState(true);
    // 2 successes --> loading & deleting
    // load success --> to retrive reservation
    const [loadSuccess, setLoadSuccess] = useState(false);
    // delete success --> to delete reservation
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const { reservationId } = useParams();
    const [reservation, setReservation] = useState(null);

    // 2 key requests
    // find reservation
    const getReservationById = async () => {
        await axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}reservation/${reservationId}`
            )
            .then((result) => {
                setReservation(result);
                setLoading(false);
                setLoadSuccess(true);
            })
            .catch((err) => {
                setLoading(false);
                setLoadSuccess(false);
            });
    };
    // delete reservation (trigggerd by confirmation)
    const cancelReservation = async () => {
        await axios
            .delete(
                `${process.env.REACT_APP_BACKEND_URL}reservation/${reservationId}`
            )
            .then(() => {
                setDeleteSuccess(true);
            })
            .catch(() => {
                setDeleteSuccess(false)
            });
    };
    useEffect(() => {
        getReservationById();
    }, []);
    return (
        <div>
            {loading ? (
                <>
                    <h1>Loading ...</h1>
                </>
            ) : (
                <>
                    {loadSuccess ? (
                        <>
                            <h1>Reservation found</h1>
                        </>
                    ) : (
                        <>
                            <h1>Reservation Not found</h1>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default CancelReservation;
