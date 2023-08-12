/* eslint-disable react/prop-types */
import '../styles/ContactInfo.css'

function ContactInfo({ firstName, lastName, occupation, address, email, phone, changeFirstName,
                       changeLastName, changeAddress, changeOccupation, changeEmail, changePhone }) {
  return (
    <div className="customForm">
      <h1>Contact Info</h1>
      <form action="">
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text"
          id="firstName"
          value={firstName}
          onChange={changeFirstName}
          placeholder='First Name' 
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text"
          id="lastName"
          value={lastName}
          onChange={changeLastName} 
          placeholder='Last Name' 
        />

        <label htmlFor="occupation">Occupation</label>
        <input 
          type="text"
          id="occupation"
          value={occupation}
          onChange={changeOccupation} 
          placeholder='Occupation' 
        />

        <label htmlFor="address">Address</label>
        <input 
          type="text"
          id="address"
          value={address}
          onChange={changeAddress} 
          placeholder='Address' 
        />

        <label htmlFor="address">Email</label>
        <input 
          type="email"
          id="email"
          value={email}
          onChange={changeEmail} 
          placeholder='Email Address' 
        />

        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel"
          id="phone"
          value={phone}
          onChange={changePhone}
          placeholder='Phone Number' 
        />
      </form>
    </div>
  );
}

export default ContactInfo;