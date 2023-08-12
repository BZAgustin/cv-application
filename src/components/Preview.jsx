/* eslint-disable react/prop-types */
import '../styles/Preview.css'
import profileImage from '../assets/johnDoe.jpg'
import addressIcon from '../assets/address.png'
import emailIcon from '../assets/email.png'
import phoneIcon from '../assets/phone.png'
import previewEducation from '../assets/previewEducation.png'
import previewWork from '../assets/previewWork.png'

function Preview({ contact, education, workExp }) {
  const { firstName, lastName, occupation, address, email, phone } = contact;

  const educationList = education.map((item) => 
    <div className="eduItem" key={item.id}>
      <div className="bulletPoint">
        ◯
      </div>
      <div className="itemLeft">
        <h2>{item.institution}</h2>
        <h3>{item.degree}</h3>
      </div>

      <div className="itemRight">
        <span>{`${item.from} - ${item.to}`}</span>
      </div>
    </div>
  );

  const workList = workExp.map((item) => 
    <div className="workItem" key={item.id}>
      <div className="bulletPoint">
        ◯
      </div>
      <div className="itemLeft">
        <h2>{item.company}</h2>
        <h3>{item.position}</h3>
      </div>

      <div className="itemRight">
        <span>{`${item.from} - ${item.to}`}</span>
      </div>
    </div>
  );

  return (
    <div className="previewContainer">
      <div className="cvSidebar">
        <div className="sidebarTop">
          <img src={profileImage} alt="pic of me" />
        </div>

        <div className="sidebarBody">
          <div className="sidebarContact">
            <div className="contactItem">
              <img src={addressIcon} alt="addressIcon" />
              <span> <b>{address}</b></span>
            </div>

            <div className="contactItem">
              <img src={emailIcon} alt="emailIcon" />
              <span><b>{email}</b></span>
            </div>

            <div className="contactItem">
              <img src={phoneIcon} alt="phoneIcon" />
              <span><b>{phone}</b></span>
            </div>
          </div>
        </div>
      </div>

      <div className="cvMain">
        <div className="cvHeader">
          <h1>{`${firstName} ${lastName}`}</h1>
          <h2>{occupation}</h2>
        </div>

        <div className="cvBody">
          <div className="previewEducation">
            <h1> <img src={previewEducation} alt="" id="titleIcon" /> Education</h1>
            <hr />

            {educationList.map(item => item)}            
          </div>

          <div className="previewWorkExp">
            <h1> <img src={previewWork} alt="" id="titleIcon"/> Work Experience</h1>
            <hr />

            {workList.map(item => item)}            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;