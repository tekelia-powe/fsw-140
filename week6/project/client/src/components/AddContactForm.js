import React, {useState} from 'react'

export default function AddContactForm(props) {
    
    const initInputs = {firstName: props.firstName ||"",lastName: props.lastName ||"",phone: props.phone ||"",email: props.email ||"",  age: props.age || "", em_contact1: props.em_contact1 || "", em_contact2: props.em_contact2 || "", saved: props.saved || ""}
    const [inputs, setInputs] = useState(initInputs)
    const [checked, setChecked] = useState(true)

    function handleChange(e){
        const {name, value} = e.target
        console.log(value)
        //setInputs(prevInputs => ({...prevInputs, [name]: value}))
        if(name==="saved"){
            setChecked(prevToggle => !prevToggle)
            console.log("yes")
            console.log(checked)
        }
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs,props._id)
        setInputs(initInputs)
        if (props.btnText === "Submit Edit") {
          props.editToggle(prevToggle => !prevToggle)
      }
  
    }
  return (
   <>
   <form onSubmit={handleSubmit} className="contact_form">
        <div className="item-1"><input type="checkbox"  name="saved" onChange={handleChange}></input><label for="saved">Save</label></div><br></br>
        <label for="firstName"> First Name:</label><input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name" required />
        <label for="lastName"> Last Name:</label><input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" required/>
        <label for="age">Age: </label><input type="text" name="age" value={inputs.age} onChange={handleChange} placeholder="Age"/>
        
        <label for="phone"> Phone:</label><input type="tel" name="phone" value={inputs.phone} onChange={handleChange} placeholder="XXX-XXX-XXXX"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        <label for="email"> Email:</label><input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Email Address"/>
        <div className="item-2"><label>Emergency</label><label> Contacts:</label></div>
        <label>#1: </label><input type="text" name="em_contact1" value={inputs.em_contact1} onChange={handleChange} placeholder="Emergency Contact 1"/>
        #2: <input type="text" name="em_contact2" value={inputs.em_contact2} onChange={handleChange} placeholder="Emergency Contact 2"/>
        <label></label>
        <button className="search-btn">{props.btnText}</button>
    </form>


</>
  )
}
