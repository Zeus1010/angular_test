import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import {ActivatedRoute, Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  public name;
  public position;
  public about;
  public date;

  public arr: Employee[] = []

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  display(){
    var user = new Employee(this.name,this.position,this.about,this.date);
    this.arr.push(user);
    window.alert("Employee Added");
    console.log(this.arr)
  }
  list_page(){
    let pass_json =  JSON.stringify(this.arr)
    this.router.navigate(['/detail',{data: pass_json}])
  }

}
