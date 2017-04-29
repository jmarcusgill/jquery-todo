$(document).ready(function(){

  $("#new-item").click(() => {
    $(".list-container").addClass("hide");
    $(".new-container").removeClass("hide");
  });

  $("#list-items").click(() => {
    $(".list-container").removeClass("hide");
    $(".new-container").addClass("hide");
  });

  //get todo
  FbAPI.getTodos()
  .then(() => {
    FbAPI.writeDom();
  })
  .catch((error) => {
    console.log("getTodos Error", error);
  });

  //add todo
  $("#add-todo-button").click(() => {
    let newTodo = {
      iscompleted: false,
      task: $("#add-todo-text").val()
    };
    console.log("newTodo", newTodo);
    FbAPI.addTodo(newTodo).then(() => {
    $("#add-todo-text").val("");
    $(".list-container").removeClass("hide");
    $(".new-container").addClass("hide");
      FbAPI.writeDom();
    }).catch((error) => {
      console.log("addTodo error", error);
    });
  });





  //delete todo
  //edit tdo
  //complete todo




























});