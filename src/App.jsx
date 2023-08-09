import { useState } from 'react'
import ContactInfo from './components/ContactInfo';
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

  const firstNameChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, firstName: e.target.value });
  }

  const lastNameChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, lastName: e.target.value });
  }

  const addressChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, address: e.target.value });
  }
  
  const phoneChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, phone: e.target.value });
  }

  return (
    <>
      <header>
        <h1>CV APPLICATION</h1>
      </header>
      <main>
        <div className="wrapper">

            <ContactInfo 
              {...contactInfo}
              changeFirstName={firstNameChangeHandler}
              changeLastName={lastNameChangeHandler}
              changeAddress={addressChangeHandler}
              changePhone={phoneChangeHandler}
            />

            <Preview 
              contact={contactInfo}
              education={education}
              workExp={workExperience}
            />
        </div>
      </main>
    </>
  );
}

export default App;
