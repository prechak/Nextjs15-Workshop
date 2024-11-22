const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data;
};
const aboutPage = async () => {
  const todos = await fetchTodos();
  console.log(todos);

  return (
    <div>
      <h1>About Page</h1>
      {todos.map((item: any, index: number) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};
export default aboutPage;
