import React from 'react';
import classes from "../MyDiv/MyDiv.module.css";
import another_cl from "./SearchInput.module.css";



const SearchInput = ({search_str, set_search_str}) => {
    function MyChange(e) {
        set_search_str(e.target.value)
        e.stopPropagation()
    }

    return (
        <div className={classes.myDiv}>
            <input
                className={another_cl.myInput}
                value={search_str}
                onChange={(e) => MyChange(e)}
            />
        </div>
    );
};

export default SearchInput;