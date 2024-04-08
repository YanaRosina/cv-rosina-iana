import './hard-skills.sass';
import { useTranslation } from 'react-i18next';
import React from 'react';

function HardSkills() {
    const {t} = useTranslation();
    return(
        <div className="hard-skills">
            <div className="oval">
                <h2>{t("Hard skills")}</h2>
                <div className="hard-skills-lists">
                    <ul className='hard-list'>
                        <li>JavaScript, JSX</li>
                        <li>React</li>
                        <li>HTML, CSS (SASS)</li>
                        <li>PHP</li>
                    </ul>
                    <ul className='hard-list'>
                        <li>Git, GitHub</li>
                        <li>CMS Wordpress</li>
                        <li>CMS Bitrix</li>
                        <li>SEO</li>
                    </ul>  
                </div>
            </div>
            

        </div>
    )
}

export default HardSkills;