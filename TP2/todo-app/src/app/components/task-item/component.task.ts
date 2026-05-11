import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './component.task.html',
  styleUrl: './component.task.css',
})
export class TaskItemComponent {
  @Input({required: true}) task!: Task;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onToggle(){
    this.toggle.emit(this.task.id);
  }  

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
