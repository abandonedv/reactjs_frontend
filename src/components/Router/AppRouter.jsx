import React from 'react';
import {Route, Router, Switch, Routes} from "react-router-dom"
import {AllowedUrls} from "../../url/allowed_urls";

const AppRouter = () => {
    return (
        <Routes>
        {AllowedUrls.map(my_route =>
            <Route
                element={my_route.element}
                path={my_route.path}
                exact={my_route.exact}
                key={my_route.path}
            />
        )}
        </Routes>
    );
};

export default AppRouter;