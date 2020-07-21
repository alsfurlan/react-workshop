import React, { useState } from 'react';
import './App.css';
import logo from './logo512.png';
import Header from './Header';

function App() {

  const [todoList, setTodoList] = React.useState([
    'Ir ao supermercado',
    'Lava a roupa',
    'Preparar workshop'
  ]);

  function addItem() {
    setTodoList([...todoList, `Nova tarefa ${Date.now()}`]);
  }

  return (
    <>
      <figure>
        <img src={logo} />
      </figure>
      <h1>Lista de tarefas</h1>
      <ul>
        {
          todoList.map(item => {
            return (
              <li key={item}>{item}</li>
            );
          })
        }
      </ul>
      <button onClick={addItem}> Adicionar </button>
      <Header title="Home">
        <p>Página inicial</p>
      </Header>
      <Header title="Produtos" />
    </>
  );
}

export default App;
