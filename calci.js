console.log('Calculator');

document.addEventListener('DOMContentLoaded', function () {
    let string = " ";
    let btn = document.querySelectorAll('.btn');
    let input = document.querySelector('input');

    btn.forEach((e) => {
        e.addEventListener('click', (elem) => {

            if (elem.target.innerText == '=') {
                string = eval(string)
                input.value = string;
            }
            else if (elem.target.innerText == 'C') {
                string = ""
                input.value = string;
            }else if(elem.target.innerText == 'DEL'){
                string = string.substring(0,string.length-1);
                input.value=string;
            }
            else {
                string = string + elem.target.innerText;
                console.log(elem.target);
                input.value = string;
            }
        });
    })

});