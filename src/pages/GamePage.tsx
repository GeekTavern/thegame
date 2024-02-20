import { StoryPoint } from '../api/models';
import { ChoiceDisplay } from '../components/choiceDisplay/ChoiceDisplay';
import { ImageDisplay } from '../components/imageDisplay/ImageDisplay';
import { TextDisplay } from '../components/textDisplay/TextDisplay';
import './gamePage.scss';

interface GamePageProps {
  storyPoint: StoryPoint;
  setStoryPoint: Function;
}

export const GamePage = ({ storyPoint, setStoryPoint }: GamePageProps) => {
  return (
    <div className='game-page-container'>
      <p className='nested-paragraph'>I am an SCCS nesting test</p>
      <ImageDisplay storyPoint={storyPoint} />
      <TextDisplay storyPoint={storyPoint} />
      <ChoiceDisplay storyPoint={storyPoint} setStoryPoint={setStoryPoint} />
    </div>
  );
};
