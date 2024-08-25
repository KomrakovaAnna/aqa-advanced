class TodoService {
  async fetchTodo() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      if (!response.ok) {
        throw new Error("Error while fetching todo");
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error("Error in fetchTodo:", error);
    }
  }
}

class UserService {
  async fetchUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      if (!response.ok) {
        throw new Error("Error while fetching user");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error in fetchUser:", error);
    }
  }
}

async function fetchDataWithPromiseAll() {
  const todoService = new TodoService();
  const userService = new UserService();

  try {
    const [todo, user] = await Promise.all([
      todoService.fetchTodo(),
      userService.fetchUser(),
    ]);
    console.log("Result of Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
}

async function fetchDataWithPromiseRace() {
  const todoService = new TodoService();
  const userService = new UserService();

  try {
    const result = await Promise.race([
      todoService.fetchTodo(),
      userService.fetchUser(),
    ]);
    console.log("Result of Promise.race:");
    console.log(result);
  } catch (error) {
    console.error("Error in Promise.race:", error);
  }
}

fetchDataWithPromiseAll();
fetchDataWithPromiseRace();
