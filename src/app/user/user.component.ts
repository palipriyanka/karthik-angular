import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Banks } from '../_models/banks';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
list:any;
HasError:boolean=false;
name:string;
post=new Banks(0,"BankName","BankAddress");
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.getData1();
  }
  getData1()
  {
    this.userservice.getData().subscribe(data=>(this.list=data));
    }
    getData2()
    {
      this.HasError=true;
    }
  postDetails()
  {
    this.userservice.postData(this.post).subscribe(data=>console.log("sucess",data))
  };
  Delete(id)
  {
    this.userservice.Delete(id);
  }
  Search()
  {
    if(this.name==""){
      this.ngOnInit();
    }
 
 else{
   this.list=this.list.filter(res=>{
     return res.BankName.toLocaleLowerase().match(this.name.toLocaleLowerCase());
   });
 }
  }
  reverse:boolean=false;
  key='id';
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
