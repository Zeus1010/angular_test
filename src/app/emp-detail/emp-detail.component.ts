import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  public list;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let data=JSON.parse(this.route.snapshot.paramMap.get('data'));
    this.list = data;
    console.log(data);
  }
  main_page(){
    this.router.navigate(['/'])
  }
  remove(usr){
    console.log(typeof(usr));
    usr = parseInt(usr)
    this.list = this.list.splice(usr, 1)  
    console.log(this.list);
    
  }

}
