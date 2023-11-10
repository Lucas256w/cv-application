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
      <h1>Work Experience</h1>
      {!workFormVisible && (
        <button onClick={toggleWorkForm}>Add New Work Experience</button>
      )}
      {workFormVisible ? (
        <div>
          <input
            type="text"
            placeholder="Company Name"
            value={currentWork.name}
            onChange={(e) => handleWorkChange(e, "name")}
          />
          <input
            type="text"
            placeholder="Position"
            value={currentWork.position}
            onChange={(e) => handleWorkChange(e, "position")}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={currentWork["start date"]}
            onChange={(e) => handleWorkChange(e, "start date")}
          />
          <input
            type="text"
            placeholder="End Date"
            value={currentWork["end date"]}
            onChange={(e) => handleWorkChange(e, "end date")}
          />
          <input
            type="text"
            placeholder="Location"
            value={currentWork.location}
            onChange={(e) => handleWorkChange(e, "location")}
          />
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
