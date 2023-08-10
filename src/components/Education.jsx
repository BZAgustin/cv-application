/* eslint-disable react/prop-types */
import '../styles/Education.css'

function Education({ educationList, changeEducation, newEducation, removeEducation }) {
  return (
    <div className="education">
      <h1>Education Experiences</h1>

      {educationList.map((education) => (
      <div key={education.id}>
        <form action="">
          <label htmlFor="institution">Institution</label>
          <input 
            type="text"
            id={`institution-${education.id}`}
            value={education.institution}
            onChange={(e) => changeEducation(education.id, 'institution', e.target.value)}
          />

          <label htmlFor="degree">Degree</label>
          <input 
            type="text"
            id={`degree-${education.id}`}
            value={education.degree}
            onChange={(e) => changeEducation(education.id, 'degree', e.target.value)}
          />

          <label htmlFor="from">From</label>
          <input 
            type="date"
            id={`from-${education.id}`}
            value={education.from}
            onChange={(e) => changeEducation(education.id, 'from', e.target.value)}
          />

          <label htmlFor="to">To</label>
          <input 
            type="date"
            id={`to-${education.id}`}
            value={education.to}
            onChange={(e) => changeEducation(education.id, 'to', e.target.value)}
          />
        
        <div className="btn">
          <button onClick={(e) => removeEducation(e, education.id)}>Remove</button>
        </div>

        </form>
        <hr />
      </div>
      ))}

      <div className="btn">
        <button onClick={newEducation}>Add New</button>
      </div>
    </div>
  );
}

export default Education;