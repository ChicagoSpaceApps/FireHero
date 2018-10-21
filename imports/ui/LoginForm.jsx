import React, {Component} from 'react';
import Login from './Login';
import { Accounts } from 'meteor/std:accounts-ui'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class LoginForm extends TrackerReact(Component) {

    render() {
        return (
            <div className="valign-wrapper login-card">
                <div className="row">
                    <div className="col s12 m10 l6 center-align offset-l3 offset-m1">
                        <div className="card hoverable">
                            <div className="card-image">
                            <img className="center"/>
                            </div>
                            <div className="card-content">
                            <h5>Login or Signup first!</h5>
                            </div>
                            <div className="card-action">
                            <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
