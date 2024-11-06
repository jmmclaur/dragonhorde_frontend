// import react, use state/effect/context, form modal, current user context

// constants //

// use effect

// form itself

// export default ProfileEditModal;

import React, { useState, useEffect, useContext } from "react";
import FormModal from "../FormModal/FormModal";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

const ProfileEditModal = ({
  closeActiveModal,
  activeModal,
  handleProfileEdit,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser?.avatar || "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileEdit(name, avatar);
    console.log("Changes saved.");
  };

  useEffect(() => {
    if (activeModal === "edit-profile" && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [activeModal, currentUser]);

  return (
    <FormModal
      title="Change profile data"
      buttonText="Save changes"
      isOpen={activeModal === "edit-profile"}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="editName"
          placeholder="Name"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar*{" "}
        <input
          type="url"
          className="modal__input"
          id="editAvatar"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </FormModal>
  );
};

export default ProfileEditModal;
