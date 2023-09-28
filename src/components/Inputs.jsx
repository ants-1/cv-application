function Inputs({ name, type, id, labelText }) {
    return (
      <label htmlFor={name}>
        <p>{labelText}</p>
        <input type={type} name={name} id={id} />
      </label>
    );
  }
  
  export default Inputs;
  