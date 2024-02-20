import { StoryPoint } from '../../api/models';
import './textDisplay.scss';
import { TypeAnimation } from 'react-type-animation';

interface TextDisplayProps {
  storyPoint: StoryPoint;
}

export const TextDisplay = ({ storyPoint }: TextDisplayProps) => {
  return (
    <div className='text-display-container'>
      <div className='box'>
        <TypeAnimation
          sequence={[
            'You take a bold step into the void',
            () => console.log('done typing!'),
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={0}
          cursor={false}
        />
      </div>
    </div>
  );
};
