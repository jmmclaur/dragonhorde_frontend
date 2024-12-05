//const baseUrl = "http://localhost:3001";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.dragonhorde.jmmclaur.jumpingcrab.com"
    : "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const updateUserInfo = async (name, avatar, token) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
  return checkResponse(res);
};

/// Simulate Login ///
/*
function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "6751dce37212176e62a1bf13", // generated this at random from a mongodb id generator website: https://observablehq.com/@hugodf/mongodb-objectid-generator
        title: "Some news article",
        url: "put some actual article URL here",
        // ...etc, whatever properties it's supposed to have
      },

      // and have however many you want to show on the saved-news page
    ])
  );
}

function addNewItem(name, imageUrl, weather, species, token) {
  // adding a new dragon
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article,
      url, // Use whatever properties the newsAPI gives you, I just made these up
      title: article.title,
      imageUrl: article.imagUrl,
      // whatever other properties from the newsAPI-given article object you saved to the database
    });
  });
} */

/// Server ///

async function addNewItem(name, imageUrl, weather, species, token) {
  console.log("weather: " + weather);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
      species,
    }),
  }).then(checkResponse);
}

async function getItems() {
  try {
    const res = await fetch(`${baseUrl}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("get items");
    return checkResponse(res);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function deleteItemById(id, token) {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(res);
}

async function addCardLike(_id, token) {
  const res = await fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(res);
}

async function removeCardLike(_id, token) {
  const res = await fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(res);
}

export {
  checkResponse,
  getItems,
  addNewItem,
  deleteItemById,
  getUserInfo,
  updateUserInfo,
  addCardLike,
  removeCardLike,
};
