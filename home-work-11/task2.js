function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error in fetching todo');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error in fetchTodo:', error);
    });
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error in fetching user');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error in fetchUser:', error);
    });
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error in  Promise.all:', error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('Promise.race result:');
    console.log(result);
  })
  .catch(error => {
    console.error('Error in Promise.race:', error);
  });
