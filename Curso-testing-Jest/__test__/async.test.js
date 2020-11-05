import { getDataFromApi } from '../promise';

// describe('Probar async y await', () => {
//     test('Realizando una petición a una API', async () => {

//         const api = 'https://rickandmortyapi.com/api/character/';
//         const getRick = 'https://rickandmortyapi/character/1';

//         await getDataFromApi(api).then(data => {
//            expect(data.results.length).toBeGreaterThan(0);
//          });
//         await getDataFromApi(getRick).then(data => {
//             expect(data.name).toEqual('Rick Sanchez');
//          });
//     });    
// });

describe("Probar Async/Await", () => {
    test("Realizar una petición a una api", async () => {
      const getCharacters = "https://rickandmortyapi.com/api/character";
      const getRick = "https://rickandmortyapi.com/api/character/1";
  
      const characters = await getDataFromApi(getCharacters);
      const rick = await getDataFromApi(getRick);
  
      expect(characters.results.length).toBeGreaterThan(0);
      expect(rick.name).toEqual("Rick Sanchez");
    });

    test("Realizar una petición a una api con error", async () => {
        const apiError = 'https://httpstat.us/404'
	    await getDataFromApi(apiError).then((data) => {
			expect(true).toBeTruthy(true) // Nunca entra aca
		}).catch((error) => {
			expect(error).toEqual(Error('Request failed with status code 404'))
		})
      });
  });

