import React from "react";
import { useState } from "react";


const Form = () => {
  const [values, setValues] = useState({name: "", email: ""})
  const [validacion, setValidacion] = useState(false)
  const validationName = () => {
    let userName = values.name.split(" ")
    //let regex = new RegExp("^[ñíóáéú a-zA-Z ]+$")
    if(userName.length < 1) return alert("Enter a valid name and lastname.")
    if(userName[0].length < 3 || userName[1].length < 3) return alert("Enter a valid name and lastname.") 
    return true
  }

  const validationEmail = () => {
    let userEmail = values.email.split("@")
    if (userEmail.length < 2) return alert("Enter a valid email.")
    let dotCom = userEmail[1].split(".")
    if (dotCom.length < 2) return alert("Enter a valid email.")
    return true
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    const newValues = {...values, [name]:value}
    setValues(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let nameValidation = validationName()
    let emailValidation = validationEmail()
    if (nameValidation && emailValidation) {
      setValidacion(true)
    }

  }

  return (
    <div className="container-formComponent">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      <div className="container-h3">
      {validacion ? <h3 className="h3 phrase">Thanks for writing to us, {values.name}, we will contact you as soon as possible.</h3> : ""}
      </div>
    </div>
  );
};

export default Form;
