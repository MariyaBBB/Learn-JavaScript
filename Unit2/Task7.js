"use strict";

let result = (a + b > 4) ? 
 "Мало!":
 "Много!";

let login;

let message = (login == "Сотрудник") ? "Привет!":
(login == 'Директор') ? "Здравствуйте!":
(login == '') ? "Нет логина":
'';