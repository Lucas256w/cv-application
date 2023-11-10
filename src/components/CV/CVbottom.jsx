const EducationInfo = ({ start, end, name, degree, location }) => {
  return (
    <div className="education-content">
      <div className="education-year-location">
        <div className="education-year">
          {start} - {end}
        </div>
        <div className="education-location">{location}</div>
      </div>
      <div className="degree-name">{degree}</div>
      <div className="institute-name">{name}</div>
    </div>
  );
};

const WorkInfo = ({ start, end, name, position, location, summary }) => {
  return (
    <div className="work-content">
      <div className="work-position-year">
        <div className="work-position">{position}</div>
        <div className="work-year">
          {start} - {end}
        </div>
      </div>
      <div className="work-name-location">
        <div className="work-name">{name}</div>
        <div className="work-year">{location}</div>
      </div>
      <div className="work-summary">{summary}</div>
    </div>
  );
};

const CVbottom = ({ educations, works, selectedImage, personalInfo }) => {
  return (
    <div className="paper-bottom">
      <div className="left-container">
        {selectedImage && (
          <img className="user-image" src={selectedImage} alt="User's Image" />
        )}
        <div className="big-title">EDUCATION</div>
        {educations.map((education) => (
          <EducationInfo
            key={education.editIndex}
            start={education["start date"]}
            end={education["end date"]}
            name={education.name}
            degree={education.degree}
            location={education.location}
          />
        ))}
      </div>

      <div className="right-container">
        <div className="profile-summary-container">
          <div className="big-title">PROFILE SUMMARY</div>
          <div className="profile-summary"> {personalInfo.summary}</div>
        </div>
        <div className="work-experience">
          <div className="big-title">WORK EXPERIENCE</div>
          {works.map((work) => (
            <WorkInfo
              key={work.editIndex}
              start={work["start date"]}
              end={work["end date"]}
              name={work.name}
              position={work.position}
              location={work.location}
              summary={work.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVbottom;
