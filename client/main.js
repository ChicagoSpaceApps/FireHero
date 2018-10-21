import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'typeface-roboto';
import App from '../imports/ui/App';
import {mount} from 'react-mounter';
import {MainLayout} from '../imports/layouts/MainLayout'; 
import Navbar from '../imports/ui/navbar/Navbar';
import LoginForm from '../imports/ui/LoginForm'

{/*
  import LoginForm from '../import/ui/LoginForm';
*/}
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
{/*
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
*/}

FlowRouter.route('/', {
  name: 'home',
  action() {

  mount(MainLayout, {
      content: (
      <div class='container'>
          <Navbar components={<App/>}/>
      </div>
  )
  }    )}
})

FlowRouter.route('/account', {
  name: 'account',
  action() {

  mount(MainLayout, {
      content: (
      <div class='container'>
          <Navbar components={<LoginForm/>}/>
      </div>
  )
  }    )}
})


FlowRouter.route('*', {
  name: 'notFound',  
  action() {
    if(!Meteor.userId()){
        FlowRouter.go('home')
    }
    mount(MainLayout, {
        content: (
        <Navbar components ={
          <div> 
            This isn't working out.
          </div>
        }/>
    )
    }    )
    }
})

