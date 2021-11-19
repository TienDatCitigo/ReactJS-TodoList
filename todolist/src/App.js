import React from "react";
import "./App.css";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", tasks: [] };
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log("myTaskChangeHandler", event.target.value);
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
    // console.log("list", this.state.tasks);
    console.log("deleteTask", id);
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    console.log("Sau khi xoa", tasks);
    this.setState({ tasks });
  };

  completeTask = (id) => {
    console.log("completeTask", id);
    const tasks = this.state.tasks;
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    console.log("Task completed", tasks);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <br />
        To do List
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
                key={index}
                id={value.id}
                value={value.name}
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
export default App;
