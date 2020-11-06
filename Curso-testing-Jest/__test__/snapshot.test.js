import {getCharacter} from '../snapshot';
import  rick from '../rick.json';

describe('Es hora de las instantáneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    test('Siempre fallará el Snapshot', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot();
    });
    test('Permitimos una excepción', () => {
        const user2 = {
            name: 'Bárbara',
            id: Math.floor(Math.random() * 20)
        }
        expect(user2).toMatchSnapshot({
            id: expect.any(Number)
        });

    })
});