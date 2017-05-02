var FbAPI = (() => {

//private array
  let todos = [];

//return all functions in main iife
  return {
    firebaseCredentials : () => {
      return new Promise((resolve, reject) => {
        $.ajax("apiKeys.json")
        .done((data) => {
          resolve(data);
        }).fail(() =>{
          reject(error);
        });
      });
    }
  };











})();