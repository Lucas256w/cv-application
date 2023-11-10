const PersonalEdit = ({ personalInfo, handlePersonalInfoChange }) => {
  return (
    <div className="card personal-card">
      <h1 className="card-title">Personal Info</h1>
      <div className="input-container">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={personalInfo.firstName}
          onChange={(e) => handlePersonalInfoChange(e, "firstName")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={personalInfo.lastName}
          onChange={(e) => handlePersonalInfoChange(e, "lastName")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={personalInfo.title}
          onChange={(e) => handlePersonalInfoChange(e, "title")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={personalInfo.phone}
          onChange={(e) => handlePersonalInfoChange(e, "phone")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) => handlePersonalInfoChange(e, "email")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          placeholder="Linkedin"
          value={personalInfo.linkedin}
          onChange={(e) => handlePersonalInfoChange(e, "linkedin")}
        />
      </div>

      <div className="input-container">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={personalInfo.address}
          onChange={(e) => handlePersonalInfoChange(e, "address")}
        />
      </div>

      <div className="personal-textarea">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          cols="30"
          rows="10"
          placeholder="Summary"
          value={personalInfo.summary}
          onChange={(e) => handlePersonalInfoChange(e, "summary")}
        ></textarea>
      </div>
    </div>
  );
};

export default PersonalEdit;
