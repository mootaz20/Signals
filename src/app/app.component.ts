import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  counter = signal(0);
  msg = signal<string[]>([]);
  double = computed(()=> this.counter() * 2);

  increment(){
    this.counter.update(c =>  c + 1);
    this.msg.mutate(m => m.push('The counter is : ' + this.counter()));
  }
  decrement(){
    this.counter.update(c =>  c - 1);
    this.msg.mutate(m => m.pop());
  }
  reset(){
    this.counter.set(0);
  }
  doubleCounter(){
    this.msg.mutate(m => m.push('The counter is : ' + this.double()));
    this.counter.set(this.double());
  }


}
