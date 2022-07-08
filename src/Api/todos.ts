import instance from "./client";

const getTodos = () => instance.get("/todos");

export default {
    getTodos
}