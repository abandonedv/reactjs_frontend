import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";
import another_cl from "./SearchInput.module.css";



const SearchInput = ({search_str, set_search_str}) => {
    return (
        <div className={classes.myDiv}>
            <input
                className={another_cl.myInput}
                value={search_str}
                onChange={(e) => set_search_str(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;