describe('Comprobar cadenas de texto', () => {

    const text= 'Un bonito texto';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });
    
    test('No debe contener el siguiente texto', () => {
        expect(text).not.toMatch(/es/);
    });

    test('Comprobar el tamaño del texto', () => {
        expect(text).toHaveLength(15);
    });
});