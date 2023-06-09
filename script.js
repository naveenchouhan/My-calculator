const display = document.querySelector(".display");

const btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let button_InnerHtml = this.innerHTML;
    screenBtn(button_InnerHtml);
  });
}
document.addEventListener("keypress", function (event) {
  screenBtn(event.key);
});



function screenBtn(key) {
  switch (key) {
    case "=": {
        display.value = eval(display.value);
       
        break;
      }
    case "c": {
      display.value = " ";
      break;
    }
    case "%": {
      display.value += "%";
      break;
    }
    case "M+": {
      display.value += "M+";
      break;
    }
    case "M-": {
      display.value += "M-";
      break;
    }
    case "1": {
      display.value += "1";
      break;
    }
    case "2": {
      display.value += "2";
      break;
    }
    case "3": {
      display.value += "3";
      break;
    }
    case "4": {
      display.value += "4";
      break;
    }
    case "5": {
      display.value += "5";
      break;
    }
    case "6": {
      display.value += "6";
      break;
    }
    case "7": {
      display.value += "7";
      break;
    }
    case "8": {
      display.value += "8";
      break;
    }
    case "9": {
      display.value += "9";
      break;
    }
    case "0": {
      display.value += "0";
      break;
    }
    case "+": {
      display.value += "+";
      break;
    }
    case "-": {
      display.value += "-";
      break;
    }
    case "*": {
      display.value += "*";
      break;
    }
    case ".": {
      display.value += ".";
      break;
    }
    case "/": {
      display.value += "/";
      break;
    }
    default:{
    alert("enter valid values")
    }
  }
}

