import React from 'react';
import MyButton from "../Button/MyButton";
import classes from "../MyDiv/MyDiv.module.css";
import {GetArray} from "../../MyFunctions/MyFunctions";

const SelectPage = (props) => {
    return (
        <div className={classes.myDiv}>
            {GetArray(props.page).map((item) =>
            <MyButton onClick={() => props.set_page(item)}
                      key={item}
            >
                {item}
            </MyButton>)}
        </div>
    );
};

export default SelectPage;