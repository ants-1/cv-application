import "./styles/App.css";
import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("Email@example.com");
  const [phoneNum, setPhoneNum] = useState("+44 07123456789");
  const [address, setAddress] = useState("20 First Road, London");

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
        </section>
        <section className="cv">
          <GeneralInfo
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNum={phoneNum}
            address={address}
          />
        </section>
      </main>
    </>
  );
}

export default App;
