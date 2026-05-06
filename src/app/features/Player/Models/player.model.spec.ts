import { Player } from './player.model';

describe('Player', () => {
  it('should create an instance', () => {
    const player: Player = {
      id: 1,
      shirtNo: 10,
      name: 'Test Player',
      positionId: 1,
      appearances: 1,
      goals: 1,
      positionX: 0,
      positionY: 0,
      goalsPerMatch: 1,
    };

    expect(player).toBeTruthy();
  });
});
