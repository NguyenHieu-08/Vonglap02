let height = Number(prompt('Nhập chiều cao: '));
let text = '';
let text1 = '';
let text2 = '';
let text3 = '';

//Tam giac vuông
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        text += '*';
    }
    text += `<br>`;
}
document.getElementById('printTamGiac').innerHTML = text;

//Tam giac vuông ngược
for (let i = height; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        text1 += '*';
    }
    text1 += `<br>`;
}
document.getElementById('printTamGiacNguoc').innerHTML = text1;

//Tam giác vuông đảo
for (let i = height; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
        text2 += '&nbsp;&nbsp;'
    }
    for (j = i; j <= height; j++) {
        text2 += '*';
    }
    text2 += `<br>`;
}
document.getElementById('printTamGiacDao').innerHTML = text2;


//Tam giac vuông ngược đảo
for (let i = 0; i < height; i++) {
    for (let j = 0; j < i; j++) {
        text3 += '&nbsp;&nbsp;';
    }
    for (j = i; j < height; j++) {
        text3 += '*'
    }
    text3 += `<br>`;
}
document.getElementById('printTamGiacDaoNguoc').innerHTML = text3;