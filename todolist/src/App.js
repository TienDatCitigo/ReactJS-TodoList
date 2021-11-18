import React from "react";
import "./App.css";

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
    console.log("addTask", this.state.taskName);
    this.state.tasks.push(this.state.taskName);
    this.setState({ taskName: "" });
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
        <ul>
          {this.state.tasks.map((value, index) => {
            return (
              <li key={index} className="taskItem">
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
