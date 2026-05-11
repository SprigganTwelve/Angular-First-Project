import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  
  constructor(){
    const saved = localStorage.getItem('tasks');
    if(saved)
        this.tasks = JSON.parse(saved).map((t: any) => ({
          ...t,
          createdAt: new Date(t.createdAt)
        }))
    this.tasksSubject.next(this.tasks);
  }

  private tasks: Task[] = [
    { id: 1, title: 'Apprendre Angular', done: false, createdAt: new Date() },
    { id: 2, title: 'Construire la TodoList', done: false, createdAt: new Date() }
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(title: string): void {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      done: false,
      createdAt: new Date()
    };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
    this.save();
  }

  toggleTask(id: number): void {
    this.tasks = this.tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.tasksSubject.next(this.tasks);
    this.save();
  }

  clearCompleted(): void{
    this.tasks = this.tasks.filter(t => !t.done)
    this.tasksSubject.next(this.tasks);
    this.save();
  }

  save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}