import { useState } from "react";
import EducationEdit from "./components/EducationEdit";
import WorkEdit from "./components/WorkEdit";

function App() {
  const [educations, setEducations] = useState([]);
  const [educationFormVisible, setEducationFormVisible] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({
    name: "",
    degree: "",
    "start date": "",
    "end date": "",
    location: "",
    editIndex: -1,
  });

  const [works, setWorks] = useState([]);
  const [workFormVisible, setWorkFormVisible] = useState(false);
  const [currentWork, setCurrentWork] = useState({
    name: "",
    position: "",
    "start date": "",
    "end date": "",
    location: "",
    editIndex: -1,
  });

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
        editIndex: -1,
      });
      setWorkFormVisible(false);
    } else {
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
      currentWork.location
    ) {
      if (currentWork.editIndex === -1) {
        // Add a new education
        setWorks([...works, { ...currentWork }]);
      } else {
        // Edit an existing education
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
      editIndex: -1,
    });
    setWorkFormVisible(false);
  };

  const handleEducationChange = (event, what) => {
    setCurrentEducation({ ...currentEducation, [what]: event.target.value });
  };

  const handleWorkChange = (event, what) => {
    setCurrentWork({ ...currentWork, [what]: event.target.value });
  };

  return (
    <div>
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
  );
}

export default App;
