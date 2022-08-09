
import './styles.css'
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( element => crearTodoHtml( element ));
// Versión mejorada de linea anterior para un solo argumento
todoList.todos.forEach( crearTodoHtml );



// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo( newTodo );

//crearTodoHtml( tarea );


// localStorage.setItem('mi-key','ABC12344' );
// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 1500);

console.log('todos', todoList.todos);