import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoListName: props.name, taskName: "", tasks: [] };
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log("myTaskChangeHandler", event.target.value);
    // Nhận từng giá trị thêm vào ô input
  };

  addTask = () => {
    if (this.state.taskName === "") {
      return;
    }
    const id = this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({ id, name });
    this.setState({ taskName: "" });
  };

  deleteTask = (id) => {
    // console.log("deleteTask", id);
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    // console.log("Sau khi xoa", tasks);
    this.setState({ tasks });
  };

  completeTask = (id) => {
    // console.log("completeTask", id);
    const tasks = this.state.tasks;
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    // console.log("Task completed", tasks);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        {this.state.todoListName}
        <br />
        <div className="aligned">
          <img
            src="./images/32379_add_plus_icon.png"
            alt="Add Task"
            width="50"
            style={{ cursor: "pointer" }}
            onClick={() => this.addTask()}
          />
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />
        </div>
        <ul style={{ paddingLeft: "5px" }}>
          {this.state.tasks.map((value, index) => {
            return (
              <Todo
                key={value.id}
                data={value}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
