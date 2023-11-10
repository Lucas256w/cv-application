const PersonalEdit = ({ personalInfo, handlePersonalInfoChange }) => {
  return (
    <div className="card">
      <h1>Personal Info</h1>
      <input
        type="text"
        placeholder="First Name"
        value={personalInfo.ame}
        onChange={(e) => handlePersonalInfoChange(e, "firstName")}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={personalInfo.name}
        onChange={(e) => handlePersonalInfoChange(e, "lastName")}
      />
      <input
        type="text"
        placeholder="Title"
        value={personalInfo.title}
        onChange={(e) => handlePersonalInfoChange(e, "title")}
      />
      <input
        type="text"
        placeholder="Phone"
        value={personalInfo.number}
        onChange={(e) => handlePersonalInfoChange(e, "number")}
      />
      <input
        type="text"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) => handlePersonalInfoChange(e, "email")}
      />
      <input
        type="text"
        placeholder="Linkedin"
        value={personalInfo.linkedin}
        onChange={(e) => handlePersonalInfoChange(e, "linkedin")}
      />
      <input
        type="text"
        placeholder="Address"
        value={personalInfo.address}
        onChange={(e) => handlePersonalInfoChange(e, "address")}
      />
      <textarea
        cols="30"
        rows="10"
        type="text"
        placeholder="Summary"
        value={personalInfo.summary}
        onChange={(e) => handlePersonalInfoChange(e, "summary")}
      ></textarea>
    </div>
  );
};

export default PersonalEdit;
