import './sandboxPage.scss';
import { TypeAnimation } from 'react-type-animation';

const SandboxPage = () => {
  // below we have the example from the typing animation library
  // i have removed the cursor
  return (
    <div className='page-container'>
      <div className='box'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'We produce food for Mice',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'We produce food for Hamsters',
            1000,
            'We produce food for Guinea Pigs',
            1000,
            'We produce food for Chinchillas',
            1000,
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          cursor={false}
        />
        <p>
          Once upon a time there was a lovely man who lived in the sea and liked
          to play with other people's waste
        </p>
      </div>
    </div>
  );
};

export default SandboxPage;
