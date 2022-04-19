import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";
import another_cl from "./SearchInput.module.css";


const SearchInput = (props) => {
    return (
        <div className={classes.myDiv}>
            <input className={another_cl.myInput} {...props}/>
        </div>
    );
};

export default SearchInput;