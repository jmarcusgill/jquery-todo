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
    countTask();
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
      countTask();
    }).catch((error) => {
      console.log("addTodo error", error);
    });
  });





  //delete todo
  $(".main-container").on("click", ".delete", (event) => {
    FbAPI.deleteTodo(event.target.id).then(() => {
      FbAPI.writeDom();
      countTask();
    }).catch((error) => {
      console.log("error in deleteTodo", error);
    });
  });


  //edit tdo

  //complete todo
  $(".main-container").on("click", "input[type='checkbox']", (event) => {
    FbAPI.writeDom();
    countTask();
    FbAPI.checker(event.target.id).then(() => {

    }).catch((error) => {
      console.log("checker error", error);
    });
  });












  let countTask = () => {
    let remainingTasks = $("#incomplete-tasks li").length; //select all li's in incomplete tasks
    $("#counter").hide().fadeIn(3000).html(remainingTasks);
  };















});