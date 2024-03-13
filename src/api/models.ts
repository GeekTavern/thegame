export interface StoryPoint {
  id: number;
  choices: Choice[];
  image?: Image;
  text: string;
}

export interface Choice {
  choice: string;
  destination: number;
}

export interface Image {
  id?: number;
  name?: string;
  url: string;
}
