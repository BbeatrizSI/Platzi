describe('Comparadores comunes', () => {
    const user = {
        name: 'Bárbara',
        lastname: 'Sacristán'
    }

    const user2 = {
        name: 'Bárbara',
        lastname: 'Sacristán'
    }
    
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
    
});