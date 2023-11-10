import { v4 as uuidv4 } from "uuid";

const exampleData = {
  personalInfo: {
    firstName: "First",
    lastName: "Last",
    title: "TITLE ONE & TITLE TWO",
    number: "123-456-789",
    email: "User@example.com",
    linkedin: "/yourusernamehere",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat sapien vel fringilla fermentum. Aenean consectetur tortor non tortor semper, sed euismod arcu bibendum. Nulla facilisi. Maecenas vel ipsum id quam laoreet suscipit vel ut ex. Curabitur eu quam ut velit cursus interdum non nec lacus. Duis a ligula vel odio varius tincidunt. Nulla facilisi. Suspendisse potenti.",
    address: "Your Home Address Name Here",
  },

  educations: [
    {
      degree: "ENTER YOUR DEGREE NAME HERE",
      name: "Institute",
      location: "Location",
      "start date": "2017",
      "end date": "2018",
      editIndex: 0,
      id: uuidv4(),
    },
    {
      degree: "ENTER YOUR DEGREE NAME HERE",
      name: "Institute",
      location: "Location",
      "start date": "2017",
      "end date": "2018",
      editIndex: 1,
      id: uuidv4(),
    },
    {
      degree: "ENTER YOUR DEGREE NAME HERE",
      name: "Institute",
      location: "Location",
      "start date": "2017",
      "end date": "2018",
      editIndex: 2,
      id: uuidv4(),
    },
  ],

  works: [
    {
      position: "ENTER YOUR JOB POSITION NAME",
      name: "Company",
      location: "Location",
      "start date": "2018",
      "end date": "2022",
      editIndex: 0,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat sapien vel fringilla fermentum. Aenean consectetur tortor non tortor semper, sed euismod arcu bibendum. Nulla facilisi. Maecenas vel ipsum id quam laoreet suscipit vel ut ex. Curabitur eu quam ut velit cursus interdum non nec lacus. Duis a ligula vel odio varius tincidunt. Nulla facilisi. Suspendisse potenti. rPhasellus vel nunc vitae purus cursus ultrices. Vivamus tristique mi id risus sodales, eget luctus nulla imperdiet. Praesent nec fermentum leo. Sed ac consequat neque. Aliquam erat volutpat. Sed in nunc eget justo consequat malesuada. Curabitur varius nunc non commodo lacinia. Nulla facilisi. Proin non ex in augue feugiat luctus. In hac habitasse platea dictumst.",
      id: uuidv4(),
    },
    {
      position: "ENTER YOUR JOB POSITION NAME",
      name: "Company",
      location: "Location",
      "start date": "2018",
      "end date": "2022",
      editIndex: 1,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat sapien vel fringilla fermentum. Aenean consectetur tortor non tortor semper, sed euismod arcu bibendum. Nulla facilisi. Maecenas vel ipsum id quam laoreet suscipit vel ut ex. Curabitur eu quam ut velit cursus interdum non nec lacus. Duis a ligula vel odio varius tincidunt. Nulla facilisi. Suspendisse potenti. Phasellus vel nunc vitae purus cursus ultrices. Vivamus tristique mi id risus sodales, eget luctus nulla imperdiet. Praesent nec fermentum leo. Sed ac consequat neque. Aliquam erat volutpat. Sed in nunc eget justo consequat malesuada. Curabitur varius nunc non commodo lacinia. Nulla facilisi. Proin non ex in augue feugiat luctus. In hac habitasse platea dictumst.",
      id: uuidv4(),
    },
  ],
};

export default exampleData;
