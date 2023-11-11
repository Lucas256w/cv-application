import PhoneSvg from "../../assets/phone.svg";
import EmailSvg from "../../assets/email.svg";
import LinkedinSvg from "../../assets/linkedin.svg";
import AddressSvg from "../../assets/address.svg";

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

const CVtop = ({ personalInfo }) => {
  return (
    <div className="paper-top">
      <div className="contact-container">
        <ContactInfo
          src={PhoneSvg}
          alt="phone icon"
          section="PHONE"
          info={personalInfo.number}
        />
        <ContactInfo
          src={EmailSvg}
          alt="email icon"
          section="EMAIL"
          info={personalInfo.email}
        />
        <ContactInfo
          src={LinkedinSvg}
          alt="linkedin icon"
          section="LINKEDIN"
          info={personalInfo.linkedin}
        />
        <ContactInfo
          src={AddressSvg}
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

export default CVtop;
