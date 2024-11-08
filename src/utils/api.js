const baseUrl = "http://localhost:3001";

/*
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.jmmclaur.jumpingcrab.com"
    : "http://localhost:3001"; */

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

async function getItems() {
  try {
    const res = await fetch(`${baseUrl}/dragons`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(res);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function addNewItem(name, imageUrl, weather, species, token) {
  return fetch(`${baseUrl}/dragons`, {
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

async function deleteItemById(id, token) {
  const res = await fetch(`${baseUrl}/dragons/${id}`, {
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
  const res = await fetch(`${baseUrl}/dragons/${_id}/likes`, {
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
  const res = await fetch(`${baseUrl}/dragons/${_id}/likes`, {
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
