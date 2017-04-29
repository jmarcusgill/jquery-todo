var FbAPI = (() => {

//private array
  let todos = [];

//return all functions in main iife
  return {
    todoGetter : () => {
      return todos;
    },
    setTodos : (newArray) => {
      todos = newArray;
    },
    setSingleTodo: (newObject) => {
      todos.push(newObject);
    }
  };











})();