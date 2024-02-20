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

export default SandboxPage;
