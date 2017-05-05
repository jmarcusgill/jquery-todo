var FbAPI = ((cats) => {


  cats.addUser = (keys, newUser) => {
    return new Promise ((resolve, reject) => {
      $.ajax({
        method: "POST",
        url: `${keys.databaseURL}/user.json`,
        data: JSON.stringify(newUser)
      }).done((response) => {
        resolve(response);
      }).fail((errror) => {
        reject(error);
      });
    });
  };

  // cats.getUser = (keys, uid) => {
  //   let users = [];
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       method: "GET",
  //       url: `${keys.databaseURL}/user.json?orderBy="uid"&equalTo="${uid}"`
  //     }).done((user) => {
  //       console.log("user iife get", user);
  //       let response = user;
  //       Object.keys(response).forEach((key) =>{ //loops thru every single key and
  //         response[key].id = key;
  //         users.push(response[key]);
  //       });
  //       resolve(user[0]);
  //     }).fail((error) => {
  //       reject(error);
  //     });
  //   });
  // };

  cats.getUser = (keys, uid) => {
        let users = [];
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: `${keys.databaseURL}/user.json?orderBy="uid"&equalTo="${uid}"`
            }).done((user) => {
                console.log("user iife get", user);
                let response = user;
                Object.keys(response).forEach((key) => {
                    response[key].id = key;
                    users.push(response[key]);
                });
                resolve(users[0]);
            }).fail((error) => {
                reject(error);
            });
        });
    };


  return cats;
})(FbAPI || {});