$(document).ready(function(){

  let apiKeys;

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
    FbAPI.addTodo(apiKeys, newTodo).then(() => {
    $("#add-todo-text").val("");
    $(".list-container").removeClass("hide");
    $(".new-container").addClass("hide");
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("addTodo error", error);
    });
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
    FbAPI.editTodo(event.target.id).then(() => {
      $(".list-container").addClass("hide");
      $(".new-container").removeClass("hide");
      $("#add-todo-text").val(editText);
    }).catch((error) => {
      console.log("error in editTodo", error);
    });
  });


  //complete todo
  $(".main-container").on("click", "input[type='checkbox']", (event) => {
    FbAPI.writeDom(apiKeys);
    FbAPI.checker(event.target.id).then(() => {

    }).catch((error) => {
      console.log("checker error", error);
    });
  });




























});