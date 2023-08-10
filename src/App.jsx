import { useState } from 'react'
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Work from './components/Work';
import Preview from './components/Preview';
import uniqid from 'uniqid';
import './App.css'

function App() {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
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

  const handleEmailChange = (e) => {
    setContactInfo({ ...contactInfo, email: e.target.value });
  }
  
  const handlePhoneChange = (e) => {
    setContactInfo({ ...contactInfo, phone: e.target.value });
  }

  const handleEducationChange = (id, field, value) => {
    setEducation(prevEducation => {
      return prevEducation.map(edu => {
        if(edu.id === id) {
          return { ...edu, [field]: value };
        }
        return edu;
      });
    });
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

  const removeEducation = (e, id) => {
    e.preventDefault();
    setEducation(education.filter(item => item.id !== id));
  }
  
  const handleWorkChange = (id, field, value) => {
    setWorkExperience(prevWorkExp => {
      return prevWorkExp.map(work => {
        if(work.id === id) {
          return { ...work, [field]: value };
        }
        return work;
      });
    });
  }

  const addWorkExperience = (e) => {
    e.preventDefault();
    setWorkExperience([...workExperience, {
      id: uniqid(),
      company: '',
      position: '',
      from: '',
      to: ''
    }]);
  }

  const removeWorkExperience = (e, id) => {
    e.preventDefault();
    setWorkExperience(workExperience.filter(work => work.id !== id));
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
              changeEmail={handleEmailChange}
              changePhone={handlePhoneChange}
            />

            <Education 
              educationList={education}
              changeEducation={handleEducationChange}
              newEducation={addEducation}
              removeEducation={removeEducation}
            />

            <Work 
              workExpList={workExperience}
              changeWork={handleWorkChange}
              newExp={addWorkExperience}
              removeExp={removeWorkExperience}
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
