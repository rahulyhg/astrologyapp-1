import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  getData: function(){
    var url='https://jsonplaceholder.typicode.com/users';
    var result = Meteor.http.get(url);
    if(result.statusCode ==200){
      var res = JSON.parse(result.content);
      return res;
    } else {
      var err = result.content;
      console.log('Error:', err);
      return err;
    }
  }
});