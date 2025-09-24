import { sum } from "../../src/services/sum"

describe("String Kata",()=>{
    it("should return 0", () => {
        const res = sum("");
        expect(res).toEqual(0);
    })
})