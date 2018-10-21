import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'
import { Mongo } from 'meteor/mongo';     
import { Accounts } from 'meteor/std:accounts-ui'


if (Meteor.isServer) {

  Meteor.publish('allUsers', function () {
    return Meteor.users.find({});  
  });    

}

Meteor.startup(() => {
  process.env.MAIL_URL = 
  "smtp://postmaster@sandboxc94b0dcf634c4addbd9b62c773b49f77.mailgun.org:52e3e3667a877ffed019cd420f4eb66c@smtp.mailgun.org:587";
});
