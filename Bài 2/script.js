let n = Number(prompt('Nhập số: '));
let text = '';
let mul = 1;
if(n > 0){
    if(n==0 || n==1) {
        mul = 1;
    }
    for (let i = 1; i <= n; i++) {
        mul *= i;
    }
    document.getElementById('printGiaiThua').innerHTML = mul;
}
