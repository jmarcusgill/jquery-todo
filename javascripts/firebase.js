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
    },
    setChecked: (itemId) => {
      const position = itemId.split("item")[1]; // ["", 0]
      todos[position].isCompleted = !todos[position].isCompleted;
    },
    duhlete: (Id) => {
      //item1
      const position = Id.split("item")[1];
      todos.splice(position, 1); //index you want to start with and then how many you want to delete
    }
  };











})();