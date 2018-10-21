import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Accounts } from 'meteor/std:accounts-ui'
export default class Login extends TrackerReact(Component) {
  //componentDidMount() {
    // Use Meteor Blaze to render login buttons
   // this.view = Blaze.render(Template.loginButtons,
   //   ReactDOM.findDOMNode(this.refs.container));
 // }
 // componentWillUnmount() {
    // Clean up Blaze view
  //  Blaze.remove(this.view);
//}

//Acounts Configuration


  render() {
    // Just render a placeholder container that will be filled in
    
    Accounts.config({
        forbidClientAccountCreation: false
      });
      
      Accounts.ui.config({
        passwordSignupFields: 'EMAIL_ONLY',
        onSignedInHook: () => FlowRouter.go('/'),
        onSignedOutHook: () => FlowRouter.go('/account'),
        minimumPasswordLength: 6});

    return (
        <Accounts.ui.LoginForm onSignedInHook={ () => FlowRouter.go('/')} onPostSignUpHook ={ () => FlowRouter.go('/')}/>
    )
    //<span ref="container"/>;
  }
}


