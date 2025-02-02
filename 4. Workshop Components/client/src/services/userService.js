const baseURL = `http://localhost:3005/api/users`;

export async function getUsers() {
  return await fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data.users)
    .catch((err) => console.error("err:" + err));
};
