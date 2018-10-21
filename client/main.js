import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'typeface-roboto';
import App from '../imports/ui/App';
import {mount} from 'react-mounter';
import {MainLayout} from '../imports/layouts/MainLayout'; 
import Navbar from '../imports/ui/navbar/Navbar';
import LoginForm from '../imports/ui/LoginForm'
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'home',
  action() {

    if(!Meteor.userId()){
      FlowRouter.go('account')
  }
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
    if(!Meteor.userId()){
      mount(MainLayout, {
        content: (
        <div class='container'>
            <Navbar components={
            <div>
            <LoginForm/>
            <p>
              You have to login first!
            </p>
            </div>
            }/>
        </div>
    )
    })
  }
  mount(MainLayout, {
      content: (
      <div class='container'>
          <Navbar components={
          <div>
          <LoginForm/>
          </div>
          }/>
      </div>
  )
  })
}
})


FlowRouter.route('*', {
  name: 'notFound',  
  action() {
    if(!Meteor.userId()){
        FlowRouter.go('account')
    }
    mount(MainLayout, {
        content: (
        <Navbar components ={
          <div> 
            You've reached an unfinished page! Go back quick!
          </div>
        }/>
    )
    }    )
    }
})

