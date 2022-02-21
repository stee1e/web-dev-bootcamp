//This function will validate the form and if validation fails, set the value of the return val to false
function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

//This function will clear the errors
function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
//This function will set the error inside tag of ID
function validateForm() {
  var returnval = true;
  clearErrors();
  var name = document.forms["myform"]["fname"].value;
  if (name.length < 5) {
    setError("name", "**Length of name is too short");
    returnval = false;
  }
  var pw1 = document.getElementsByName("fpassword");
  var pw2 = document.getElementByName("fconfirmpassword");
  if (pw1 != pw2) {
    setError("fconfirmpassword", "**Password do not match");
    returnval = false;
  }

  return returnval;
}
