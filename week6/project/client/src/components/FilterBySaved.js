import React, {useState} from 'react'

export default function FilterBySaved(props) {
    
   
      function handleSubmit(e){
        e.preventDefault()
        props.submit(true)
        console.log("pulling all the saved items")
         
          
     
    }
  return (
   <>
         
<form onSubmit={handleSubmit}>

    Filter By Saved Items: 


<button onClick={props.searchContact}>Search</button>
</form>
</>
  )
}
