import { getStoryPoint } from '../../api/api';
import { StoryPoint } from '../../api/models';
import './choiceDisplay.scss';
import { ChoiceBox } from '../ChoiceBox';
interface ChoiceDisplayProps {
  storyPoint: StoryPoint;
  setStoryPoint: Function;
}

export const ChoiceDisplay = ({
  storyPoint,
  setStoryPoint,
}: ChoiceDisplayProps) => {
  const handleClick = async (id: number) => {
    const storyPoint = await getStoryPoint(id);
    setStoryPoint(storyPoint);
  };

  if (!storyPoint) {
    return <div>Error</div>;
  }

  return (
    <div className='choice-display-container'>
      <ChoiceBox />
      <ChoiceBox />
      <ChoiceBox />
    </div>
  );
};
