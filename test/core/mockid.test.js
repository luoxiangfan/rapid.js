import { Mockid } from '../../src/debug/mockid';
import Rapid from '../../src/core';

describe('Mockid', () => {
  describe('foo', () => {
    it('foobar', () => {
      const mockHttp = new Mockid();

      const rapid = new Rapid({
        http: mockHttp,
        modelName: 'mock',
      });

      mockHttp.install(rapid);

      rapid.get('/foobar')
        .then(response => {
          // console.log(response); // eslint-disable-line

          expect(response.url).toBe('api/mock/foobar');
        });
    });
  });
});
