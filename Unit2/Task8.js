"use strict";

let login = prompt('Введите логин', '');

if (login == 'admin') {
    let password = prompt('Введите пароль','');
    if (password == '' || password == null) {
        alert('Отмена');
    }
    else {
        alert('Неверный пароль')
    }
}
else if (login == '' || login == null) {
    alert('Отмена');
}
else alert('Незарегистрированный пользователь')