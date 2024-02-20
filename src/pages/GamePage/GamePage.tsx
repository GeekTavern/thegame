import { StoryPoint } from '../../api/models';
import { ChoiceDisplay } from '../../components/ChoiceDisplay/ChoiceDisplay';
import { ImageDisplay } from '../../components/imageDisplay/ImageDisplay';
import { TextDisplay } from '../../components/TextDisplay/TextDisplay';
import './gamePage.scss';

interface GamePageProps {
  storyPoint: StoryPoint;
  setStoryPoint: Function;
}

export const GamePage = ({ storyPoint, setStoryPoint }: GamePageProps) => {
  return (
    <div className='game-page-container'>
      <ImageDisplay storyPoint={storyPoint} />
      <TextDisplay storyPoint={storyPoint} />
      <ChoiceDisplay storyPoint={storyPoint} setStoryPoint={setStoryPoint} />
    </div>
  );
};
