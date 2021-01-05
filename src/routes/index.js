import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/home';

const Routes =  () => (
    <Route path="/" exact component={Index} />
    

);


export default Routes;