import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../../App';
import HowToPage from '../HowToPage/howToPage';

//Renders the correct component depending on what url path is given. 

class RenderPath extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/howtopage' component={HowToPage} />
                </Switch>
            </div>
        );
    }
}

export default RenderPath;