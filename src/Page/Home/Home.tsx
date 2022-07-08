import { useEffect } from "react";
import useTodos from "../../hooks/useTodos";
import todos from "../../Api/todos";

const Home = () => {
  const getTodosApi = useTodos(todos.getTodos);

  useEffect(() => {
    getTodosApi.request();
  }, []);
  console.log(getTodosApi)

  return <h1>{getTodosApi.loading}</h1>;
};

export default Home;
