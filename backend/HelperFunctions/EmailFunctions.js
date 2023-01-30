const nodemailer = require("nodemailer");
const path = require("path");
var handlebars = require("handlebars");

var fs = require("fs");
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
    var confirmationHtmlTemplate = fs.readFileSync(
        path.resolve(__dirname, "../EmailTemplates/ConfirmationEmail.html"),
        { encoding: "utf-8" }
    );
    var template = handlebars.compile(confirmationHtmlTemplate);
    const {
        email: recipient,
        name,
        pax,
        date_of_visit,
        _id: reservation_id,
    } = reservationDetails;

    var replacements = {
        recipient,
        name,
        pax,
        date_of_visit,
        reservation_id,
    };

    var htmlToSend = template(replacements);
    emailSubject = "Reservation Confirmation";

    await transporter.sendMail({
        from: `"Honey Night" ${process.env.TRANSPORTER_AUTH_USER}`, // sender address
        to: recipient, // list of receivers
        subject: emailSubject, // Subject line
        html: htmlToSend, // html body
        attachments: [
            {
                filename: "logo.png",
                path: path.resolve(__dirname, "../EmailTemplates/logo.png"),
                cid: "honeyNightLogo", //same cid value as in the html img src
            },
        ],
    });
};

module.exports = { sendConfirmation };
