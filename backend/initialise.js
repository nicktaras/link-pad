const Database = require('better-sqlite3');

// Connect to the SQLite database (this will create the file if it doesn't exist)
const db = new Database('./db.db');

// Create Profile table
db.exec(`
    CREATE TABLE IF NOT EXISTS Profile (
        profile_id INTEGER PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL,
        plan_id INTEGER DEFAULT 0,
        team_id INTEGER,
        FOREIGN KEY (team_id) REFERENCES Team(team_id)
    );
`);

// Create Topic table e.g. JS Development
db.exec(`
    CREATE TABLE Topic (
        topic_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        icon_ascii_code TEXT,
        profile_id INTEGER NOT NULL,
        team_id INTEGER, -- Allow NULL for individual user topics
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id)
        FOREIGN KEY (team_id) REFERENCES Team(team_id)
    );
`);

// Create Category table e.g. React JS Learning
db.exec(`
    CREATE TABLE Category (
        category_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        subtitle TEXT,
        icon_ascii_code TEXT,
        description TEXT,
        topic_id INTEGER NOT NULL,
        profile_id INTEGER NOT NULL,
        team_id INTEGER,
        FOREIGN KEY (topic_id) REFERENCES Topic(topic_id),
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id),
        FOREIGN KEY (team_id) REFERENCES Team(team_id)
    );
`);

// Create Link table e.g. React Js official website
db.exec(`
    CREATE TABLE Link (
        link_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        subtitle TEXT,
        url TEXT NOT NULL,
        icon_ascii_code TEXT,
        description TEXT,
        category_id INTEGER NOT NULL,
        profile_id INTEGER NOT NULL,
        favourite INTEGER DEFAULT 0,
        team_id INTEGER,
        FOREIGN KEY (category_id) REFERENCES Category(category_id),
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id),
        FOREIGN KEY (team_id) REFERENCES Team(team_id)
    );
`);

// Create team e.g. "Ninja React Devs"
db.exec(`
    CREATE TABLE Team(
        team_id INTEGER PRIMARY KEY,
        icon_ascii_code TEXT,
        team_name TEXT NOT NULL
    );
`);

// to find all profiles in a team
// SELECT Profile.*
// FROM Profile
// JOIN ProfileTeam ON Profile.profile_id = ProfileTeam.profile_id
// WHERE ProfileTeam.team_id = :teamId;

db.exec(`
    CREATE TABLE ProfileTeam (
        profile_id INTEGER,
        team_id INTEGER,
        PRIMARY KEY (profile_id, team_id),
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id),
        FOREIGN KEY (team_id) REFERENCES Team(team_id)
    );
`)

// Close the database connection
db.close();