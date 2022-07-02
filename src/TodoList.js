import React from "react";
import { TodoListItem } from "./TodoListItem";
import "./Styles.css";
import axios from "axios";

export class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list_title: "",
      currentValue: "",
      todos: []
    };
    this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this);
  }

  deleteTodoByIndex(index) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.slice(0, index),
        ...prevState.todos.slice(index + 1)
      ]
    }));
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/5")
      .then((data) => {
        console.log(data);
        this.setState({
          todos: [
            {
              title: data.data.title,
              id: data.data.id,
              completed: data.data.completed
            }
          ]
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="hello">
        <h2>Todo List ...</h2>
        <label>Title </label>
        <br />
        <input
          placeholder="Input title ..."
          type="text"
          value={this.state.list_title}
          onChange={(event) => {
            this.setState({ list_title: event.target.value });
          }}
        />
        <br />
        {this.state.todos.map((todo, index) => {
          return (
            <TodoListItem
              deleteTodoByIndex={this.deleteTodoByIndex}
              key={index}
              index={index}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })}
        <input
          placeholder="Input item name ..."
          type="text"
          value={this.state.currentValue}
          onChange={(event) => {
            this.setState({ currentValue: event.target.value });
          }}
        />
        <span> </span>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              todos: prevState.todos.concat({
                title: this.state.currentValue,
                completed: false
              }),
              currentValue: ""
            }));
          }}
        >
          Add item to list
        </button>
      </div>
    );
  }
}
