// import sidebar, dragonsection, css

// const profile

// form itself

// export default Profile

import SideBar from "../SideBar/Sidebar";
import DragonSection from "../DragonSection/DragonSection"; // double check how if it's case sensitive
import "./Profile.css";

const Profile = ({
  name,
  avatar,
  handleAddClick,
  handleEditClick,
  handleCardClick,
  defaultDragons,
  isLoggedIn,
  setIsLoggedIn,
  handleLogOut,
  onCardLike,
}) => {
  if (!name || !avatar) {
    console.log("Missing props, name or avatar is undefined");
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
      <section className="profile__dragon">
        <DragonSection
          handleAddClick={handleAddClick}
          handleCardClick={handleCardClick}
          defaultDragons={defaultDragons}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
