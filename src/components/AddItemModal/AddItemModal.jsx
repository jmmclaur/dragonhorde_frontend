import React, { useState } from "react";
import FormModal from "../FormModal/FormModal";

const AddItemModal = ({
  activeModal,
  onAddNewItem,
  onClose,
  handleCloseModal,
}) => {
  //definitions
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [species, setSpecies] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddNewItem({ name, imageUrl, weather, species });
  };

  const resetForm = () => {
    resetForm({ name: "", imageUrl: "", weather: "", species: "" });
  };

  //form itself
  return (
    <FormModal
      title="New Dragon"
      buttonText="Add Dragon"
      isOpen={activeModal === "add-dragon"}
      onClose={onClose}
      closeActiveModal={handleCloseModal}
      onSubmit={onSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="user_name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="hot"
            type="radio"
            value="hot"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            name="weather_item"
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            value="warm"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            name="weather_item"
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            value="cold"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            name="weather_item"
          />
          Cold
        </label>
      </fieldset>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the species:</legend>
        <label className="modal__label modal__label_type_radio">
          {" "}
          <input
            id="chromatic"
            type="radio"
            value="chromatic"
            className="modal__radio-input"
            onChange={handleSpeciesChange}
            name="species_item"
          />
          Chromatic
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            id="metallic"
            type="radio"
            value="metallic"
            className="modal__radio-input"
            onChange={handleSpeciesChange}
            name="species_item"
          />
          Metallic
        </label>
      </fieldset>
    </FormModal>
  );
};

export default AddItemModal;
