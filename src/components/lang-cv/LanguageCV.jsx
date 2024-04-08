import './lang.sass';
import { useTranslation } from 'react-i18next';
import React from 'react';

function LanguageCV() {
    const {t} = useTranslation();

    return(
        <div className='lang'>
            <h2>{t("Lang")}</h2>
            <div className="lang-items">
                <div className="lang-item">
                    <p className='lang-name'>{t("Russian")}</p>
                    <p className='lang-level'>Native</p>
                </div>
                <div className="lang-item">
                    <p className='lang-name'>{t("English")}</p>
                    <p className='lang-level'>Intermediate</p>
                </div>
                <div className="lang-item">
                    <p className='lang-name'>{t("Greek")}</p>
                    <p className='lang-level'>Elementary</p>
                </div> 
            </div>


        </div>
    )
}

export default LanguageCV;