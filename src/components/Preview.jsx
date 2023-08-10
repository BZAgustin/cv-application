/* eslint-disable react/prop-types */
import '../styles/Preview.css'

function Preview({ contact, education, workExp }) {
  const { firstName, lastName, address, email, phone } = contact;

  const educationList = education.map((item) => 
    <div className="edu-item" key={item.id}>
      <h3>{`Institution: ${item.institution}`}</h3>
      <h3>{`Degree: ${item.degree}`}</h3>
      <h3>{`From: ${item.from}`}</h3>
      <h3>{`To: ${item.to}`}</h3>
    </div>
  );

  const workList = workExp.map((item) => 
    <div className="work-item" key={item.id}>
      <h3>{`Company: ${item.company}`}</h3>
      <h3>{`Position: ${item.position}`}</h3>
      <h3>{`From: ${item.from}`}</h3>
      <h3>{`To: ${item.to}`}</h3>
    </div>
  );

  return (
    <>
      <div className="previewContact">
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <h2>Address: {address}</h2>
        <h2>Email: {email}</h2>
        <h2>Phone: {phone}</h2>
      </div>

      <div className="previewEducation">
        {educationList.map(item => item)}
      </div>

      <div className="previewWorkExperience">
        {workList.map(item => item)}
      </div>
    </>
    
  );
}

export default Preview;