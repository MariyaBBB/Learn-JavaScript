
let isDragging = false;

document.addEventListener('mousedown', function (event) {

    let draggable = event.target
    if (!draggable.classList.contains('draggable')) return;

    draggable.ondragstart = function () {
        return false;
    };

    let shiftX, shiftY;
    startDrag(draggable, event.clientX, event.clientY);

    function onmouseup(event) {
        finishDrag();
      };

    function startDrag(element, clientX, clientY) {
        if (isDragging) {
            return;
        }

        isDragging = true; 

        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);

        shiftX = clientX - draggable.getBoundingClientRect().left;
        shiftY = clientY - draggable.getBoundingClientRect().top;

        element.style.position = 'fixed';

        moveAt(clientX, clientY);
    }

    function moveAt(clientX, clientY) {
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;

        let newBottom = newY + draggable.offsetHeight;

        if (newBottom > document.documentElement.clientHeight) {
            let docBottom = document.documentElement.getBoundingClientRect().bottom;
            let scrollY = Math.min(docBottom - newBottom, 10);

            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, scrollY);
            newY = Math.min(newY, document.documentElement.clientHeight - draggable.offsetHeight);
        }

        if (newY < 0) {
            let scrollY = Math.min(10, -newY);
            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, -scrollY);

            newY = Math.max(newY, 0)
        }

        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - draggable.offsetWidth) {
            newX = document.documentElement.clientWidth - draggable.offsetWidth
        }

        draggable.style.left = newX + 'px';
        draggable.style.top = newY + 'px';

    }


    function onmousemove(event) {
        moveAt(event.clientX, event.clientY);
    }

    function finishDrag() {
        if(!isDragging) {
            return;
          }
      
          isDragging = false;
    draggable.style.position = 'absolute';
    draggable.style.top = parseInt(draggable.style.top) + pageYOffset + 'px';

    document.removeEventListener('mousemove', onmousemove);
    document.removeEventListener('mouseup', onmouseup);
    }

});
