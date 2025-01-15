const timeConvert = require('./timeConvert');


describe("Convert a given string hours and minutes in the form of hh:mm",()=>{
    it("it the given is 1000 should return 16:40",()=>{
        expect(timeConvert('1000')).toBe('16:40');
    });
    it("it the given is 59 should return 00:59",()=>{
        expect(timeConvert('59')).toBe('00:59');
    });
    it("it the given is 61 should return 01:01",()=>{
        expect(timeConvert('61')).toBe('01:01');
    });
    
    it("it the given is 1440 should return 24:00",()=>{
        expect(timeConvert('1440')).toBe('24:00');
    });
    it("it the given is 0 should return 00:00",()=>{
        expect(timeConvert('0')).toBe('00:00');
    });
    it("it the given is 34303 should return 571:43",()=>{
        expect(timeConvert('34303')).toBe('571:43');
    });
})