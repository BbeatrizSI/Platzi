import {isNull, isTrue, isFalse, isUndefined} from '../true';

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados true', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados false', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();

    });
});

describe('Probar resultados no true', () => {
    test('true or false', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});