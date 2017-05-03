var FbAPI = ((cats) => {


  cats.addUser = (keys, newUser) => {
    return new Promise ((resolve, reject) => {
      $.ajax({
        method: "POST",
        url: `${keys.databaseURL}/users.json`,
        data: JSON.stringify(newUser)
      }).done((response) => {
        resolve(response);
      }).fail((errror) => {
        reject(error);
      });
    });
  };


  return cats;
})(FbAPI || {});