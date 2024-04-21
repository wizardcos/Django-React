import React, { Component } from 'react';
import './App.css';
import CustomModal from './components/Modal';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: []
    };
  }
  
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/tasks/")
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/tasks/${item.id}/`, item)
        .then(res => this.refreshList());
    } else {
      axios
        .post("http://localhost:8000/api/tasks/", item)
        .then(res => this.refreshList());
    }
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/tasks/${item.id}/`)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = status => {
    this.setState({ viewCompleted: status });
  };

  renderTabList = () => {
    return (
      <div className='my-5 tab-list'>
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={!this.state.viewCompleted ? "active" : ""}
        >
          Incompleted
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed === viewCompleted
    );

    return newItems.map(item => (
      <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
        <span className={`todo-title mr-2 ${item.completed ? "completed-todo" : ""}`} title={item.title}>
          {item.title}
        </span>
        <span>
          <button className='btn btn-info mr-2' onClick={() => this.editItem(item)}>Edit</button>
          <button className='btn btn-danger mr-2' onClick={() => this.handleDelete(item)}>Delete</button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className='content p-3 mb-2 bg-info'>
        <h1 className='text-white text-uppercase text-center my-4'>Task manager</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div>
                <button className='btn btn-warning' onClick={() => this.createItem()}>Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>{this.renderItems()}</ul>
            </div>
          </div>
        </div>
        <footer className='my-3 mb-2 bg-info text-white text-center'>
          Copyright 2024 &copy; All right Reserved
        </footer>
        {this.state.modal ? (
          <CustomModal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit}/>
        ) : null}
      </main>
    );
  }
}

export default App;
