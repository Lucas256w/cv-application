import { useState } from "react";
import EducationEdit from "./components/EducationEdit";
import WorkEdit from "./components/WorkEdit";
import PersonalEdit from "./components/PersonalEdit";
import CVtop from "./components/CV/CVtop";
import CVbottom from "./components/CV/CVbottom";
import exampleData from "./example-data";
import { v4 as uuidv4 } from "uuid";
import Profile from "./assets/placeholder-profile.png";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  const [selectedImage, setSelectedImage] = useState(Profile);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const openFileInput = () => {
    document.getElementById("file-input").click();
  };

  const [educations, setEducations] = useState(exampleData.educations);
  const [educationFormVisible, setEducationFormVisible] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({
    name: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
    editIndex: -1,
  });

  const [works, setWorks] = useState(exampleData.works);
  const [workFormVisible, setWorkFormVisible] = useState(false);
  const [currentWork, setCurrentWork] = useState({
    name: "",
    position: "",
    "start date": "",
    "end date": "",
    location: "",
    summary: "",
    editIndex: -1,
  });

  const clearContent = () => {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      title: "",
      number: "",
      email: "",
      linkedin: "",
      summary: "",
      address: "",
    });
    setSelectedImage("../src/assets/placeholder-profile.png");
    setEducations([]);
    setEducationFormVisible(false);
    setCurrentEducation({
      name: "",
      degree: "",
      "start date": "",
      "end date": "",
      location: "",
      editIndex: -1,
    });
    setWorks([]);
    setWorkFormVisible(false);
    setCurrentWork({
      name: "",
      position: "",
      "start date": "",
      "end date": "",
      location: "",
      summary: "",
      editIndex: -1,
    });
  };

  const toggleEducationForm = () => {
    if (educationFormVisible) {
      // If the form is already visible, hide it and clear the currentEducation
      setCurrentEducation({
        name: "",
        degree: "",
        "start date": "",
        "end date": "",
        location: "",
        editIndex: -1,
      });
      setEducationFormVisible(false);
    } else {
      setWorkFormVisible(false);
      setEducationFormVisible(true);
    }
  };

  const toggleWorkForm = () => {
    if (workFormVisible) {
      // If the form is already visible, hide it and clear the currentEducation
      setCurrentWork({
        name: "",
        position: "",
        "start date": "",
        "end date": "",
        location: "",
        summary: "",
        editIndex: -1,
      });
      setWorkFormVisible(false);
    } else {
      setEducationFormVisible(false);
      setWorkFormVisible(true);
    }
  };

  const addOrEditEducation = () => {
    if (
      currentEducation.name &&
      currentEducation.degree &&
      currentEducation["start date"] &&
      currentEducation["end date"] &&
      currentEducation.location
    ) {
      if (currentEducation.editIndex === -1) {
        // Add a new education
        setEducations([...educations, { ...currentEducation }]);
      } else {
        // Edit an existing education
        const updatedEducations = [...educations];
        updatedEducations[currentEducation.editIndex] = { ...currentEducation };
        setEducations(updatedEducations);
      }
      // Clear the currentEducation and hide the form
      setCurrentEducation({
        name: "",
        degree: "",
        "start date": "",
        "end date": "",
        location: "",
        editIndex: -1,
      });
      setEducationFormVisible(false);
    }
  };

  const addOrEditWork = () => {
    if (
      currentWork.name &&
      currentWork.position &&
      currentWork["start date"] &&
      currentWork["end date"] &&
      currentWork.location &&
      currentWork.summary
    ) {
      if (currentWork.editIndex === -1) {
        // Add a new work
        setWorks([...works, { ...currentWork }]);
      } else {
        // Edit an existing work
        const updatedWorks = [...works];
        updatedWorks[currentWork.editIndex] = {
          ...currentWork,
        };
        setWorks(updatedWorks);
      }
      // Clear the currentEducation and hide the form
      setCurrentWork({
        name: "",
        position: "",
        "start date": "",
        "end date": "",
        location: "",
        summary: "",
        editIndex: -1,
      });
      setWorkFormVisible(false);
    }
  };

  const deleteEducations = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const editEducations = (index) => {
    setCurrentEducation({ ...educations[index], editIndex: index });
    setEducationFormVisible(true);
  };

  const deleteWorks = (index) => {
    const updatedWorks = [...works];
    updatedWorks.splice(index, 1);
    setWorks(updatedWorks);
  };

  const editWorks = (index) => {
    setCurrentWork({ ...works[index], editIndex: index });
    setWorkFormVisible(true);
  };

  const cancelEducationForm = () => {
    // Clear the currentEducation and hide the form
    setCurrentEducation({
      name: "",
      degree: "",
      "start date": "",
      "end date": "",
      location: "",
      editIndex: -1,
    });
    setEducationFormVisible(false);
  };

  const cancelWorkForm = () => {
    // Clear the currentEducation and hide the form
    setCurrentWork({
      name: "",
      degree: "",
      "start date": "",
      "end date": "",
      location: "",
      summary: "",
      editIndex: -1,
    });
    setWorkFormVisible(false);
  };

  const handlePersonalInfoChange = (event, what) => {
    setPersonalInfo({ ...personalInfo, [what]: event.target.value });
  };

  const handleEducationChange = (event, what) => {
    setCurrentEducation({
      ...currentEducation,
      [what]: event.target.value,
      id: uuidv4(),
    });
  };

  const handleWorkChange = (event, what) => {
    setCurrentWork({
      ...currentWork,
      [what]: event.target.value,
      id: uuidv4(),
    });
  };

  const [editDisplay, setEditDisplay] = useState("edit-section");
  const [showEdit, setShowEditDisplay] = useState("card no");
  const handleEditDisplay = () => {
    if (editDisplay == "edit-section") {
      setShowEditDisplay("card");
      setEditDisplay("edit-section no");
    } else {
      setEditDisplay("edit-section");
      setShowEditDisplay("card no");
    }
  };

  return (
    <>
      <div className={editDisplay}>
        <div
          className="card"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={handleEditDisplay} className="add-new-btn">
            Hide edit
          </button>
          <button
            onClick={clearContent}
            style={{ color: "#A91E15", fontWeight: "600" }}
            className="add-new-btn"
          >
            Clear Content
          </button>
        </div>

        <PersonalEdit
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />

        <div className="card">
          <h1 className="card-title">Upload Profile Picture</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="file-input"
          />
          <button onClick={openFileInput} className="add-new-btn">
            Choose Image
          </button>
        </div>

        <EducationEdit
          educationFormVisible={educationFormVisible}
          toggleEducationForm={toggleEducationForm}
          currentEducation={currentEducation}
          handleEducationChange={handleEducationChange}
          addOrEditEducation={addOrEditEducation}
          cancelEducationForm={cancelEducationForm}
          educations={educations}
          editEducations={editEducations}
          deleteEducations={deleteEducations}
        />

        <WorkEdit
          workFormVisible={workFormVisible}
          toggleWorkForm={toggleWorkForm}
          currentWork={currentWork}
          handleWorkChange={handleWorkChange}
          addOrEditWork={addOrEditWork}
          cancelWorkForm={cancelWorkForm}
          works={works}
          editWorks={editWorks}
          deleteWorks={deleteWorks}
        />
      </div>
      <div className="cv-display-section">
        <div
          style={{ width: "auto", marginBottom: "16px" }}
          className={showEdit}
        >
          <button onClick={handleEditDisplay} className="add-new-btn">
            Show edit
          </button>
        </div>

        <div className="paper">
          <CVtop personalInfo={personalInfo} />
          <CVbottom
            educations={educations}
            works={works}
            selectedImage={selectedImage}
            personalInfo={personalInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
