const EducationEdit = ({
  educationFormVisible,
  toggleEducationForm,
  currentEducation,
  handleEducationChange,
  addOrEditEducation,
  cancelEducationForm,
  educations,
  editEducations,
  deleteEducations,
}) => {
  return (
    <div>
      <h1>Education List</h1>
      {!educationFormVisible && (
        <button onClick={toggleEducationForm}>Add New Education</button>
      )}
      {educationFormVisible ? (
        <div>
          <input
            type="text"
            placeholder="Institude Name"
            value={currentEducation.name}
            onChange={(e) => handleEducationChange(e, "name")}
          />
          <input
            type="text"
            placeholder="Degree"
            value={currentEducation.degree}
            onChange={(e) => handleEducationChange(e, "degree")}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={currentEducation["start date"]}
            onChange={(e) => handleEducationChange(e, "start date")}
          />
          <input
            type="text"
            placeholder="End Date"
            value={currentEducation["end date"]}
            onChange={(e) => handleEducationChange(e, "end date")}
          />
          <input
            type="text"
            placeholder="Location"
            value={currentEducation.location}
            onChange={(e) => handleEducationChange(e, "location")}
          />
          <button onClick={addOrEditEducation}>Submit</button>
          <button onClick={cancelEducationForm}>Cancel</button>
        </div>
      ) : (
        <ul>
          {educations.map((education, index) => (
            <div key={index}>
              {education.name}
              <button onClick={() => editEducations(index)}>Edit</button>
              <button onClick={() => deleteEducations(index)}>Delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationEdit;
