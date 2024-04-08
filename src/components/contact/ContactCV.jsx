import "./contact.sass";
import { useTranslation } from 'react-i18next';
import React from 'react';

function ContactCV() {
    const {t} = useTranslation();
    return(
        <div className="contact">
            <h2>{t("Contact")}</h2>
            <div className="contact-string">
                <p className="title"> {t("Email")}</p>
                <a className="text" href="mailto:rosinayana8@gmail.com">rosinayana8@gmail.com</a>
            </div>
            <div className="contact-string">
                <p className="title"> {t("Phone")}</p>
                <a className="text" href="tel:+306970241107">+30-697-024-11-07</a>
            </div>
        </div>
    )
}

export default ContactCV;