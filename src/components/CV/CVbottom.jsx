const ContactInfo = ({ src, alt, section, info }) => {
  return (
    <div className="contact">
      <img src={src} alt={alt} className="contact-icon" />
      <div className="contact-title-info">
        <div className="contact-title">{section}</div>
        <div className="contact-info">{info}</div>
      </div>
    </div>
  );
};

const CVbottom = ({ personalInfo, selectedImage }) => {
  return (
    <div className="paper-bottom">
      <div className="left-container">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="User's Image"
            style={{ width: "200px", height: "200px" }}
          />
        )}
        <ContactInfo
          src="../src/assets/email.svg"
          alt="email icon"
          section="EMAIL"
          info={personalInfo.email}
        />
        <ContactInfo
          src="../src/assets/linkedin.svg"
          alt="linkedin icon"
          section="LINKEDIN"
          info={personalInfo.linkedin}
        />
        <ContactInfo
          src="../src/assets/address.svg"
          alt="address icon"
          section="ADDRESS"
          info={personalInfo.address}
        />
      </div>

      <div className="name-title-container">
        <div className="first-name">{personalInfo.firstName}</div>
        <div className="last-name">{personalInfo.lastName}</div>
        <div className="name-title">{personalInfo.title}</div>
      </div>
    </div>
  );
};

export default CVbottom;
