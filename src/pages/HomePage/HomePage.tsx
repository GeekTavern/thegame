import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <p>Hello Gamer, welcome to our game</p>
      <Link to='/gamePage'>click here to play</Link>
    </div>
  );
};
