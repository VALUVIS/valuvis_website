const nodemailer = require('nodemailer');
const crypto = require('crypto');


let tempData = new Map();

/**
 * Registriert einen Benutzer mit einer gegebenen E-Mail-Adresse.
 * Generiert ein Token und sendet eine Bestätigungsmail an die E-Mail-Adresse.
 * Speichert das Token und die E-Mail-Adresse vorläufig in einer Map, zusammen mit einem Ablaufdatum.
 * @param newUserMail: String - Die E-Mail-Adresse des Benutzers.
 */
function registerUser(newUserMail) {
    let confirmationLink = generateConfirmationLink();
    send_confirmation_mail(newUserMail, confirmationLink);
    let expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    tempData.set(confirmationLink, {email: newUserMail, expiryDate: expiryDate});
}


/** 
 * Generiert ein Token und gibt einen Link + Token zurück
*/
function generateConfirmationLink() {
    let token = crypto.randomBytes(64).toString('hex');
    return `http://localhost:3000?token=${token}`;
}

/** 
 * Schickt eine Mail über den SMPT-Host
 * @param receiver: String - Die E-Mail-Adresse des Empfängers.
 * @param token: String - Die E-Mail-Adresse des Empfängers.
*/
function send_confirmation_mail(newUserMail, confirmationLink) {
    const host = 'smtp.strato.de';
    const user = "m.wagner@valuvis.de"; // SMTP-Benutzername
    const pass = "-Valuvis-27;09mw"; // SMTP-Passwort

    let transporter = nodemailer.createTransport({
        host: host,
        port: 465, 
        secure: true, 
        auth: {
            user: user, 
            pass: pass 
        }
    });

    let mailOptions = {
        from: '"Valuvis" <m.wagner@valuvis.de>', // Absender
        to: newUserMail, // Empfänger
        subject: "Test der Bestätigung", // Betreffzeile
        text: `Bitte bestätigen Sie Ihre E-Mail-Adresse, indem Sie auf den folgenden Link klicken: ${confirmationLink}`,
    };

    function sendMailCallback(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Nachricht gesendet!');
        return true;
    }

    transporter.sendMail(mailOptions, sendMailCallback)
}

registerUser("m.wagner@valuvis.de")
registerUser("p.goehl@valuvis.de")