function GeneralInfoForm({
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNum,
  changeAddress,
}) {
  return (
    <>
      <form>
        <label>
          <p>First Name:</p>
          <input type="text" onChange={changeFirstName} />
        </label>
        <label>
          <p>Last Name:</p>
          <input type="text" onChange={changeLastName} />
        </label>
        <label>
          <p>Email:</p>
          <input type="text" onChange={changeEmail} />
        </label>
        <label>
          <p>Phone Number:</p>
          <input type="text" onChange={changePhoneNum} />
        </label>
        <label>
          <p>Address:</p>
          <input type="text" onChange={changeAddress} />
        </label>
      </form>
    </>
  );
}

export default GeneralInfoForm;
