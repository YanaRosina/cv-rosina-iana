import './education.sass';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Education() {
    const {t} = useTranslation();
    return(
        <div className="education">
            <h2>{t("Education")}</h2>
            <ul className='education-list'>
                <li className="education-list-item">
                    <div className="education-title-block">
                        <p className='title'>{t("Higher education title")}</p>
                        <p className='date'>{t("Higher education date")}</p>
                    </div>
                    <p className='education-text'>{t("Higher education text")}</p>
                </li>
                <li className="education-list-item">
                    <div className="education-title-block">
                        <p className='title'>{t("Online courses title")}</p>
                        <p className='date'>{t("Online courses date")}</p>
                    </div>
                    <ul className="cours-list">
                        <li className="cours-item">{t("JS and React")}</li>
                        <li className="cours-item">{t("WordPress")}</li>
                        <li className="cours-item">{t("Design Theory")}</li>
                        <li className="cours-item">{t("Figma")}</li>
                    </ul>
                </li>
                

            </ul>

        </div>
    )
}

export default Education;