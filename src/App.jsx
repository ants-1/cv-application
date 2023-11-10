import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import EducationForm from "./components/EducationForm";
import Experience from "./components/Experience";
import ExperienceForm from "./components/ExperienceForm";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("Email@example.com");
  const [phoneNum, setPhoneNum] = useState("+44 07123456789");
  const [address, setAddress] = useState("20 First Road, London");
  const [education, setEducation] = useState([
    {
      course: "BSc Computer Science",
      university: "University of Programming",
      grade: "2.1",
      startDate: "2019-09-23",
      endDate: "2022-06-20",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      job: "Software Developer",
      company: "Facebook",
      location: "Paris",
      description:
        "Proven track record in designing, coding, and deploying scalable software solutions. Adept at collaborative problem-solving, contributing to code reviews, and adhering to agile methodologies. Passionate about staying ahead in the rapidly evolving tech landscape. ",
      startDate: "2022-08-16",
      endDate: "2023-11-23",
    },
  ]);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumChange(e) {
    setPhoneNum(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function addEducation(e) {
    e.preventDefault();
    const id = uuidv4();
    const course = e.target.elements.course.value;
    const university = e.target.elements.university.value;
    const grade = e.target.elements.grade.value;
    const startDate = e.target.elements.startDate.value;
    const endDate = e.target.elements.endDate.value;
    let newEducation = { id, course, university, grade, startDate, endDate };
    setEducation([...education, newEducation]);
  }

  function addExperience(e) {
    e.preventDefault();
    const id = uuidv4();
    const job = e.target.elements.job.value;
    const company = e.target.elements.company.value;
    const location = e.target.elements.location.value;
    const description = e.target.elements.description.value;
    const startDate = e.target.elements.startDate.value;
    const endDate = e.target.elements.endDate.value;
    let newExperience = {
      id,
      job,
      company,
      location,
      description,
      startDate,
      endDate,
    };
    setExperience([...experience, newExperience]);
  }

  function saveEducation(e, id) {
    e.preventDefault();
    const course = e.target.elements.course.value;
    const university = e.target.elements.university.value;
    const grade = e.target.elements.grade.value;
    const startDate = e.target.elements.startDate.value;
    const endDate = e.target.elements.endDate.value;
    let updateEducation = { course, university, grade, startDate, endDate };
    setEducation(
      education.map((edu) =>
        edu.id === id ? { ...edu, ...updateEducation } : edu
      )
    );
  }

  function saveExperience(e, id) {
    e.preventDefault();
    const job = e.target.elements.job.value;
    const company = e.target.elements.company.value;
    const location = e.target.elements.location.value;
    const description = e.target.elements.description.value;
    const startDate = e.target.elements.startDate.value;
    const endDate = e.target.elements.endDate.value;
    let updateExperience = {
      job,
      company,
      location,
      description,
      startDate,
      endDate,
    };
    setExperience(
      experience.map((exp) =>
        exp.id === id ? { ...exp, ...updateExperience } : exp
      )
    );
  }

  function deleteEducation(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }

  function deleteExperience(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  return (
    <>
      <main>
        <section className="cv-form">
          <GeneralInfoForm
            changeFirstName={handleFirstNameChange}
            changeLastName={handleLastNameChange}
            changeEmail={handleEmailChange}
            changePhoneNum={handlePhoneNumChange}
            changeAddress={handleAddressChange}
          />
          <EducationForm addEducation={addEducation} />
          <ExperienceForm addExperience={addExperience} />
        </section>
        <section className="cv">
          <GeneralInfo
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNum={phoneNum}
            address={address}
          />
          <Education
            education={education}
            saveEducation={saveEducation}
            deleteEducation={deleteEducation}
          />
          <Experience
            experience={experience}
            saveExperience={saveExperience}
            deleteExperience={deleteExperience}
          />
        </section>
      </main>
    </>
  );
}

export default App;
