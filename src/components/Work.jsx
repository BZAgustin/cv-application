/* eslint-disable react/prop-types */

function Work({ workExpList, changeWork, newExp, removeExp }) {
  return (
    <div className="workExperience">
      <h1>Work Experience</h1>

      {workExpList.map((experience) => (
      <div key={experience.id}>
        <form action="">
          <label htmlFor="company">Company/Organization</label>
          <input 
            type="text"
            id={`company-${experience.id}`}
            value={experience.company}
            onChange={(e) => changeWork(experience.id, 'company', e.target.value)}
          />

          <label htmlFor="position">Position</label>
          <input 
            type="text"
            id={`position-${experience.id}`}
            value={experience.position} 
            onChange={(e) => changeWork(experience.id, 'position', e.target.value)}
          />

          <label htmlFor="from">From</label>
          <input 
            type="date"
            id={`from-${experience.id}`} 
            value={experience.from}
            onChange={(e) => changeWork(experience.id, 'from', e.target.value)}
          />

          <label htmlFor="to">To</label>
          <input 
            type="date"
            id={`to-${experience.id}`}
            value={experience.to}
            onChange={(e) => changeWork(experience.id, 'to', e.target.value)}
          />

        <div className="btn">
          <button onClick={(e) => removeExp(e, experience.id)}>Remove</button>
        </div>

        </form>
        <hr />
      </div>
      ))}

      <div className="btn">
        <button onClick={newExp}>Add New</button>
      </div>
    </div>
  );
}

export default Work;