function GeneralInfo({ firstName, lastName, email, phoneNum, address }) {
  return (
    <div className="cv-general-info">
      <h3>General Info</h3>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phoneNum}</p>
      <p>{address}</p>
    </div>
  );
}

export default GeneralInfo;
