import { useState } from 'react'
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Preview from './components/Preview';
import uniqid from 'uniqid';
import './App.css'

function App() {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  });

  const [education, setEducation] = useState([{
    id: uniqid(),
    institution: '',
    degree: '',
    from: '',
    to: '',
  }]);

  const [workExperience, setWorkExperience] = useState([{
    id: uniqid(),
    company: '',
    position: '',
    from: '',
    to: ''
  }]);

  const handleFirstNameChange = (e) => {
    setContactInfo({ ...contactInfo, firstName: e.target.value });
  }

  const handleLastNameChange = (e) => {
    setContactInfo({ ...contactInfo, lastName: e.target.value });
  }

  const handleAddressChange = (e) => {
    setContactInfo({ ...contactInfo, address: e.target.value });
  }
  
  const handlePhoneChange = (e) => {
    setContactInfo({ ...contactInfo, phone: e.target.value });
  }

  const addEducation = (e) => {
    e.preventDefault();
    setEducation([...education, {
      id: uniqid(),
      institution: '',
      degree: '',
      from: '',
      to: ''
    }]);
  }

  return (
    <>
      <header>
        <h1>CV APPLICATION</h1>
      </header>
      <main>
        <div className="wrapper">
          <div className="editor">
            <ContactInfo 
              {...contactInfo}
              changeFirstName={handleFirstNameChange}
              changeLastName={handleLastNameChange}
              changeAddress={handleAddressChange}
              changePhone={handlePhoneChange}
            />

            <Education 
              educationList={education}
              newEducation={addEducation}
           />
          </div>

          <div className="preview">
            <Preview 
              contact={contactInfo}
              education={education}
              workExp={workExperience}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
