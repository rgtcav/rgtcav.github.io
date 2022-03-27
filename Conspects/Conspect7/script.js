/*
var rng = new Range();
var el = document.getElementsByClassName("conspect_area")[0];
console.log(el);
rng.setStart(el.childNodes[7].firstChild, 0);
rng.setEnd(el.childNodes[7].firstChild, 1);
console.log(rng.toString());

var error_el = document.createElement('span');
error_el.style.color = 'gray';
error_el.style.backgroundColor = '#f005';

rng.surroundContents(error_el);*/

var selection;
function error_select() {
    selection = document.getSelection();
    if (selection.toString() && selection.toString().length <= 50){
        console.log(selection.toString());

        var el = document.createElement('div');
        el.innerHTML = 'Подсказка';
        el.style.background = 'blue';
        el.style.position = 'fixed';
        el.style.right = '15px';
        el.style.top = '50px';
        document.body.append(el);
    }
};

document.onmouseup = error_select;