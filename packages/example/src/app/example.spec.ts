import { example } from './example';

describe('example', () => {
  it('should work', () => {
    expect(example().fields).toBeTruthy();
    expect(example().values).toBeTruthy();
  });
});
