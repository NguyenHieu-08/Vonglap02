let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let month = $('#month');
let money = $('#money');

function laisuat() {
    let thang = +(month.value);
    let tien = +(money.value);
    let rate;
    let text = '';
    
    if(thang <= 3) {
        rate = 6/100;
        text = returnmoney(thang,tien,rate)
    } else if(thang <= 6) {
        rate = 8.6/100;
        text = returnmoney(thang,tien,rate)
    } else if(thang <= 12) {
        rate = 8.95/100;
        text = returnmoney(thang,tien,rate)
    } else if(thang <= 24) {
        rate = 9.97/100;
        text = returnmoney(thang,tien,rate)
    } else {
        thang = '';
        tien = '';
        text = `Nhập lại tháng, vì tháng bạn đang nhập là ${thang}`
    }
    $('#Laisuat').innerHTML = text;
}

function returnmoney(a, b, c) {
    //a: month
    //b: money
    //c: % lãi suất

    for(let i = 1; i <= a; i++) {
        b = b * (1+c)
    }
    return b
}