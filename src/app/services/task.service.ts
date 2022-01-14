import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { filter, Observable } from 'rxjs'
import { Task } from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }
  getTask(): Observable<Task[]> {
    return (this.http.get<Task[]>(this.apiUrl));
  }
  deleteTask(task: Task): Observable<Task> {
    return (this.http.delete<Task>(`${this.apiUrl}/${task.id}`));
  }
  updateTask(task: Task): Observable<Task> {
    console.log("inside update method");
    let a: Observable<Task> = (this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions));
    console.log((a));
    return a;
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
