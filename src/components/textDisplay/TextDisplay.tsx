import { useLinkClickHandler } from 'react-router-dom';
import { StoryPoint } from '../../api/models';
import './textDisplay.scss';
import { getStoryPoint, getStoryPointById } from '../../api/api';
import { ReactTyped } from 'react-typed';

interface TextDisplayProps {
  storyPoint: StoryPoint;
  setStoryPoint: Function;
}

export const TextDisplay = ({
  storyPoint,
  setStoryPoint,
}: TextDisplayProps) => {
  const clickHandler = async (destination: number) => {
    const newStoryPoint = await getStoryPointById(destination);

    console.log(storyPoint);
    if (newStoryPoint) {
      setStoryPoint(newStoryPoint);
    }
  };

  return (
    <div className='text-display-container'>
      <div className='box'></div>

      <div>
        <ReactTyped strings={[storyPoint.text]}></ReactTyped>
      </div>

      <div className='choices-container'>
        {storyPoint.choices.map((choice) => {
          //actually no, this will be the api call
          return (
            <p
              className='choice'
              onClick={() => clickHandler(choice.destination)}
            >
              {choice.choice}
            </p>
          );
        })}
      </div>
    </div>
  );
};
