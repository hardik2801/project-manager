import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    srcApiUrl;
    constructor(private http: Http, private httpClient: HttpClient) {
    }

    login(email, password) {
        const login_data = {
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/login', login_data)
            .map((response: Response) => {
                return response.json();
            });
    }

    signup(email, password, name) {
        const login_data = {
            name: name,
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/signup', login_data)
            .map((response: Response) => {
                return response.json();
            });
    }

    addToken() {
        let token = localStorage.getItem('jwtToken');
        if (!token) {
            token = '';
        }
        const httpOptions = {
            headers: new HttpHeaders({ 'Authorization': token })
        };
        return httpOptions;
    }

    getUser(userId) {
        return this.httpClient
            .get('http://127.0.0.1:3000/api/user/' + userId, this.addToken())
            .map((response: Response) => {
                // console.log(response);
                return response;
            });
    }

    addNewProject(projectName, userId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/create', { name: projectName, user: userId }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }

    editProject(projectId, projectName) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/update', { id: projectId, name: projectName }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }

    deleteProject(projectId, userId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/delete', { id: projectId, user: userId }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }

    deleteTask(taskName, projectId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/deletetask', { id: projectId, taskName: taskName }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }

    getTasks(projectId) {
        return this.httpClient
            .get('http://127.0.0.1:3000/api/project/tasks/' + projectId, this.addToken())
            .map((response: Response) => {
                // console.log(response);
                return response;
            });
    }

    editTask(task, projectId, oldName) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/edittask', { task: task, projectId: projectId, oldName: oldName }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }

    addNewTask(task, projectId) {
        return this.httpClient
            .post('http://127.0.0.1:3000/api/project/addtask', { task: task, projectId: projectId }, this.addToken())
            .map((response: Response) => {
                return response;
            });
    }


}
