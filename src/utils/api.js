const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const updatedUserInfo = async (name, avatar, token) => {
  const res = await fetch(`${baseUrl}/user`, {
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
    console.log("get items");
    const res = await fetch(`${baseUrl}/items`, {
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
  updatedUserInfo,
  addCardLike,
  removeCardLike,
};
