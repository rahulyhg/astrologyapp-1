import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Profiles = new Mongo.Collection('profiles');

Meteor.methods({
    'profiles.insert'(nome, sobrenome){
        check(nome, String);
        check(sobrenome, String);
        if(!Meteor.userId()){
            throw new Error('User not authorized');
        }

        Profiles.insert({
            nome,
            sobrenome,
            createdAt: new Date(),
            userId: Meteor.userId(),
            username: Meteor.user().username,
            email: Meteor.user().email
        })
    }
});