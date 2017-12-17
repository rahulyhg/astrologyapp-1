import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

import './main.html';


Template.profile.events({
 'click #btn':function(){
   console.log('clicked');
   Meteor.call('getData', function(err, res){
     if(err){
       console.log(err);
     } else {
       console.log(res);
      // $('#test').html(res[1].username);
      // console.log('Data:', res[2].username);
       for(i=0; i<res.length; i++){
         var bla = res[3].username;
        $('#test').html(bla);
        
      }
     }
   })
 }
});

Template.profile.helpers({
  stuff: function(){
    return Meteor.call('getData');
  },
  test: function(){
    return "hello there";
  }
});


