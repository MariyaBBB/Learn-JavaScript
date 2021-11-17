"use strict";

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  function multiplyNumeric(menu) {
      for (let element in menu) {
          if (typeof menu[element] == 'number') {
            menu[element] = 2 * menu[element];
          } 
          
    }
}

  alert(menu.width);
  alert(menu.height);