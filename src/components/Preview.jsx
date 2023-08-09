import '../styles/Preview.css'

function Preview({ contact, education, workExp }) {
  const { firstName, lastName, address, phone } = contact;

  return (
    <>
      <div className="preview">
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <h2>Address: {address}</h2>
        <h2>Phone: {phone}</h2>
      </div>

      <div className="education">

      </div>

      <div className="workExperience">
        
      </div>
    </>
    
  );
}

export default Preview;