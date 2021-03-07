import React, {useState} from 'react'

export default function SearchByIDForm(props) {
    
    const initInputs = {searchInput: props.searchInput ||""}
    const [input, setInput] = useState(initInputs)


    function handleChange(e){
        const {name, value} = e.target
        console.log(value)
        setInput(prevInput => ({...prevInput, [name]: value}))
        
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(input.searchInput)
         
         console.log("Searched by ID")
         setInput(initInputs)
          
     
    }
  return (
   <>
         
<form onSubmit={handleSubmit}>

    Search by ID: 

<input type="text" name="searchInput" value={input.searchInput} onChange={handleChange} placeholder="Search" required/>
<button className="search-btn" onClick={props.searchContact}>Search</button>
</form>
</>
  )
}
