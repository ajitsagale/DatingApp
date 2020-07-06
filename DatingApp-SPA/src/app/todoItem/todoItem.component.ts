import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todoItem',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css']
})
export class TodoItemComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {  
      this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/api/TodoItems').subscribe(response =>{
      this.values = response;
    }, error => {
      console.log(error);
    }
    );
  }
}
