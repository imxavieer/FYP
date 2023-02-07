const changeSingleDigit = (number) => {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

const convertToDateTimeFormat = (dateTimeObject) => {
    const year = dateTimeObject.getFullYear();
    const month = changeSingleDigit(dateTimeObject.getMonth() + 1);
    const day = changeSingleDigit(dateTimeObject.getDate());
    const hour = changeSingleDigit(dateTimeObject.getHours());

    const minutes = dateTimeObject.getMinutes();
    return [year, month, day].join("-") + " " + hour + minutes;
};
module.exports = { convertToDateTimeFormat };
