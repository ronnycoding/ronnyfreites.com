export type ProficiencyLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner';

export interface Technology {
  id: string;
  name: string;
  category: string;
  proficiency: ProficiencyLevel;
  yearsOfExperience: number;
  gradient: string;
}

export interface HexPosition {
  x: number;
  y: number;
  row: number;
  col: number;
}
