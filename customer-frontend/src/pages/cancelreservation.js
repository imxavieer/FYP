import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function CancelReservation() {
    const { reservationId } = useParams();
    const cancelReservation = async () => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/${reservationId}`).then(()=>{
            alert("Reservation cancelled")
        }).catch((err)=>{
            console.error(err)
            alert("Failed to cancel")
        });
    };
    useEffect(() => {
        cancelReservation();
    }, []);
    return <div>Cancel Reservation</div>;
}

export default CancelReservation;
