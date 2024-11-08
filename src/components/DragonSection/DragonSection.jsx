// import currentusercontext, react, use context, itemcard, css
// functions //
// constants //
// itemcard break down
// export default DragonSection;

/*if the new stuff doesn't work revert to this
function DragonSection({}) {
  return <div>DragonSection</div>;
}

export default DragonSection; */

import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./DragonSection.css";

function DragonSection({
  handleCardClick,
  handleAddClick,
  defaultDragonItems,
  isLoggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = defaultDragonItems?.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="dragon-section">
      <div className="dragon-section__buttons">
        <p>Your Items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="dragon-section__add-item-btn"
        >
          + Add New
        </button>
      </div>
      <div className="break">
        <ul className="dragon-section__items">
          {userItems?.map((item) => {
            return (
              <ItemCard
                key={item._id || item.id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default DragonSection;
