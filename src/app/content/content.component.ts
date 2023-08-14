import { Component } from '@angular/core';
import { GetcardsService } from '../services/getcards.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  idlist:any[]=[];
  idobj:number[] =[];
constructor(private getcardsservice : GetcardsService){

  
  this.localcontent();

}
cardslist:any []=[];

localcontent(){
  this.getcardsservice.getallcards()
  .subscribe((result:any)=>{
    this.cardslist=result;
    console.log(this.cardslist);
  })
} 

additemtocart(id:number){
  // console.log(this.getcardsservice.id);
  // this.getcardsservice.id=id;

  //   console.log(this.getcardsservice.id);


  //  this.idobj.id = id;
   this.idlist.push(id);
   
  localStorage.setItem('idlist' , JSON.stringify(this.idlist));
  


  // this.getcardsservice.addtocart(this.cartobj).subscribe((result:any)=>{
  //    this.cardslist=result;
  
  // }
  
}
// additemtocart(productid:number){
//   this.cartobj.productid=productid;
//   this.getcardsservice.addtocart(this.cartobj).subscribe((result:any)=>{
//     this.cardslist=result;
//   })
// }
}

// export class ContentComponent {
//   constructor(private ContentdataService:ContentdataService){
//    this.localcontent();
//   }
//   contentlist:any[]=[];
//   localcontent(){
//    this.ContentdataService.getallcontentdata()
//    .subscribe((result :any)=>{
     
//  this.contentlist=result.items;
//  console.log(this.contentlist);
//    })
//   }
  
//  }