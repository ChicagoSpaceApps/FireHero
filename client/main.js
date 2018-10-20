import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'typeface-roboto';
import App from '../imports/ui/App';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});