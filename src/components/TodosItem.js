import React, { Component } from 'react';

class TodosItem extends Component {

  render() {
   
    return (
      <li className="Todos">
        <strong>{this.props.todos.title}</strong>
      </li>
    );
  }
}

export default TodosItem;
