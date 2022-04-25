import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../Components/Button/MyButton";
import classes from "./NavigateBar.module.css";

const NavigateBar = () => {
    return (
        <div className={classes.navigateBar}>
            <Link to="/">
                <MyButton>
                    Криптовалюты
                </MyButton>
            </Link>
        </div>
    );
};

export default NavigateBar;