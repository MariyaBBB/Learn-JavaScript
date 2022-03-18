let table = document.getElementById('bagua-table');
let editing;
table.onclick = function(event) {
    console.log(event.target);
    if(!event.target.closest('TD')) return;
    if(editing) return;
    let target = event.target.closest('TD');
    console.log(target);
    editing = true;
    let textarea = document.createElement('textarea');
        textarea.className = 'edit-area';
        textarea.value = target.innerHTML;
        let targetOld = target.innerHTML;
        target.innerHTML = '';
        target.append(textarea);

        textarea.focus();
        let div = document.createElement('div');
        target.append(div)
        let buttonCancel = document.createElement('button');
        buttonCancel.className = 'Cancel';
        div.append(buttonCancel);
        buttonCancel.innerHTML = 'Cancel';
        buttonCancel.onclick = function() {
            target.innerHTML = targetOld;
            textarea.remove();
            div.remove();
            target.blur();
            editing = false;

        }

        let buttonOk = document.createElement('button');
        buttonOk.className = 'Ok';
        div.append(buttonOk);
        buttonOk.innerHTML = 'Ok';
        buttonOk.onclick = function() {
            target.innerHTML = textarea.value;
            textarea.remove();
            div.remove();
            target.blur();
            editing = false;
        }
        
        textarea.onkeydown = function(event) {
            textarea.focus();
        }
        textarea.onblur = function() {
            textarea.focus();
        }


}