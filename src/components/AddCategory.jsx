import { useState } from "react"
import PropTypes from "prop-types";




export const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInpunValue] = useState("");

    const onInputChange = ({target}) => {
        //console.log(target.value);
        setInpunValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;

        onNewCategory(inputValue.trim());
        setInpunValue("");
        

        
        
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
         <input 
            type="text"
            placeholder="buscar gifs"
            value={inputValue}
            onChange={onInputChange}
         />
    </form>
   
  )
}

AddCategory.propTypes={
  onNewCategory: PropTypes.func.isRequired,
}
