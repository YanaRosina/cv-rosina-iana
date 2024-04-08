import './intro.sass';
import mainPhoto from '../../img/photo.png';
import phonePhoto from '../../img/phone_main_photo.png';

import { useTranslation } from 'react-i18next';
import React from 'react';
import IntroText from './IntroText';



function IntroCV() {
    const {t} = useTranslation();
    const introText = t("IntroText");

    return (
        <div className='intro'>
             <div className="photo">
               <img src={mainPhoto}/>
            </div> 
            <div className="intro-info">
                <h1>{t('Hi')}</h1>
                <div className="phone_photo">
                    <img src={phonePhoto}/>
                </div> 
                <div className="contacts">
                    <div className="contact-string">
                        <p className="title"> {t("Email")}</p>
                        <a className="text" href="mailto:rosinayana8@gmail.com">rosinayana8@gmail.com</a>
                    </div>
                    <div className="contact-string">
                        <p className="title"> {t("Phone")}</p>
                        <a className="text" href="tel:+306970241107">+30-697-024-11-07</a>
                    </div>
                </div>
                <div className="intro-text">
                <IntroText text={introText} />
                </div>
            </div>
            <div className="big-text">            
                <IntroText text={introText} />
            </div>
        </div>
    )
}

export default IntroCV;