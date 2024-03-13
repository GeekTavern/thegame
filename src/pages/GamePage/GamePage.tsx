import { StoryPoint } from '../../api/models';
import { ChoiceDisplay } from '../../components/ChoiceDisplay/ChoiceDisplay';
import { ImageDisplay } from '../../components/imageDisplay/ImageDisplay';
import { TextDisplay } from '../../components/TextDisplay/TextDisplay';
import { InventoryToggle } from '../../components/InventoryToggle/InventoryToggle';
import { Inventory } from '../../components/Inventory/Inventory';
import { useState } from 'react';
import './gamePage.scss';

interface GamePageProps {
  storyPoint: StoryPoint;
  setStoryPoint: Function;
}

export const GamePage = ({ storyPoint, setStoryPoint }: GamePageProps) => {
  const [showInventory, setShowInventory] = useState(false);

  return (
    <div className='game-page-container'>
      <InventoryToggle setShowInventory={setShowInventory} />
      {showInventory ? (
        <Inventory
          showInventory={showInventory}
          setShowInventory={setShowInventory}
        />
      ) : null}

      <ImageDisplay storyPoint={storyPoint} />
      <TextDisplay storyPoint={storyPoint} setStoryPoint={setStoryPoint} />
    </div>
  );
};
