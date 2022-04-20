import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../components/Button/MyButton";
import classes from "./NavigateBar.module.css";

const NavigateBar = () => {
    return (
        <div className={classes.navigateBar}>
            <div>
                <Link to="/">
                    <MyButton>
                        Криптовалюты
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};

export default NavigateBar;