import { useTranslation } from 'react-i18next';
import './header.sass'
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';

function HeaderCV() {
    const{ t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'en');

    const handleLenguageChange = (clicklang) => {

        if(clicklang === 'ru') {
            i18n.changeLanguage('ru');
            setLanguage('ru')
        } else if (clicklang === 'en') {
            i18n.changeLanguage('en');
            setLanguage('en')
        }
    }
    return(
        <nav className='menu'>
            <ul className='big_menu'>
                <li className={i18n.language === 'ru' ? 'active' : ''} onClick={()=> handleLenguageChange('ru')}>{t('Russian')}</li>
                <li className={i18n.language === 'en' ? 'active' : ''} onClick={()=> handleLenguageChange('en')}>{t('English')}</li>
            </ul>
            <ul className='small_menu'>
                <li className={i18n.language === 'ru' ? 'active' : ''} onClick={()=> handleLenguageChange('ru')}>{t('Ru')}</li>
                <li className={i18n.language === 'en' ? 'active' : ''} onClick={()=> handleLenguageChange('en')}>{t('Eng')}</li>
            </ul>  
        </nav>
    )
        
}

export default HeaderCV;