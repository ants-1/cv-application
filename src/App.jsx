import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import EducationForm from "./components/EducationForm";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("Email@example.com");
  const [phoneNum, setPhoneNum] = useState("+44 07123456789");
  const [address, setAddress] = useState("20 First Road, London");
  const [education, setEducation] = useState([]);

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

  function saveEducation(e, id) {
    e.preventDefault();
    const course = e.target.elements.course.value;
    const university = e.target.elements.university.value;
    const grade = e.target.elements.grade.value;
    const startDate = e.target.elements.startDate.value;
    const endDate = e.target.elements.endDate.value;
    let updateEducation = { course, university, grade, startDate, endDate };
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, ...updateEducation } : edu))
    );
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
        </section>
        <section className="cv">
          <GeneralInfo
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNum={phoneNum}
            address={address}
          />
          <Education education={education} saveEducation={saveEducation} />
        </section>
      </main>
    </>
  );
}

export default App;
