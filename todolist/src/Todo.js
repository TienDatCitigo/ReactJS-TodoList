import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { id: props.id, value: props.value, done: props.done };
    // console.log("props", props);
    this.state = { data: props.data };
    // this.state = { taskName: "" };
  }

  static getDerivedStateFromProps(props, state) {
    return { data: props.data };
  }

  //   completeTask = () => {
  //     console.log("Todo completeTask", this.props.id);
  //     this.setState({ done: true });
  //     this.props.completeTask(this.state.data.id);
  //   };

  render() {
    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="./images/1398911_correct_mark_success_tick_valid_icon.png"
          alt="Hoàn thành"
          width="30"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.completeTask(this.props.data.id)}
        />
      );
    }
    return (
      <div className="Todo aligned">
        {checkDone}
        &nbsp;
        <img
          className={this.state.done ? "noCheckDone" : ""}
          src="./images/71063_empty_trash_icon.png"
          alt="Xóa"
          width="30"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.deleteTask(this.props.id)}
        />
        &nbsp; &nbsp;
        <span className={this.state.data.done ? "done" : ""}>
          {/* Tên class = "done" */}
          {this.state.data.name}
        </span>
      </div>
    );
  }
}
export default Todo;

// Note:
// - State: Dữ liệu nội tại của Component hiện tại.
// - Props: Dữ liệu truyền từ ngoài vào, từ Element cha.
