const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const res = 5;
const cols = Math.floor(canvas.width / res);
const rows = Math.floor(canvas.height / res);
let arrDraw = [];
let arrCalculate = [];
const calc = (index) => {
    let sum = 0;
    let x = index % cols;
    let y = Math.floor(index / cols);
    let i = index;
    if (x > 0) {
        sum += arrDraw[i - 1];
    }
    if (x < cols - 1) {
        sum += arrDraw[i + 1];
    }
    if (y > 0) {
        sum += arrDraw[i - cols];
    }
    if (y < rows - 1) {
        sum += arrDraw[i + cols];
    }
    if (x > 0 && y > 0) {
        sum += arrDraw[i - cols - 1];
    }
    if (x > 0 && y < rows - 1) {
        sum += arrDraw[i + cols - 1];
    }
    if (x < cols - 1 && y > 0) {
        sum += arrDraw[i - cols + 1];
    }
    if (x < cols - 1 && y < rows - 1) {
        sum += arrDraw[i + cols + 1];
    }
    return sum;

}
for (let i = 0; i < cols * rows; i++) {
    arrDraw.push(Math.random() < 0.5 ? 1 : 0);
}
console.log(arrDraw)
const init = () => {

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < arrDraw.length; i++) {
        let x = i % cols * res;
        let y = Math.floor(i / cols) * res;
        if (arrDraw[i]) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, res, res);

        }

        if (arrDraw[i] && calc(i) < 2) {
            arrCalculate[i] = 0;
        } else if (arrDraw[i] && calc(i) === 2) {
            arrCalculate[i] = 1;
        } else if (arrDraw[i] && calc(i) === 3) {
            arrCalculate[i] = 1;
        } else if (arrDraw[i] && calc(i) > 3) {
            arrCalculate[i] = 0;
        } else if (!arrDraw[i] && calc(i) === 3) {
            arrCalculate[i] = 1;
        } else {
            arrCalculate[i] = arrDraw[i];
        }
    }
    arrDraw = arrCalculate;
    arrCalculate = [];
    requestAnimationFrame(init);

}

init();