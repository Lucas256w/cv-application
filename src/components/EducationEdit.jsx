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
    <div className="card">
      <h1 className="card-title">Education List</h1>
      {!educationFormVisible && (
        <button className="add-new-btn" onClick={toggleEducationForm}>
          Add New Education
        </button>
      )}
      {educationFormVisible ? (
        <div className="form">
          <label htmlFor="instituteName">Institute Name</label>
          <input
            type="text"
            id="instituteName"
            placeholder="Institute Name"
            value={currentEducation.name}
            onChange={(e) => handleEducationChange(e, "name")}
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            placeholder="Degree"
            value={currentEducation.degree}
            onChange={(e) => handleEducationChange(e, "degree")}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Start Date"
            value={currentEducation["start date"]}
            onChange={(e) => handleEducationChange(e, "start date")}
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="End Date"
            value={currentEducation["end date"]}
            onChange={(e) => handleEducationChange(e, "end date")}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={currentEducation.location}
            onChange={(e) => handleEducationChange(e, "location")}
          />

          <div className="submit-cancel-btn-container">
            <button className="form-btn" onClick={addOrEditEducation}>
              Submit
            </button>
            <button className="form-btn" onClick={cancelEducationForm}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {educations.map((education, index) => (
            <div className="list-item-container" key={index}>
              <div>{education.name}</div>
              <img
                className="list-edits-icon"
                src="./src/assets/edit.svg"
                onClick={() => editEducations(index)}
              />
              <img
                className="list-edits-icon"
                src="./src/assets/delete.svg"
                onClick={() => deleteEducations(index)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default EducationEdit;
