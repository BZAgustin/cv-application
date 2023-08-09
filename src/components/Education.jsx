/* eslint-disable react/prop-types */

function Education({ educationList, newEducation }) {
  return (
    <div className="education">
      <h1>Education Experiences</h1>

      {educationList.map((education) => (
      <>
        <form action="" key={education.id}>
          <label htmlFor="institution">Institution</label>
          <input 
            type="text"
            id={`institution-${education.id}`}
            value={education.institution}
          />

          <label htmlFor="degree">Degree</label>
          <input 
            type="text"
            id={`degree-${education.id}`}
            value={education.degree} 
          />

          <label htmlFor="from">From</label>
          <input 
            type="date"
            id={`from-${education.id}`} 
            value={education.from}
          />

          <label htmlFor="to">To</label>
          <input 
            type="date"
            id={`to-${education.id}`}
            value={education.to}
          />
        
        </form>
        <hr />
      </>
      ))}

      <button onClick={newEducation}>Add</button>
    </div>
  );
}

export default Education;