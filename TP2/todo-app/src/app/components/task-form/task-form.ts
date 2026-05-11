import { Component,  EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent {
  newTitle = "";
  @Output() add = new EventEmitter<string>();
  onSubmit(){
    if(this.newTitle.trim()){
      this.add.emit(this.newTitle);
      this.newTitle = "";
    }
  }
}
