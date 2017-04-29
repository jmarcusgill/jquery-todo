var FbAPI = ((oldCrap) => {
//write in here function to call on main iffe

  oldCrap.getTodos = () => {
    let items = [];
    return new Promise ((resolve, reject) => {
      $.ajax("./database/seed.json")
      .done((data) => {
        let response = data.items;
        //loop over each key inside response
        Object.keys(response).forEach((key) =>{ //loops thru every single key and
          // console.log("key", key);
          //response is the object
          response[key].id = key;
          items.push(response[key]);
          //response[item0] = {
          //isCompleted : true,
          //task : "mow the lawn"
          //id: "item0"
          //}
        });
        FbAPI.setTodos(items);
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
    });
  };

  oldCrap.addTodo = (newTodo) => {
    return new Promise ((resolve, reject) => {
      newTodo.id = `item${FbAPI.todoGetter().length}`;
      console.log("newTodo", newTodo);
      FbAPI.setSingleTodo(newTodo);
      resolve();
    });
  };









  return oldCrap;
})(FbAPI || {});