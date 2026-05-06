import { Position } from './position.model';

describe('Position', () => {
  it('should create an instance', () => {
    const position: Position = {
      id: 1,
      name: 'Forward',
      displayOrder: 1,
    };

    expect(position).toBeTruthy();
  });
});
