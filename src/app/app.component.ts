import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parenttochild';
  name='sayara pathan';
  actor='Madhuri Dixit';
  obj={
    name: "kumar",
    age:23,
    isMarried:true
  }
 
  fruits=["Apple","Banana","Mango","Grapes"];
  changeData(){
    this.name='Sayara is good girl'
  }

}
