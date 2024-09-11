let a = "aenjeaye";
console.log(a);

console.log(2 + 2);
console.log("2" + "2");
console.log("2" - "2");



function sayHello() {
    alert("Hello World!");
    console.log("Hellow World!");
};

document.writeln("Hello World!");

let fname = "Afif";
console.log(fname);

function greet(name) {
    alert("Halo " + name)
};

function penambahan(a,b){
    let result = a + b;
    return "Hasil Penambahan " + result;
};
console.log(penambahan(5,7));

function tampilkanNilai(nilai){
    return nilai * 2
};
let hasil = (tampilkanNilai(57));
console.log(hasil);

let baca = document.querySelector("#btn");
console.log(baca);

let baca2 = document.querySelector("#js1");
baca2.innerHTML = "Aku lagi belajar <i>DOM Manipulation</i>";