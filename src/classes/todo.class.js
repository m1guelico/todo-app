export class Todo {

    static fromJson( obj ){ // Se puede desestructurar
        
        const tempTodo = new Todo( obj.tarea );

        tempTodo.id         = obj.id;
        tempTodo.completado = obj.completado;
        tempTodo.creado     = obj.creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;
        this.id    = new Date().getTime(); //DDMMAAAAHHMMSS
        this.completado = false;
        this.creado = new Date();
    }
}