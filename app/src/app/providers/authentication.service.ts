import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  //Create User

  registerUser(newUser) {
  	return new Promise<any>((resolve, reject) => {
      console.log(newUser);
  		firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  		.then(
  			results => resolve(results),
  			error=> reject(error))
  	});
  }


  loginUser(user){
  	return new Promise((resolve, reject) => {
  		firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  		.then(
  			results=> resolve(results),
  			error=> reject(error))
  	});
  }

  logoutUser(){
  	return new Promise((resolve, reject) => {
  		if (firebase.auth().currentUser) {
  			firebase.auth().signOut()
  			.then(()=>{
  				console.log("LOGGED OUT");
  				resolve();
  			})
  			.catch((error)=>{
  				reject(error);
  			})
  		}
  	});
  }

  userDetails(){
  	return firebase.auth().currentUser;
  }
}
