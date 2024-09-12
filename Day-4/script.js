let laptops = ["HP Pavillion","TUF gaming","ROG Zephyrus","HP Omen"];


for ( let laptop of laptops) {
    console.log("Saya memiliki laptop " + laptop)
}

for (let i = 0; i < laptops.length; i++){
    console.log("Saya ingin membeli " + laptops[i] )
}

console.log(laptops[1])

let hewan = []
hewan[0]="Kucing";
console.log(hewan)

let nilai = 80

if (nilai > 70 && nilai <= 100){
    console.log("Kamu mendapat nilai A")
} else if (nilai <= 70 && nilai > 50) {
    console.log("Kamu mendapat nilai B")
} else{
    console.log("Kamu mendapat nilai C kamu mengulang mata kuliah")
}