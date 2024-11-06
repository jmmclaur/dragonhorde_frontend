//import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import DragonSection from "./components/DragonSection/DragonSection";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddItemModal from "./components/AddItemModal/AddItemModal";
import ItemModal from "./components/ItemModal/ItemModal";
import ProfileEditModal from "./components/ProfileEditModal/ProfileEditModal";
import Main from "./components/Main/Main";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getItems, addNewItem, deleteItemById } from "./utils/Api";
import { CurrentUserContext } from "./utils/contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "./utils/token";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getWeather, filterWeatherData } from "./utils/weatherApi";
import { CurrentTemperatureUnitContext } from "./utils/contexts/CurrentTemperatureUnitContext";
import { coordinates, apiKey } from "./utils/constants";
import * as api from "./utils/Api";
import * as auth from "./utils/auth/auth";

//structure
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [defaultDragons, setDragons] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    username: "",
    name: "",
    avatar: "",
  });
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999 },
    city: "",
  });
  const navigate = useNavigate();

  //clicks
  const handleRegisterClick = () => {
    setActiveModal("sign-up");
  };
  const handleLoginClick = () => {
    setActiveModal("log-in");
  };
  const handleAddClick = () => {
    setActiveModal("add-dragon");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  //new fixing add item button
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };
  const handleLogOut = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
    setCurrentUser({});
  };
  const handleProfileEdit = (name, avatar) => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    api
      .updateUserInfo(name, avatar, jwt)
      .then((data) => {
        setCurrentUser(data);
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleEditClick = () => {
    setActiveModal("edit-profile");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };
  /////

  //useEffect
  useEffect(() => {
    if (!activeModal) return;
    function handleClickOffModal(event) {
      if (event.target.classList.contains("modal")) {
        closeActiveModal();
      }
    }
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("click", handleClickOffModal); //need to define this
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("click", handleClickOffModal);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  //new fixing add item button
  useEffect(() => {
    getItems()
      .then(({ data }) => {
        setDragons(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setDragons(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("CurrentUser State: ", currentUser);
  }, [currentUser]);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    api
      .getUserInfo(jwt)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        console.log("weather");
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  /////

  //forms
  const handleRegistration = (email, password, name, avatar) => {
    auth
      .register(email, password, name, avatar)
      .then((data) => {
        if (data.user) {
          setCurrentUser({ name: data.user.name, avatar: data.user.avatar });
          navigate("/profile");
        }
      })
      .then(() => {
        closeActiveModal();
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        setToken(data.token);
        setIsLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        return api.getUserInfo(data.token);
      })
      .then((data) => {
        if (data != null) {
          setCurrentUser({
            name: data.name,
            avatar: data.avatar,
            _id: data._id,
          });
          closeActiveModal();
          navigate("/profile");
        } else {
          console.log("Unauthorized request");
        }
      })
      .catch(console.error);
  };

  const onAddNewItem = async ({ name, imageUrl, weather, species }) => {
    const jwt = getToken();
    return addNewItem(name, imageUrl, weather, species, jwt)
      .then((item) => {
        setDragons([item.data, ...defaultDragons]);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //new fixing add item button
  const handleDelete = async (id) => {
    const jwt = getToken();
    try {
      await deleteItemById(id, jwt);
      const updatedDefaultDragons = defaultDragons.filter(
        (item) => item._id !== id
      );
      setDragons(updatedDefaultDragons);
      closeActiveModal();
    } catch (err) {
      console.error("Error deleting item", err);
    }
  };

  const handleCardLike = ({ _id, isLiked }) => {
    const id = _id;
    const jwt = getToken();
    !isLiked
      ? api
          .addCardLike(id, jwt)
          .then((updatedCard) => {
            const updatedDefaultDragons = defaultDragons?.map((item) =>
              item._id === id ? updatedCard.data : item
            );
            setDragons(updatedDefaultDragons);
          })
          .catch((error) => {
            console.error(error);
          })
      : api
          .removeCardLike(id, jwt)
          .then((updatedCard) => {
            const updatedDefaultDragons = defaultDragons.map((item) =>
              item._id === id ? updatedCard.data : item
            );
            setDragons(updatedDefaultDragons);
          })
          .catch((error) => {
            console.error(error);
          });
  };

  /////

  //skeleton structure
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <div className="page__content">
              <Header
                handleRegisterClick={handleRegisterClick}
                handleLoginClick={handleLoginClick}
                handleAddClick={handleAddClick}
                isLoggedIn={isLoggedIn}
                weatherData={weatherData}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      updatedDefaultDragons={defaultDragons}
                      handleAddClick={handleAddClick}
                      handleCardClick={handleCardClick}
                      isLoggedIn={isLoggedIn}
                      weatherData={weatherData}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      {currentUser ? (
                        <Profile
                          handleAddClick={handleAddClick}
                          handleCardClick={handleCardClick}
                          handleEditClick={handleEditClick}
                          updatedDefaultDragons={defaultDragons}
                          isLoggedIn={isLoggedIn}
                          name={currentUser.name}
                          avatar={currentUser.avatar}
                          onCardLike={handleCardLike}
                          setIsLoggedIn={setIsLoggedIn}
                          handleLogOut={handleLogOut}
                        />
                      ) : (
                        <div>Loading...</div>
                      )}
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <h1>The Dragon Horde</h1>
              <p>Welcome to the Dragon Horde!</p>
              <About />
            </div>
            <div className="page__content-2">
              <DragonSection />
              <Footer />
            </div>
            <RegisterModal
              activeModal={activeModal}
              handleRegistration={handleRegistration}
              handleLogin={handleLogin}
              onClose={closeActiveModal}
            />
            <LoginModal
              activeModal={activeModal}
              handleLogin={handleLogin}
              handleRegisterClick={handleRegisterClick}
              onClose={closeActiveModal}
            />
            <AddItemModal
              onClick={handleAddClick}
              activeModal={activeModal}
              onAddNewItem={onAddNewItem}
              handleCloseModal={closeActiveModal}
              onClose={closeActiveModal}
            />
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              closeActiveModal={closeActiveModal}
              handleDeleteItem={handleDelete}
              handleClickOffModal={closeActiveModal}
            />
            <ProfileEditModal
              activeModal={activeModal}
              handleProfileEdit={handleProfileEdit}
              closeActiveModal={closeActiveModal}
            />
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
