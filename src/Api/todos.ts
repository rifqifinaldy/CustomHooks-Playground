import instance from "./client";

const getTodos = () => instance.get("/todos");
const getTodosId = (id: string) => instance.get("todos" + id);

export default {
  getTodos,
  getTodosId,
};
