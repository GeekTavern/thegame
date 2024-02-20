import { StoryPoint } from '../../api/models';
import './imageDisplay.css';

interface ImageDisplayProps {
  storyPoint: StoryPoint;
}

export const ImageDisplay = ({ storyPoint }: ImageDisplayProps) => {
  return <div className='image-container'>{storyPoint?.image.url}</div>;
};
