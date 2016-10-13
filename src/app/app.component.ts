import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  todos: FirebaseListObservable<any[]>;
  ourTodosList = [];
  constructor(af: AngularFire) {
    this.todos = <FirebaseListObservable<any>>af.database.list('Todos').map(items => {
          return items.map(item => {
            item.text = item.text.toUpperCase();
            return item;
          })
        });
    //alternative way of subscribing
    this.todos.subscribe(todos => this.ourTodosList = todos);
  }

  addTodo() {
    this.todos.push({
      text: this.text,
      completed: false
    });
    this.text = '';
  }

  changeTodo(key: string, completed){
    this.todos.update(key, {completed: !completed});
  }
}
