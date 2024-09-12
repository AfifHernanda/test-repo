import { name , age } from "./person.js";
import greeting from "./greetings.js";
import axios from "axios";

greeting (name,age);

axios
.get("https://dummyjson.com/products")
.then((response) => console.log(response.data.products))
.catch((error) => console.log(error));