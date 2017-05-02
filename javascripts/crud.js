var FbAPI = ((oldCrap) => {
//write in here function to call on main iffe

  oldCrap.getTodos = (apiKeys) => {
    let items = [];
    return new Promise ((resolve, reject) => {
      $.ajax(`${apiKeys.databaseURL}/items.json`)
      .done((data) => {
        let response = data;
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
        resolve(items);
      })
      .fail((error) => {
        reject(error);
      });
    });
  };

  oldCrap.addTodo = (apiKeys, newTodo) => {
    return new Promise ((resolve, reject) => {
      $.ajax({
        method: "POST",
        url: `${apiKeys.databaseURL}/items.json`,
        data: JSON.stringify(newTodo)
      }).done(() => {
        resolve();
      }).fail((error) => {
        reject(error);
      });
    });
  };


  oldCrap.deleteTodo = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: "DELETE",
        url: `${apiKeys.databaseURL}/items/${id}.json`
      }).done(() => {
        resolve();
      }).fail((error) => {
        reject(error);
      });
    });
  };

  oldCrap.editTodo = (apiKeys, newTodo, id) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: "PUT",
        url: `${apiKeys.databaseURL}/items/${id}.json`,
        data: JSON.stringify(newTodo) //takes json structure and creates string
      }).done(() => {
        resolve();
      }).fail((error) => {
        reject(error);
      });
    });
  };








  return oldCrap;
})(FbAPI || {});