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
        <h3>General Info</h3>
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
          <input type="text" placeholder="Email@example.com" onChange={changeEmail} />
        </label>
        <label>
          <p>Phone Number:</p>
          <input type="text" placeholder="+44 07123456789" onChange={changePhoneNum} />
        </label>
        <label>
          <p>Address:</p>
          <input type="text" placeholder="20 First Road, London" onChange={changeAddress} />
        </label>
      </form>
    </>
  );
}

export default GeneralInfoForm;
