import React from 'react';
import classes from "./MyH.module.css";

const MyH = ({coin_name}) => {
    return (
        <div>
            <h1 className={classes.myH}>{coin_name}</h1>
        </div>
    );
};

export default MyH;