/* eslint-disable react/prop-types */
import '../styles/ContactInfo.css'

function ContactInfo({ firstName, lastName, address, phone, changeFirstName,
                       changeLastName, changeAddress, changePhone }) {
  return (
    <div className="contact">
      <h1>Contact Info</h1>
      <form action="">
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text"
          id="firstName"
          value={firstName}
          onChange={changeFirstName} 
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text"
          id="lastName"
          value={lastName}
          onChange={changeLastName} 
        />

        <label htmlFor="address">Address</label>
        <input 
          type="text"
          id="address"
          value={address}
          onChange={changeAddress} 
        />

        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel"
          id="phone"
          value={phone}
          onChange={changePhone} 
        />
      </form>
    </div>
  );
}

export default ContactInfo;