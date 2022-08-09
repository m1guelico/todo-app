import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();
        
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( elem => elem.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for( const elem of this.todos ) {

            if( elem.id == id){

                elem.completado = !elem.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( elem => !elem.completado );
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
        localStorage.setItem( 'todo', JSON.stringify( this.todos ));
    }

    cargarLocalStorage(){
        
        // if( localStorage.getItem('todo')){
            
            //     this.todos = JSON.parse( localStorage.getItem('todo') );
            
            // } else {
                //     this.todos = [];
        // }
        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : [];
        
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        // Cumple la misma premisa que el forEach y se puede poner asi:
        // this.todos = this.todos.map( Todo.fromJson );
        // Solamente tiene un parametro
    }

}