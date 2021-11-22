import React from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", tasks: [] };
  }

  render() {
    return (
      <div className="App">
        <table border="1">
          <thead>
            <tr>
              <th>Mission 1</th>
              <th>Mission 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TodoList name="A" />
              </td>
              <td>
                <TodoList name="B" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
