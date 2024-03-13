import { StoryPoint } from '../api/models';

export const mockData: StoryPoint[] = [
  {
    id: 1,
    choices: [
      { choice: 'got to 2', destination: 2 },
      { choice: 'got to 3', destination: 3 },
    ],
    image: { url: 'my/image/url/1' },
    text: 'welcome to storypoint 1, what would you like to do?',
  },
  {
    id: 2,
    choices: [{ choice: 'got to 3', destination: 3 }],
    image: { url: 'my/image/url/2' },
    text: 'welcome to storypoint 2, what would you like to do?',
  },
  {
    id: 3,
    choices: [{ choice: 'got to 4', destination: 4 }],
    image: { url: 'my/image/url/3' },
    text: 'welcome to storypoint 3, what would you like to do',
  },
  {
    id: 4,
    choices: [{ choice: 'got to 5', destination: 5 }],
    image: { url: 'my/image/url/4' },
    text: 'welcome to storypoint 4, what would you like to do?',
  },
  {
    id: 5,
    choices: [{ choice: 'got back to 1', destination: 1 }],
    image: { url: 'my/image/url/5' },
    text: 'welcome to storypoint 5, what would you like to do?',
  },
];
