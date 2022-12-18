import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  task!: string;
  tasks: string[] = [];
  constructor(public snackBar: MatSnackBar) {}

  addTask() {
    this.tasks.push(this.task);
    this.task = '';
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
  ngOnInit(): void {}
}
