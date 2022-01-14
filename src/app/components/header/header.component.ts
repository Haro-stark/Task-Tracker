import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value);
    console.log("show add task value in add-task constructor :  ", this.showAddTask);
  }

  ngOnInit(): void { }
  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.uiService.onToggle();
  }
}
