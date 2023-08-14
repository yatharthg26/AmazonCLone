import { Component } from '@angular/core';
import { GetcardsService } from '../services/getcards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// ignupusers:any[]=[];
// singnupobj:any={
//   email:'',
//   password:'',
// };

// ngOnInit():void{
// const localdata = localStorage.getItem('signupusers');
// if(localdata!=null){
//   this.signupusers = JSON.parse(localdata);
// }
// }
 
 
//  loginformsubmit(){
//   const isuser = this.signupusers.find(m => m.username == this.loginobj.username && m.password == this.loginobj.password);
//   if( isuser != undefined){
//     this.router.navigate(['home']);
//   }
//   else{
// alert('wrong id or password');
//   }
//   // console.log(this.signupusers);
//  }
// }

export class CartComponent {
  cartcards:any[]=[];
  idlist:any[]=[];
  idobj:any ={
    id:0,
  };
  constructor( private getcardsservice : GetcardsService){

  this.cardadd();
  console.log(this.cartcards);
  
  
  }
  cardslist:any []=[];
cardadd(){
  this.getcardsservice.getallcards()
.subscribe((result:any)=>{
  this.cardslist= result;
  this.cartlist();
})
}
cartlist(){
  const localdata = localStorage.getItem('idlist');
if(localdata!=null){
  this.idlist = JSON.parse(localdata);
}
console.log(this.idlist);
console.log(this.cardslist,"cardslist");
this.cartcards = this.cardslist.filter((res)=>{
return this.idlist.includes(res.id);
})
console.log(this.cartcards , "hello");
}

}


