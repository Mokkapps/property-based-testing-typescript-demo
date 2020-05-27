import {indexOf} from "./main";

import * as fc from 'fast-check';

describe('Example based tests', () => {
    it('should return -1 if text does not contain the given pattern', () => {
        expect(indexOf("abc123", "zzz")).toBe(-1);
    });

    it('should return 0 if text contains the given pattern', () => {
        expect(indexOf("123abc", "123")).toBe(0);
    });

    it('should return 0 if empty strings are compared', () => {
        expect(indexOf("", "")).toBe(0);
    });
});

describe('Property based tests', () => {
    it('should always contain itself', () => {
        fc.assert(fc.property(fc.string(), text => indexOf(text, text) !== -1));
    });

    it('should always contain its substrings', () => {
        fc.assert(fc.property(fc.string(), fc.string(), fc.string(), (a,b,c) => {
            // Alternatively: no return statement and direct usage of expect or assert
            return indexOf(b, a+b+c) !== -1;
        }));
    });
});
