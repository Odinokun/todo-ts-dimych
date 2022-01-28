import React from 'react';
import './App.css';
import {TaskType, Todolist} from './components/Todolist';

function App() {

  const tasks1: Array<TaskType> = [
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'Css', isDone: true},
    {id: 3, title: 'Js', isDone: false},
    {id: 4, title: 'React', isDone: false},
  ]
  const tasks2: Array<TaskType> = [
    {id: 1, title: 'Milk', isDone: false},
    {id: 2, title: 'Bread', isDone: true},
    {id: 3, title: 'Coffee', isDone: false},
    {id: 4, title: 'Beer', isDone: false},
  ]

  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks1}/>
      <Todolist title="What to buy?" tasks={tasks2}/>
    </div>
  );
}

export default App;
