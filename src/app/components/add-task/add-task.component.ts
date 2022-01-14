import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onSaveTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value);
    console.log("show add task value in add-task constructor :  ", this.showAddTask);
  }

  ngOnInit(): void { }
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!')
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onSaveTask.emit(newTask);
  }
}
