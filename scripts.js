// add icons
function addIcons() {
  var myNodelist = document.getElementsByTagName("LI");
  var i
  for (i = 0; i < myNodelist.length; i++) {
    var ico = document.createElement("I")
    ico.className = "close fas fa-trash-alt"
    myNodelist[i].appendChild(ico)
    var icon = document.createElement("I")
    icon.className = "check far fa-check-circle"
    myNodelist[i].appendChild(icon)
  }}
  
  // chechk todo elements
  function chkList() {
  var chk = document.getElementsByClassName("check");
  var i
  for (i = 0; i < chk.length; i++) {
    chk[i].onclick = function () {
      var div = this.parentElement
      div.classList.toggle('checked')
    }}}
  
  // delete elements
  function deleteItem() {
  var close = document.getElementsByClassName("close");
  var i
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement
      div.style.display = "none"
  }}}
  
  // New ToDo item
  function newElement() {
   var li = document.createElement("li")
    var inputValue = document.getElementById("myInput").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    
    if (inputValue === '') {
      alert("You must write something!")
    } else {
      document.getElementById("myUL").appendChild(li)
    }
    document.getElementById("myInput").value = ""
    
    addIcons()
    deleteItem()
    chkList()
  }