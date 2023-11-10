import Header from "./Header";
import { useState } from "react";
import generalIcon from "../assets/user.png";
import menuIcon from "../assets/arrow-down-sign-to-navigate.png";


function GeneralInfoForm({
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNum,
  changeAddress,
}) {
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  const headerInfo = {
    headerIcon: generalIcon,
    menuIcon: menuIcon,
  };

  function handleHideSection() {
    setIsSectionHidden(!isSectionHidden);
  }
  return (
    <>
      <form className="cv-section">
        <Header
          headerClassName="general-info"
          headerName="General Info"
          iconSrc={headerInfo.headerIcon}
          menuIcon={headerInfo.menuIcon}
          handleHideSection={handleHideSection}
        />
        <div className={`toggle-form ${isSectionHidden ? "hide" : ""}`}>
          <label>
            <p>First Name:</p>
            <input type="text" placeholder="John" onChange={changeFirstName} />
          </label>
          <label>
            <p>Last Name:</p>
            <input type="text" placeholder="Doe" onChange={changeLastName} />
          </label>
          <label>
            <p>Email:</p>
            <input
              type="text"
              placeholder="Email@example.com"
              onChange={changeEmail}
            />
          </label>
          <label>
            <p>Phone Number:</p>
            <input
              type="text"
              placeholder="+44 07123456789"
              onChange={changePhoneNum}
            />
          </label>
          <label>
            <p>Address:</p>
            <input
              type="text"
              placeholder="20 First Road, London"
              onChange={changeAddress}
            />
          </label>
        </div>
      </form>
    </>
  );
}

export default GeneralInfoForm;
