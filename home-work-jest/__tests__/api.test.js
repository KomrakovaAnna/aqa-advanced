const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

api.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});

describe('JSONPlaceholder API Tests', () => {
  test('should fetch all posts', async () => {
    const response = await api.get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('should fetch a single post by ID', async () => {
    const postId = 1;
    const response = await api.get(`/posts/${postId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(postId);
    expect(response.data).toHaveProperty('title');
  });

  test('should fetch comments for a post', async () => {
    const postId = 1;
    const response = await api.get(`/posts/${postId}/comments`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('should fetch comments with postId as a query parameter', async () => {
    const postId = 1;
    const response = await api.get(`/comments`, {
      params: {
        postId: postId,
      },
    });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    response.data.forEach(comment => {
      expect(comment.postId).toBe(postId);
    });
  });

  test('should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await api.post('/posts', newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty('id');
  });
});


