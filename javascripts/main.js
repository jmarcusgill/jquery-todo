$(document).ready(function(){

  let apiKeys;
  let editId = "";

  $("#new-item").click(() => {
    $(".list-container").addClass("hide");
    $(".new-container").removeClass("hide");
  });

  $("#list-items").click(() => {
    $(".list-container").removeClass("hide");
    $(".new-container").addClass("hide");
  });


  FbAPI.firebaseCredentials().then((keys) => {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    FbAPI.writeDom(apiKeys);
  }).catch((error) => {
    console.log("key errors", error);
  });

  //get todo
  // FbAPI.getTodos()
  // .then(() => {
  //   FbAPI.writeDom();
  //   countTask();
  // })
  // .catch((error) => {
  //   console.log("getTodos Error", error);
  // });

  //add todo
  $("#add-todo-button").click(() => {
    let newTodo = {
      iscompleted: false,
      task: $("#add-todo-text").val()
    };
    if (editId.length > 0) {
      //edit
      FbAPI.editTodo(apiKeys, newTodo, editId).then(() => {
      $("#add-todo-text").val("");
      editId = "";
      $(".list-container").removeClass("hide");
      $(".new-container").addClass("hide");
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("addTodo error", error);
      });

    } else {

      FbAPI.addTodo(apiKeys, newTodo).then(() => {
      $("#add-todo-text").val("");
      $(".list-container").removeClass("hide");
      $(".new-container").addClass("hide");
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("addTodo error", error);
      });
    }
  });





  //delete todo
  $(".main-container").on("click", ".delete", (event) => {
    FbAPI.deleteTodo(apiKeys, event.target.id).then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("error in deleteTodo", error);
    });
  });


  //edit tdo
  $(".main-container").on("click", ".edit", (event) => {
    let editText = $(event.target).closest(".col-xs-4").siblings(".col-xs-8").find(".task").html();
      editId = event.target.id;
      $(".list-container").addClass("hide");
      $(".new-container").removeClass("hide");
      $("#add-todo-text").val(editText);
  });


  //complete todo
  $(".main-container").on("click", "input[type='checkbox']", (event) => {
    let myTodo = {
      isCompleted: event.target.checked,
      task: $(event.target).siblings(".task").html()
    };
    console.log("mytdo", myTodo);
    FbAPI.editTodo(apiKeys, myTodo, event.target.id).then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("checker error", error);
    });
  });

  //login button events
  $("#registerButton").click(() => {
    let email = $("#inputEmail").val();
    let password = $("#inputPassword").val();
    let username = $("#inputUsername").val();

    let user = {email, password}; //es6 shorthand when key and object are SAME! "email": email, "password": password
    FbAPI.registerUser(user).then((response) => {
      console.log("register response", response.uid);
      let newUser = {
        uid: response.uid,
        username: username
      };
      FbAPI.addUser(apiKeys, newUser).then((response) => {
        console.log("addUser", response);
      }).catch((error) => {
        console.log("error in addUser", error);
      });
    });
  });

























});