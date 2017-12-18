import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//update profile
Template.profile.events({
 'click #btn':function(){
   console.log('clicked');
   Meteor.call('getData', function(err, res){
     if(err){
       console.log(err);
     } else {
       console.log(res);
       for(i=0; i<res.length; i++){
         var bla = res[3].username;
        $('#test').html(bla);
        
      }
     }
   })
 }
});

Template.sidebar.events({
  'click .button-collapse': function(){
    $(".button-collapse").sideNav();
  } 
  
});




