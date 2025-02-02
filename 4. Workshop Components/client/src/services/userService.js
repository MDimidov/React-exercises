const baseURL = `http://localhost:3005/api/users/`;

export async function getUsers() {
  return await fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data.users)
    .catch((err) => console.error("err:" + err));
};


export async function getUserById(id) {
  return await fetch(baseURL + id)
    .then((res) => res.json())
    .then(user => user.user)
    .catch((err) => console.error("err:" + err));
}