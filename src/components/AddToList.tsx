import React from "react";
import { useState } from 'react';

const AddToList = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div className="AddToList">
           <input 
                type="text" 
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                // onChange={(e) => {}} hovering over e it says (parameter) e: React.ChangeEvent<HTMLInputElement>
                onChange={handleChange}
                name="name"
            />
            <input 
                type="text" 
                placeholder="Age"
                className="AddToList-input"
                value={input.age} 
                onChange={handleChange}
                name="age"
            />
            <input 
                type="text" 
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img} 
                onChange={handleChange}
                name="img"
            />
             <textarea 
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}  
                onChange={handleChange}
                name="note"
            />
        </div>
    )
}
export default AddToList;