import { sum } from "../../src/services/sum"

describe("String Kata",()=>{
    it("should return 0", () => {
        const res = sum("");
        expect(res).toEqual(0);
    });
    it("should return 1 for '1' ",()=>{
        const res = sum("1");
        expect(res).toEqual(1);
    })
    it("should return 6 for '1,5'",()=>{
        const res = sum("1,5");
        expect(res).toEqual(6);
    })
    it("should return 6 for '1\n2,3'",()=>{
        const res = sum("1\n2,3");
        expect(res).toEqual(6);
    })
    it("should return 36 for '1\n2\n3,4\n5,6\n7\n8'",()=>{
        const res = sum("1\n2\n3,4\n5,6\n7\n8");
        expect(res).toEqual(36);
    })
})