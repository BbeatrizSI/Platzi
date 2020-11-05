import {arrayFruits, arrayColors} from '../arrays';

describe('Probar que un elemento existe', () => {
    test('Contiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un plátano', () => {
        expect(arrayFruits()).not.toContain('plátano');
    });
    test('Comprobar la longitud del arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Comprobar que existe un color', () => {
        expect(arrayColors()).toContain('rojo');
    });
});