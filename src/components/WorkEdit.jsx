const WorkEdit = ({
  workFormVisible,
  toggleWorkForm,
  currentWork,
  handleWorkChange,
  addOrEditWork,
  cancelWorkForm,
  works,
  editWorks,
  deleteWorks,
}) => {
  return (
    <div className="card">
      <h1 className="card-title">Work Experience</h1>
      {!workFormVisible && (
        <button className="add-new-btn" onClick={toggleWorkForm}>
          Add New Work Experience
        </button>
      )}
      {workFormVisible ? (
        <div className="form">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            placeholder="Company Name"
            value={currentWork.name}
            onChange={(e) => handleWorkChange(e, "name")}
          />

          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            placeholder="Position"
            value={currentWork.position}
            onChange={(e) => handleWorkChange(e, "position")}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Start Date"
            value={currentWork["start date"]}
            onChange={(e) => handleWorkChange(e, "start date")}
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="End Date"
            value={currentWork["end date"]}
            onChange={(e) => handleWorkChange(e, "end date")}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={currentWork.location}
            onChange={(e) => handleWorkChange(e, "location")}
          />

          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            placeholder="Summary"
            value={currentWork.summary}
            onChange={(e) => handleWorkChange(e, "summary")}
          ></textarea>

          <div className="submit-cancel-btn-container">
            <button className="form-btn" onClick={addOrEditWork}>
              Submit
            </button>
            <button className="form-btn" onClick={cancelWorkForm}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {works.map((work, index) => (
            <div className="list-item-container" key={index}>
              <div>{work.name}</div>
              <img
                className="list-edits-icon"
                src="./src/assets/edit.svg"
                onClick={() => editWorks(index)}
              />
              <img
                className="list-edits-icon"
                src="./src/assets/delete.svg"
                onClick={() => deleteWorks(index)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WorkEdit;
