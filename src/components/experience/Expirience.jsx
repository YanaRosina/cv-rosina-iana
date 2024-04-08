import './expirience.sass';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Expirience() {
    const {t} = useTranslation();
    return (
        <div className="expirience">
            <h2>{t("Experience")}</h2>
            <ul className="expirience-items">
                <li className="exp-item exp1" style={{listStyleType: "none"}}>
                    <p className='exp-title'>{t("Exp1-name")}</p>
                    <p className='exp-organization'>{t("Exp1-organization")}</p>
                    <p className='exp-date'>{t("Exp1-date")}</p>
                </li>
                <li className="exp-item exp2">
                    <p className='exp-title'>{t("Exp2-name")}</p>
                    <p className='exp-organization'>{t("Exp2-organization")}</p>
                    <p className='exp-date'>{t("Exp2-date")}</p>
                </li>
                <li className="exp-item exp3">
                    <p className='exp-title'>{t("Exp3-name")}</p>
                    <p className='exp-organization'>{t("Exp3-organization")}</p>
                    <p className='exp-date'>{t("Exp3-date")}</p>
                </li>
            </ul>
        </div>
    )
}

export default Expirience;