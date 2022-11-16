let widthhcn = Number(prompt('Nhập chiều dài: '));
let heighthcn = Number(prompt('Nhập chiều rộng: '));
let text = '';

for(let i = 1; i <= heighthcn; i++) {
    for(let j = 1; j <= widthhcn; j++) {
        if(i == 1 || j == 1 || i == heighthcn || j == widthhcn) {
            text += '*';
        } else {
            text += '&nbsp&nbsp';
        }
    }
    text += `<br>`;
}
document.getElementById('printHCN').innerHTML=text;