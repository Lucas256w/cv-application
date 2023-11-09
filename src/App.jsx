import { useState } from "react";
import EducationEdit from "./components/EducationEdit";

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
        position: "",
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

  const deleteEducations = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const editEducations = (index) => {
    setCurrentEducation({ ...educations[index], editIndex: index });
    setEducationFormVisible(true);
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

  const handleEducationChange = (event, what) => {
    setCurrentEducation({ ...currentEducation, [what]: event.target.value });
  };

  return (
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
  );
}

export default App;
