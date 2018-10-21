import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Accounts } from 'meteor/std:accounts-ui'
export default class Login extends TrackerReact(Component) {
  componentDidMount() {
        this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
 componentWillUnmount() {
   Blaze.remove(this.view);
}

//Acounts Configuration


  render() {
    return (
        //<Accounts.ui.LoginForm onSignedInHook={ () => FlowRouter.go('/Projects')} onPostSignUpHook ={ () => FlowRouter.go('/Projects')}/>
        
    <span ref="container"/>
        )
  }
}


