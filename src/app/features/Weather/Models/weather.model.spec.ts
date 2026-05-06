import { Weather } from './weather.model';

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new Weather('2026-05-06', 18, 64, 'Mild')).toBeTruthy();
  });
});
