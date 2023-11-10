function GeneralInfo({ firstName, lastName, email, phoneNum, address }) {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="cv-general-info">
      <h3>{fullName}</h3>
      <p>{email}</p>
      <p>{phoneNum}</p>
      <p>{address}</p>
    </div>
  );
}

export default GeneralInfo;
