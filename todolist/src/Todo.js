import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    // this.state = { taskName: "" };
  }

  deleteTask = (e) => {
    console.log("deleteTask from Todo", e);
  };

  render() {
    return (
      <div className="Todo aligned">
        <img
          src="./images/1398911_correct_mark_success_tick_valid_icon.png"
          alt="Hoàn thành"
          width="30"
          style={{ cursor: "pointer" }}
          title="Click to complete comfirmation"
          onClick={() => this.props.completeTask(this.props.id)}
        />
        &nbsp;
        <img
          src="./images/71063_empty_trash_icon.png"
          alt="Xóa"
          width="30"
          style={{ cursor: "pointer" }}
          title="Click to delete comfirmation"
          onClick={() => this.props.deleteTask(this.props.id)}
        />
        &nbsp; &nbsp;
        <span>{this.props.value}</span>
      </div>
    );
  }
}
export default Todo;
