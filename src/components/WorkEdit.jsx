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
        <div>
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

          <button onClick={addOrEditWork}>Submit</button>
          <button onClick={cancelWorkForm}>Cancel</button>
        </div>
      ) : (
        <ul>
          {works.map((work, index) => (
            <div key={index}>
              {work.name}
              <button onClick={() => editWorks(index)}>Edit</button>
              <button onClick={() => deleteWorks(index)}>Delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkEdit;
