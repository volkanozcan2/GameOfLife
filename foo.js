console.time("fff")
let arr = new Uint8Array(100);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.random() > 0.7 ? 1 : 0;
};
console.timeEnd("fff")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toString(2).padStart(8, "0"));
}