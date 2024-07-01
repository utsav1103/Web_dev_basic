//add event listener to the div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div clicked! event phase" + event.eventPhase);
  },
  true
); // capturing phase


//add event listener to the ul
document.getElementById("list").addEventListener(
    "click",
    function (event) {
      alert("List clicked! event phase" + event.eventPhase);
    },
    true
  ); //capturing



  //add event listener to the li
document.getElementById("item1").addEventListener(
    "click",
    function (event) {
      alert("Item 1 clicked! event phase" + event.eventPhase);
    },
    false
  ); //bubbling phase

  document.getElementById("item2").addEventListener(
    "click",
    function (event) {
      alert("Item 2 clicked! event phase" + event.eventPhase);
    },
    false
  ); //bubbling phase