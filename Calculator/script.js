let buttons = document.querySelectorAll(".buttons input");
let displayValue = document.querySelector("#displayValue");
let equal = document.querySelector("#equal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "AC" || e.target.value === "DE") {
      if (e.target.value === "AC") {
        displayValue.value = "";
      } else {
        displayValue.value = displayValue.value.slice(0, -1);
      }
    }
    else if(e.target.value === "="){
      displayValue.value= eval( displayValue.value)
    }
    else {
      
      displayValue.value += e.target.value;
    }
  });
});
