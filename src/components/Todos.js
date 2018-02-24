import React, { Component } from 'react';
import TodosItem from './TodosItem';


class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todos => {
            return (
                <TodosItem key={todos.title} todos = {todos}/>
            );
      });
    }
    return (
      <div className="Todos">
       <h3>Todo list</h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
