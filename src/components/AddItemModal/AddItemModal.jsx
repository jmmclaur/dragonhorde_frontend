// import react and use state
// import formmodal

// Constants //

// Url Change
// API change
// onSubmit
// Reset Form

// the form itself
// name, species, weather, image, radio buttons for diet (fish, cattle, vegetables, gold, etc)

import React, { useState } from "react";
import FormModal from "../FormModal/FormModal";

const AddItemModal = ({
  handleCloseModal,
  onAddNewItem,
  activeModal,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeather] = useState("");
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
    setDragon(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddNewItem({ name, imageUrl, weather, species });
  };

  const resetForm = () => {
    resetForm({ name: "", imageUrl: "", weather: "", species: "" });
  };

  return (
    <FormModal
      title="New Garment"
      buttonText="Add Garment"
      isOpen={activeModal === "add-garment"}
      closeActiveModal={handleCloseModal}
      onSubmit={onSubmit}
      onClose={onClose}
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
          id="link"
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
      <fieldset className="modal__radio-buttons-1">
        <legend className="modal__legend-1">Select the species type:</legend>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="red"
            type="radio"
            value="red"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Red
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="red"
            type="radio"
            value="red"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Red
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="blue"
            type="radio"
            value="blue"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Blue
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="green"
            type="radio"
            value="green"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Green
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="black"
            type="radio"
            value="black"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Black
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="white"
            type="radio"
            value="white"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          White
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="copper"
            type="radio"
            value="copper"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Copper
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="brass"
            type="radio"
            value="brass"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Brass
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="silver"
            type="radio"
            value="silver"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Silver
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="gold"
            type="radio"
            value="gold"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Gold
        </label>
        <label className="modal__label modal__label_type_radio-1">
          {" "}
          <input
            id="bronze"
            type="radio"
            value="bronze"
            className="modal__radio-input-1"
            onChange={handleSpeciesChange}
            name="dragon_species"
          />
          Bronze
        </label>
      </fieldset>
    </FormModal>
  );
};

export default AddItemModal;
