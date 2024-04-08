
import LayoutCv from './components/layout-cv/LayoutCv.jsx';
import HeaderCV from './components/header/HeaderCV.jsx';
import IntroCV from './components/intro/IntroCV.jsx';
import LanguageCV from './components/lang-cv/LanguageCV.jsx';
import ContactCV from './components/contact/ContactCV.jsx';
import HardSkills from './components/hard-skills/HardSkills.jsx';
import SoftwareSkills from './components/software-skills/SoftwareSkills.jsx';
import Education from './components/education/Education.jsx';
import Expirience from './components/experience/Expirience.jsx';

function App() {
  
  return (
    <div className="App">   
      <LayoutCv/>
      <HeaderCV />
      <IntroCV />
      <div className='blocks-layout first'>
        <ContactCV />
        <LanguageCV />
      </div>
      <div className='blocks-layout skills'>
        <HardSkills/>
        <SoftwareSkills/>
      </div>
      <div className='blocks-layout last' >
         <Education />
         <Expirience />
      </div>
    
      


    

      
    </div>
  );
}

export default App;
