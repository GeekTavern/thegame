import './inventoryToggle.scss';

interface InventoryToggleProps {
  setShowInventory: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InventoryToggle = ({ setShowInventory }: InventoryToggleProps) => {
  return (
    <button
      onClick={() => setShowInventory((prevState) => !prevState)}
      className='inventory-toggle-container'
    >
      I AM THE INVENTORY TOGGLE
    </button>
  );
};
