import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItemComponent } from './components/task-item/component.task';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [ TaskListComponent],
  template:  "<app-task-list></app-task-list>"
})
export class App {
  protected readonly title = signal('todo-app');
}
