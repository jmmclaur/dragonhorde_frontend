// import sidebar, dragonsection, css

// const profile

// form itself

// export default Profile

/*if new stuff doesn't work revert back to this
function Profile({}) {
  return <div>Profile</div>;
}

export default Profile; */

import SideBar from "../SideBar/SideBar";
import DragonSection from "../DragonSection/DragonSection";
import "./Profile.css";

const Profile = ({
  name,
  avatar,
  handleCardClick,
  handleAddClick,
  handleEditClick,
  defaultDragonItems,
  handleLogOut,
  setIsLoggedIn,
  isLoggedIn,
  onCardLike,
}) => {
  console.log("Profile Props - Name: ", name);
  console.log("Profile Props - Avatar: ", avatar);
  if (!name || !avatar) {
    console.log("Missing props - Name or Avatar is undefined");
  }

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditClick={handleEditClick}
          setIsLoggedIn={setIsLoggedIn}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__dragons">
        <DragonSection
          handleCardClick={handleCardClick}
          handleAddClick={handleAddClick}
          defaultDragonItems={defaultDragonItems}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
