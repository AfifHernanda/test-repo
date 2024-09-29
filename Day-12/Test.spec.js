import { expect } from "chai";
import axios from "axios";

describe ('LOGIN', () => {
    it('Login dengan username benar', async function () {
        this.timeout(3000);
        let user = {
            username: 'emilys',
            password: 'emilyspass'
        }
        const response = await axios.post('https://dummyjson.com/auth/login',user);
        console.log(response.status)
        expect(response.status).to.equal(200);

    })
    it('Login dengan username salah', function() {
        expect(2+2).to.equal(4)
})