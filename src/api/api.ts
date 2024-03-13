import { StoryPoint } from './models';
import { mockData } from '../data/mockData';
import axios from 'axios';

export const getStoryPoint = async (id: number): Promise<StoryPoint> => {
  return (
    mockData.find((storypoint) => storypoint.id === id) ?? {
      id: 1,
      choices: [
        {
          choice: 'Error',
          destination: 0,
        },
      ],
      image: { url: 'Error' },
      text: 'Error',
    }
  );
};

//be careful here, this may be an error where we actually need the id to be a string
export const getStoryPointById = async (
  id: number
): Promise<StoryPoint | null> => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL ?? '';
    const response = await axios.get(`${apiUrl}/storypoint?id=${id}`);

    console.log(response.data, '<<< here is the resposne');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
