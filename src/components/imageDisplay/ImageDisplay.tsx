import { StoryPoint } from '../../api/models';
import './imageDisplay.scss';

interface ImageDisplayProps {
  storyPoint: StoryPoint;
}

export const ImageDisplay = ({ storyPoint }: ImageDisplayProps) => {
  return (
    <div className='image-container'>
      <p>I am the image display</p>
      <img src='/assets/Space Image.jpeg'></img>
    </div>
  );
};
