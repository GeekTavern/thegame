import './inventory.scss';

interface InventoryProps {
  showInventory: boolean;
  setShowInventory: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Inventory = ({
  showInventory,
  setShowInventory,
}: InventoryProps) => {
  console.log(showInventory);
  return (
    <div
      className='inventory-container'
      onClick={() => setShowInventory((prevState) => !prevState)}
    >
      <div className='modal'>
        {showInventory ? (
          <div>
            <p>hello</p>
            <p>I am the inventory</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
