const Database = require('better-sqlite3');
const faker = require('faker');
const {
  createProfile,
  createTopic,
  createCategory,
  createLink,
  getAllProfiles,
  getAllTopics,
  getAllCategories,
  getAllLinks,
  createTeam,
  addProfileToTeam,
  getTeamsForProfile,
  getAllTeams,
  getCategoriesForTeam,
  getLinksForTeam
} = require('./crud');
const db = new Database('./db.db');

// Seed profiles
const TOPICS_NUM = 2;
const CATS_NUM = 2;
const LINKS_NUM = 2;
const numProfiles = 2;
let profileIds = [];
let devTeamId;

// Function to generate random data using faker.js
function generateRandomData() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    title: faker.lorem.words(),
    subtitle: faker.lorem.words(),
    iconAsciiCode: faker.random.alphaNumeric(5),
    description: faker.lorem.sentences(),
    url: faker.internet.url(),
  };
}

function createDevTeam(profileId) {
  const { title, subtitle, description, iconAsciiCode, url } = generateRandomData();
  devTeamId = createTeam('Development Team', iconAsciiCode);
  const topicId = createTopic(title, iconAsciiCode, profileId, devTeamId);
  const catId = createCategory(title, subtitle, iconAsciiCode, description, topicId, profileId, devTeamId);
  createLink(title, subtitle, url, iconAsciiCode, description, catId, profileId, 0, devTeamId);
}

function createNewProfile() {
  const { username, email } = generateRandomData();
  const profileId = createProfile(username, email);
  return profileId;
}

function createNewTopic(profileId) {
  const { title, iconAsciiCode } = generateRandomData();
  const topicId = createTopic(title, iconAsciiCode, profileId);
  return topicId;
}

function createNewCategory(profileId, topicId) {
  const { title, subtitle, iconAsciiCode, description } = generateRandomData();
  const categoryId = createCategory(title, subtitle, iconAsciiCode, description, topicId, profileId);
  return categoryId;
}

function createNewLink(profileId, categoryId) {
  const { title, subtitle, url, iconAsciiCode, description } = generateRandomData();
  const favourite = faker.datatype.number({ min: 0, max: 1 });
  createLink(title, subtitle, url, iconAsciiCode, description, categoryId, profileId, favourite);
}

(function seed() {

  for (let i = 0; i < numProfiles; i++) {

    const profileId = createNewProfile();

    if (i === 0) createDevTeam(profileId);

    profileIds.push(profileId)

    addProfileToTeam(profileId, devTeamId);

    for (let j = 0; j < TOPICS_NUM; j++) {

      const topicId = createNewTopic(profileId);

      for (let k = 0; k < CATS_NUM; k++) {

        const categoryId = createNewCategory(profileId, topicId);

        for (let l = 0; l < LINKS_NUM; l++) {

          createNewLink(profileId, categoryId)

        }
      }

    }
  }
})();

(function logger() {
  console.log('get all profiles: ', getAllProfiles())
  console.log('get all topics: ', getAllTopics())
  console.log('get all categories: ', getAllCategories())
  console.log('get all links: ', getAllLinks())
  console.log('get all teams: ', getAllTeams())
  profileIds.forEach(_id => { console.log('get all profile: ', _id, ' ', getTeamsForProfile(_id)); });
  console.log('get categories for team', getCategoriesForTeam(devTeamId));
  console.log('get links for team', getLinksForTeam(devTeamId));
})()

// Close the database connection
db.close();
