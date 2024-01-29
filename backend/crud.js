const Database = require('better-sqlite3');
const db = new Database('./db.db');

// Create
function createProfile(username, email, planId, teamId) {
  const planIdValue = planId !== undefined ? planId : 0;
  const teamIdValue = teamId !== undefined ? teamId : null;
  const stmt = db.prepare('INSERT INTO Profile (username, email, plan_id, team_id) VALUES (?, ?, ?, ?)');
  const result = stmt.run(username, email, planIdValue, teamIdValue);
  return result.lastInsertRowid;
}

function createTopic(title, iconAsciiCode, profileId, teamId) {
  const teamIdValue = teamId !== undefined ? teamId : null;
  const stmt = db.prepare('INSERT INTO Topic (title, icon_ascii_code, profile_id, team_id) VALUES (?, ?, ?, ?)');
  const result = stmt.run(title, iconAsciiCode, profileId, teamIdValue);
  return result.lastInsertRowid;
}

function createCategory(title, subtitle, iconAsciiCode, description, topicId, profileId, teamId) {
  const teamIdValue = teamId !== undefined ? teamId : null;
  const stmt = db.prepare('INSERT INTO Category (title, subtitle, icon_ascii_code, description, topic_id, profile_id, team_id) VALUES (?, ?, ?, ?, ?, ?, ?)');
  const result = stmt.run(title, subtitle, iconAsciiCode, description, topicId, profileId, teamIdValue);
  return result.lastInsertRowid;
}

function createLink(title, subtitle, url, iconAsciiCode, description, categoryId, profileId, favourite, teamId) {
  const teamIdValue = teamId !== undefined ? teamId : null;
  const favouriteValue = favourite !== undefined ? favourite : 0;
  const stmt = db.prepare('INSERT INTO Link (title, subtitle, url, icon_ascii_code, description, category_id, profile_id, favourite, team_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const result = stmt.run(title, subtitle, url, iconAsciiCode, description, categoryId, profileId, favouriteValue, teamIdValue);
  return result.lastInsertRowid;
}

// Read
function getAllProfiles() {
  return db.prepare('SELECT * FROM Profile').all();
}

function getAllTopics() {
  return db.prepare('SELECT * FROM Topic').all();
}

function getAllCategories() {
  return db.prepare('SELECT * FROM Category').all();
}

function getAllLinks() {
  return db.prepare('SELECT * FROM Link').all();
}

// Update
function updateProfile(profileId, newUsername, newEmail) {
  const stmt = db.prepare('UPDATE Profile SET username = ?, email = ? WHERE profile_id = ?');
  stmt.run(newUsername, newEmail, profileId);
}

function updateTopic(topicId, newTitle, newIconAsciiCode) {
  const stmt = db.prepare('UPDATE Topic SET title = ?, icon_ascii_code = ? WHERE topic_id = ?');
  stmt.run(newTitle, newIconAsciiCode, topicId);
}

function updateCategory(categoryId, newTitle, newSubtitle, newIconAsciiCode, newDescription, newTopicId) {
  const stmt = db.prepare('UPDATE Category SET title = ?, subtitle = ?, icon_ascii_code = ?, description = ?, topic_id = ? WHERE category_id = ?');
  stmt.run(newTitle, newSubtitle, newIconAsciiCode, newDescription, newTopicId, categoryId);
}

function updateLink(linkId, newTitle, newSubtitle, newUrl, newIconAsciiCode, newDescription, newCategoryId) {
  const stmt = db.prepare('UPDATE Link SET title = ?, subtitle = ?, url = ?, icon_ascii_code = ?, description = ?, category_id = ? WHERE link_id = ?');
  stmt.run(newTitle, newSubtitle, newUrl, newIconAsciiCode, newDescription, newCategoryId, linkId);
}

// Delete
function deleteProfile(profileId) {
  const stmt = db.prepare('DELETE FROM Profile WHERE profile_id = ?');
  stmt.run(profileId);
}

function deleteTopic(topicId) {
  const stmt = db.prepare('DELETE FROM Topic WHERE topic_id = ?');
  stmt.run(topicId);
}

function deleteCategory(categoryId) {
  const stmt = db.prepare('DELETE FROM Category WHERE category_id = ?');
  stmt.run(categoryId);
}

function deleteLink(linkId) {
  const stmt = db.prepare('DELETE FROM Link WHERE link_id = ?');
  stmt.run(linkId);
}

// Function to create a team
function createTeam(teamName, teamIcon) {
  const stmt = db.prepare('INSERT INTO Team (team_name, icon_ascii_code) VALUES (?, ?)');
  const result = stmt.run(teamName, teamIcon);
  return result.lastInsertRowid;
}

// Function to retrieve all teams
function getAllTeams() {
  const stmt = db.prepare('SELECT * FROM Team');
  return stmt.all();
}

// Function to associate a profile with a team
function addProfileToTeam(profileId, teamId) {
  const stmt = db.prepare('INSERT INTO ProfileTeam (profile_id, team_id) VALUES (?, ?)');
  stmt.run(profileId, teamId);
}

// Function to retrieve teams associated with a profile
function getTeamsForProfile(profileId) {
  const stmt = db.prepare('SELECT Team.* FROM Team JOIN ProfileTeam ON Team.team_id = ProfileTeam.team_id WHERE ProfileTeam.profile_id = ?');
  return stmt.all(profileId);
}

// Function to update a profile's information - TODO correct this, it's not based on team.
function updateTeamProfile(profileId, newUsername, newEmail) {
  // const stmt = db.prepare('UPDATE Profile SET username = ?, email = ? WHERE profile_id = ?');
  // stmt.run(newUsername, newEmail, profileId);
}

// Function to delete a profile - TODO correct this, it's not based on team.
function deleteTeamProfile(profileId) {
  // const stmt = db.prepare('DELETE FROM Team WHERE profile_id = ?');
  // stmt.run(profileId);
}

// Function to retrieve categories associated with a team
function getCategoriesForTeam(teamId) {
  const stmt = db.prepare('SELECT Category.* FROM Category JOIN Team ON Category.team_id = Team.team_id WHERE Category.team_id = ?');
  return stmt.all(teamId);
}

// Function to retrieve links associated with a team
function getLinksForTeam(teamId) {
  const stmt = db.prepare('SELECT Link.* FROM Link JOIN Team ON Link.team_id = Team.team_id WHERE Link.team_id = ?');
  return stmt.all(teamId);
}

module.exports = {
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
  deleteLink,
  getAllTeams,
  addProfileToTeam,
  getTeamsForProfile,
  updateTeamProfile,
  deleteTeamProfile,
  createTeam,
  getCategoriesForTeam,
  getLinksForTeam
}