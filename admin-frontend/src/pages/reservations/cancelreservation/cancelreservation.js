import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function CancelReservation() {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const { reservationId } = useParams();
    const cancelReservation = async () => {
        await axios
            .delete(
                `${process.env.REACT_APP_BACKEND_URL}reservation/${reservationId}`
            )
            .then(() => {
                setLoading(false);
                setSuccess(true);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        cancelReservation();
    }, []);
    return (
        <div>
            {loading ? (
                <>
                    <h1>Cancelling</h1>
                </>
            ) : (
                <>
                    {success ? (
                        <>
                            <h1>Cancelled successfully!</h1>
                        </>
                    ) : (
                        <>
                            <h1>Cancellation failed!</h1>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default CancelReservation;
