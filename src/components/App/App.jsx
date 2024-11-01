// Imports from other components //

// function for the 3rd party API

// Constants //

// Registration
// Login
// Logout
// Edit Profile
// Add New Dragon
// Card Likes
// Card Dislikes
// Card Delete
// Toggle Switch

// Use Effects //

// userContexts and Routes

// export default App;

import Header from "../Header/Header";

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            handleRegisterClick={handleRegisterClick}
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  updatedDefaultClothingItems={defaultClothingItems}
                  handleAddClick={handleAddClick}
                  isLoggedIn={isLoggedIn}
                  onCardLike={handleCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  {currentUser ? (
                    <Profile
                      handleCardClick={handleCardClick}
                      defaultClothingItems={defaultClothingItems}
                      handleAddClick={handleAddClick}
                      handleEditClick={handleEditClick}
                      handleLogOut={handleLogOut}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      name={currentUser.name}
                      avatar={currentUser.avatar}
                      onCardLike={handleCardLike}
                    />
                  ) : (
                    <div>Loading...</div>
                  )}
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>

        <AddItemModal
          onClick={handleAddClick}
          activeModal={activeModal}
          handleCloseModal={closeActiveModal}
          onAddNewItem={onAddNewItem}
          onClose={closeActiveModal}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          handleDeleteItem={handleDelete}
          handleCloseModal={closeActiveModal}
        />
        <RegisterModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          handleRegistration={handleRegistration}
          handleLoginClick={handleLoginClick}
        />
        <LoginModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          handleLogin={handleLogin}
          handleRegisterClick={handleRegisterClick}
        />
        <EditPofileModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          handleEditProfile={handleEditProfile}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  </CurrentUserContext.Provider>
);

export default App;
