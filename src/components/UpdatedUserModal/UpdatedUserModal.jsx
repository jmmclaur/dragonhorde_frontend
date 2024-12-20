// import formmodal, use context/effect, current user context

// functions

// constants

// formmodal itself

// export default UpdatedUserModal;

import FormModal from "./FormModal";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function UpdateUserModal({ isOpen, handleUpdateUser, isLoading }) {
  const { userData } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();

  useEffect(() => {
    setValues({ username: userData.name, avatarUrl: userData.avatarUrl });
  }, [isOpen, setValues, userData]);

  const handleSubmit = () => {
    handleUpdateUser(values, resetCurrentForm);
  };

  const resetCurrentForm = () => {
    resetForm({ username: "", avatarUrl: "" });
  };

  return (
    <FormModal
      title={"Change profile data"}
      buttonText={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      formValid={isValid}
    >
      <label className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="name-update"
          name="username"
          placeholder="Name"
          minLength="4"
          maxLength="64"
          required
          onChange={handleChange}
          value={values.username || ""}
        />
        <span
          className={`modal__input-error ${
            errors.username ? "modal__input-error_visible" : ""
          }`}
          id="name-error"
        >
          {errors.username}
        </span>
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          id="avatarUrl-update"
          name="avatarUrl"
          placeholder="Avatar Url"
          onChange={handleChange}
          value={values.avatarUrl || ""}
        />
        <span
          className={`modal__input-error ${
            errors.avatarUrl ? "modal__input-error_visible" : ""
          }`}
          id="avatarUrl-error"
        >
          {errors.avatarUrl}
        </span>
      </label>
    </FormModal>
  );
}

export default UpdateUserModal;
