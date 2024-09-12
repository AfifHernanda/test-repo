let characters = [
    {
    "name": "Jason",
    "job": "Assassins",
    "HP": 400,
    "Weapon": "Dagger",
    "innateSkill" : true,
},
{
    "name": "Lavisha",
    "job": "Templar Knight",
    "HP": 900,
    "Weapon": "Hammer and Shield",
    "innateSkill" : false,
},{
    "name": "Maria",
    "job": "Priest",
    "HP": 550,
    "Weapon": "Magic Orb",
    "innateSkill" : true,
},
]
// Pemanggilan attribute didalam array object
for ( let chara of characters ) {
    console.log("Karakter bernama " + chara.name + 
                " Menggunakan Senjata " + chara.Weapon);
}

//menambah character
let newCharacters = [
    {
        "name": "Michelle",
        "job": "Ranger",
        "HP": 550,
        "Weapon": "Bow",
        "innateSkill" : true,
    },
    {
        "name": "Crock",
        "job": "Barbarian",
        "HP": 900,
        "Weapon": "War Axe",
        "innateSkill" : false,
    },
]
characters.push(...newCharacters);

// Menambah Attribute baru
characters.forEach(element => {
    if ( element.HP <= 600 ) {
        element.PhysicalVunerabilties = true
    } else {
        element.PhysicalVunerabilties = false
    }
});

console.log(characters)

// for (let addinfo of characters) {
//     if ( chara.HP <= 600 ) {
//         addinfo.PhysicalVunerabilty = "True"
//     } else {
//         addinfo.PhysicalVunerabilty = "False"
//     }
// }

