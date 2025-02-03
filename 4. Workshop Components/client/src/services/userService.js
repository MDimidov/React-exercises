const baseURL = `http://localhost:3005/api/users/`;

export async function getUsers() {
  return await fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data.users)
    .catch((err) => console.error("err:" + err));
}

export async function getUserById(id) {
  return await fetch(baseURL + id)
    .then((res) => res.json())
    .then((user) => user.user)
    .catch((err) => console.error("err:" + err));
}

export async function createUser(userData) {
  const { country, city, street, streetNumber, ...user } = userData;
  user.address = {
    country,
    city,
    street,
    streetNumber,
  };

  return await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((result) => result.user)
    .catch((err) => console.error("err:" + err));
}

export async function deleteUser(userId) {
  return await fetch(baseURL + userId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch(err => console.error('err:' + err));
}
