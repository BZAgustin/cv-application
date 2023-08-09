import { useState } from 'react'
import './App.css'

function App() {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  });

  const [education, setEducation] = useState([{
    institution: '',
    degree: '',
    from: '',
    to: '',
  }]);

  const [workExperience, setWorkExperience] = useState([{
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
          <div className="editor-container">

          </div>
          <div className="preview-container">

          </div>
        </div>
      </main>
    </>
  );
}

export default App;