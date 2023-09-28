function GeneralInfo() {
  return (
    <>
      <div className="general-info">
        <img src="src/assets/user.png" alt="General Infomation Icon" />
        <h2>General Information</h2>
        <img src="src/assets/arrow-down-sign-to-navigate.png" alt="" />
      </div>
      <div className="input-section">
        <label htmlFor="full-name">
            <p>Full Name:</p>
            <input type="text" name="full-name" id="full-name" />
        </label>
        <label htmlFor="email">
            <p>Email:</p>
            <input type="text" name="email" id="email" />
        </label>
        <label htmlFor="phone-num">
            <p>Phone Number:</p>
            <input type="tel" name="phone-num" id="phone-num" />
        </label>
        <label htmlFor="address">
            <p>Address</p>
            <input type="text" name="address" id="address" />
        </label>
      </div>
    </>
  );
}

export default GeneralInfo;
