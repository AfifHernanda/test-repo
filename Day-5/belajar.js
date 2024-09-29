class menuRestaurant{
    constructor(name,price){
        this._name = name
        this._price = price
    }

    cuisineType = "Chinese";

    get name(){
        return this._name
    }
    get price(){
        return this._price
    }

    set setName(newName){
        this._name = newName
    }
    set setPrice(newPrice){
        this._price = newPrice
    }

    order(){
        console.log(`saya memesan ${this._name}`);
    }
    priceCheck(){
        console.log("Harga makanannya " + this._price)
    }
}

let makanan1 = new menuRestaurant("Jiaozi","Rp25.000")
let makanan2 = new menuRestaurant("Dimsum","Rp20.000")
console.log(makanan1.name,makanan1.price);
console.log(makanan1.cuisineType)
makanan1.order()
makanan1.priceCheck()
makanan2.order()
makanan2.priceCheck()
