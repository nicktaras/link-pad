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

// Seed profiles
const numProfiles = 2;
let profileIds = [];
let devTeamId;
// let marketingTeamId;

for (let i = 0; i < numProfiles; i++) {
  const { username, email } = generateRandomData();
  const profileId = createProfile(username, email);

  if (i === 0) {
    const { title, subtitle, description, iconAsciiCode, url } = generateRandomData();
    devTeamId = createTeam('Development Team', iconAsciiCode);
    const topicId = createTopic(title, iconAsciiCode, profileId, devTeamId);
    const catId = createCategory(title, subtitle, iconAsciiCode, description, topicId, profileId, devTeamId);
    createLink(title, subtitle, url, iconAsciiCode, description, catId, profileId, 0, devTeamId);
  }
  profileIds.push(profileId)

  addProfileToTeam(profileId, devTeamId);
  // addProfileToTeam(profileId, marketingTeamId);

  // Seed topics for each profile
  const numTopics = 2; // faker.datatype.number({ min: 1, max: 5 });

  for (let j = 0; j < numTopics; j++) {
    const { title, iconAsciiCode } = generateRandomData();
    const topicId = createTopic(title, iconAsciiCode, profileId);

    // Seed categories for each topic
    const numCategories = 2; //faker.datatype.number({ min: 1, max: 5 });
    for (let k = 0; k < numCategories; k++) {
      const { title, subtitle, iconAsciiCode, description } = generateRandomData();
      const categoryId = createCategory(title, subtitle, iconAsciiCode, description, topicId, profileId);

      // Seed links for each category
      const numLinks = 2; //faker.random.number({ min: 1, max: 5 });
      for (let l = 0; l < numLinks; l++) {
        const { title, subtitle, url, iconAsciiCode, description } = generateRandomData();
        const favourite = faker.datatype.number({ min: 0, max: 1 });
        createLink(title, subtitle, url, iconAsciiCode, description, categoryId, profileId, favourite);
      }
    }

  }
}

console.log('get all profiles: ', getAllProfiles())
console.log('get all topics: ', getAllTopics())
console.log('get all categories: ', getAllCategories())
console.log('get all links: ', getAllLinks())
console.log('get all teams: ', getAllTeams())
profileIds.forEach(_id => {
  console.log('get all profile: ', _id, ' ', getTeamsForProfile(_id));
});
console.log('get categories for team', getCategoriesForTeam(devTeamId));
console.log('get links for team', getLinksForTeam(devTeamId));

// Close the database connection
db.close();
