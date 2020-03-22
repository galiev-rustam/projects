
let i11 = document.querySelector('.i-11');
let key11 = document.querySelectorAll('.key');
let m = 0;
function t11(event) {

    // console.log(event);
    // console.log(key11);

    if (event.key == 'CapsLock') {
        document.getElementById('capslock').classList.toggle('key-active');
    }

    for (let item = 0; item < key11.length; item++) {
        if (event.key == key11[item].getAttribute('data')) {
            key11[item].classList.add('key-active');
        }
    }

}
function t11_1(event) {

    for (let item = 0; item < key11.length; item++) {
        if (event.key == key11[item].getAttribute('data')) {
            key11[item].classList.toggle('key-active');
        }
    }

}


document.querySelector('.i-11').onkeydown = (event) => {
    t11(event);
}
// document.querySelector('.i-11').onkeyup = (event) => {
//     t11_1(event);
// }

document.querySelector('.reset').onclick = () => {

    for (let i = 0; i < key11.length; i++) {
        key11[i].classList.remove('key-active');
    }
}





