import { Position } from '../../Position/Models/position.model';

export interface Player {
  id: number;
  shirtNo: number;
  name: string;
  positionId: number;
  appearances: number | null;
  goals: number | null;
  positionX: number;
  positionY: number;
  goalsPerMatch: number | null;
  position?: Position | null;
}

export interface PlayerFormData {
  shirtNo: number;
  name: string;
  positionId: number;
  appearances: number | null;
  goals: number | null;
  positionX: number;
  positionY: number;
  goalsPerMatch: number | null;
}
