import './software-skills.sass';
import { useTranslation } from 'react-i18next';
import React from 'react';

function SoftwareSkills() {
    const {t} = useTranslation();
    return(
        <div className="software-skills">
            <h2>{t("Software skills")}</h2>  
            <ul className='software-list'>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>VS Code</li>
            </ul>
        </div>

        
    )
}

export default SoftwareSkills;