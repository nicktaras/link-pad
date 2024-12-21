const Database = require('better-sqlite3');
const db = new Database('./db.db');
const {
  getAllProfiles,
  getAllTopics,
  getAllCategories,
  getAllLinks,
  getAllTeams,
} = require('./crud');

function logger() {
  console.log('get all profiles: ', getAllProfiles())
  console.log('get all topics: ', getAllTopics())
  console.log('get all categories: ', getAllCategories())
  console.log('get all links: ', getAllLinks())
  console.log('get all teams: ', getAllTeams())
}

(function main() {
  logger();
})();

// Close the database connection
db.close();
