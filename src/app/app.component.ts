import { Component } from '@angular/core';
import { User } from './shared/models/user';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }



@Component({

  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: ['./app.component.css']
})

export class AppComponent {

  message:string = 'Hello!';

  users:User[] = [
    {id:1,name:'Ram',username:'vu2rmk'},
    {id:1,name:'Majr',username:'asd'},
    {id:1,name:'Asda',username:'skajfl'}
  ];

  activeUser:User;

  selectUser(user){
    this.activeUser = user;

    console.log(this.activeUser);
  }

  onUserCreated(event){

    this.users.push(event.user);

  }
}