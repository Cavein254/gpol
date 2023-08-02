export const get = async (url) => {
  await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
  })
    .then((res) => console.log(res.json()))
    .catch((err) => console.log({ error: err }));
};
