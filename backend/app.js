const fastify = require('fastify')();
const {
  createProfile,
  createTopic,
  createCategory,
  createLink,
  getAllProfiles,
  getAllTopics,
  getAllCategories,
  getAllLinks,
  updateProfile,
  updateTopic,
  updateCategory,
  updateLink,
  deleteProfile,
  deleteTopic,
  deleteCategory,
  deleteLink
} = require('./crud');

// Create
fastify.post('/profile', async (request, reply) => {
  const { username, email } = request.body;
  const profileId = createProfile(username, email);
  reply.send({ profileId });
});

fastify.post('/topic', async (request, reply) => {
  const { title, iconAsciiCode } = request.body;
  const topicId = createTopic(title, iconAsciiCode);
  reply.send({ topicId });
});

fastify.post('/category', async (request, reply) => {
  const { title, subtitle, iconAsciiCode, description, topicId } = request.body;
  const categoryId = createCategory(title, subtitle, iconAsciiCode, description, topicId);
  reply.send({ categoryId });
});

fastify.post('/link', async (request, reply) => {
  const { title, subtitle, url, iconAsciiCode, description, categoryId } = request.body;
  const linkId = createLink(title, subtitle, url, iconAsciiCode, description, categoryId);
  reply.send({ linkId });
});

// Health Check
fastify.get('/', async (request, reply) => {
  reply.send('health ok');
});

// Read
fastify.get('/profiles', async (request, reply) => {
  const profiles = getAllProfiles();
  reply.send(profiles);
});

fastify.get('/topics', async (request, reply) => {
  const topics = getAllTopics();
  reply.send(topics);
});

fastify.get('/categories', async (request, reply) => {
  const categories = getAllCategories();
  reply.send(categories);
});

fastify.get('/links', async (request, reply) => {
  const links = getAllLinks();
  reply.send(links);
});

// Update
fastify.put('/profile/:id', async (request, reply) => {
  const { id } = request.params;
  const { username, email } = request.body;
  updateProfile(id, username, email);
  reply.send({ message: 'Profile updated successfully' });
});

fastify.put('/topic/:id', async (request, reply) => {
  const { id } = request.params;
  const { title, iconAsciiCode } = request.body;
  updateTopic(id, title, iconAsciiCode);
  reply.send({ message: 'Topic updated successfully' });
});

fastify.put('/category/:id', async (request, reply) => {
  const { id } = request.params;
  const { title, subtitle, iconAsciiCode, description, topicId } = request.body;
  updateCategory(id, title, subtitle, iconAsciiCode, description, topicId);
  reply.send({ message: 'Category updated successfully' });
});

fastify.put('/link/:id', async (request, reply) => {
  const { id } = request.params;
  const { title, subtitle, url, iconAsciiCode, description, categoryId } = request.body;
  updateLink(id, title, subtitle, url, iconAsciiCode, description, categoryId);
  reply.send({ message: 'Link updated successfully' });
});

// Delete
fastify.delete('/profile/:id', async (request, reply) => {
  const { id } = request.params;
  deleteProfile(id);
  reply.send({ message: 'Profile deleted successfully' });
});

fastify.delete('/topic/:id', async (request, reply) => {
  const { id } = request.params;
  deleteTopic(id);
  reply.send({ message: 'Topic deleted successfully' });
});

fastify.delete('/category/:id', async (request, reply) => {
  const { id } = request.params;
  deleteCategory(id);
  reply.send({ message: 'Category deleted successfully' });
});

fastify.delete('/link/:id', async (request, reply) => {
  const { id } = request.params;
  deleteLink(id);
  reply.send({ message: 'Link deleted successfully' });
});

// Start the server
fastify.listen({ port: 8000 }, console.log(`Server is listening on 8000`))