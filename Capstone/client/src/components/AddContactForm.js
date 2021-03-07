import React, {useState} from 'react'

export default function AddContactForm(props) {
    
    const initInputs = {firstName: props.firstName ||"",lastName: props.lastName ||"",phone: props.phone ||"",email: props.email ||"",  age: props.age || "", em_contact1: props.em_contact1 || "", em_contact2: props.em_contact2 || "", em_contact1_phone: props.em_contact1_phone || "", em_contact2_phone: props.em_contact2_phone || ""}
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
        props.submit(inputs,props.id)
        setInputs(initInputs)
        if (props.btnText === "Submit Edit") {
          props.editToggle(prevToggle => !prevToggle)
      }
  
    }
  return (
   <>
   <form onSubmit={handleSubmit} className="contact_form">
        
        First Name: <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name" required />
        Last Name: <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" required/>
        
        Phone:<input type="tel" name="phone" value={inputs.phone} defaultValue="No phone available" onChange={handleChange} placeholder="XXX-XXX-XXXX"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        Email:<input type="text" name="email" value={inputs.email} defaultValue="No email available"onChange={handleChange} placeholder="Email Address"/>
        <br>
        </br><div className="item-2"><label>Emergency Contacts:</label></div>
        <br></br>
        Emergency Contact 1: <input type="text" name="em_contact1" value={inputs.em_contact1} onChange={handleChange} placeholder="Emergency Contact Name"/> 
        <div></div><input type="text" name="em_contact1_phone" value={inputs.em_contact1_phone} onChange={handleChange} placeholder="Emergency Contact Phone Number"/>
        Emergency Contact 2: <input type="text" name="em_contact2" value={inputs.em_contact2} onChange={handleChange} placeholder="Emergency Contact Name"/>
        <div></div><input type="text" name="em_contact2_phone" value={inputs.em_contact2_phone} onChange={handleChange} placeholder="Emergency Contact Phone Number"/>
        <label></label>
        <button className="search-btn">{props.btnText}</button>
    </form>


</>
  )
}
