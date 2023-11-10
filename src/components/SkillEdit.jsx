const SkillEdit = ({
  skillFormVisible,
  toggleSkillForm,
  currentSkill,
  handleSkillChange,
  addOrEditSkill,
  cancelSkillForm,
  skills,
  editSkills,
  deleteSkills,
}) => {
  return (
    <div className="card">
      <h1>Skills List</h1>
      {!skillFormVisible && (
        <button onClick={toggleSkillForm}>Add New Skill</button>
      )}
      {skillFormVisible ? (
        <div>
          <input
            type="text"
            placeholder="Institude Name"
            value={currentSkill.name}
            onChange={(e) => handleSkillChange(e, "name")}
          />
          <button onClick={addOrEditSkill}>Submit</button>
          <button onClick={cancelSkillForm}>Cancel</button>
        </div>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <div key={index}>
              {skill.name}
              <button onClick={() => editSkills(index)}>Edit</button>
              <button onClick={() => deleteSkills(index)}>Delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillEdit;
