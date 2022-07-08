import { useEffect } from "react";
import useTodos from "../../hooks/useTodos";
import todos from "../../Api/todos";

const Home = () => {
  const getTodosApi = useTodos(todos.getTodos);

  useEffect(() => {
    getTodosApi.request();
  }, []);
  console.log(getTodosApi);

  return (
    <ul>
      {getTodosApi.loading === true
        ? "Loading..."
        : getTodosApi.data !== null
        ? getTodosApi.data.map((data, i) => <li key={i}>{data.title}</li>)
        : getTodosApi.error}
    </ul>
  );
};

export default Home;
