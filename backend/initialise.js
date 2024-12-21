const Database = require('better-sqlite3');

// Connect to the SQLite database (this will create the file if it doesn't exist)
const db = new Database('./db.db');

// Wrapping table creation in a transaction
db.transaction(() => {
  // Profile table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Profile (
        profile_id INTEGER PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL,
        plan_id INTEGER DEFAULT NULL,
        team_id INTEGER,
        FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
    );
  `);

  // Topic table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Topic (
        topic_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        icon_ascii_code TEXT,
        profile_id INTEGER NOT NULL,
        team_id INTEGER,
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) ON DELETE CASCADE,
        FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
    );
  `);

  // Category table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Category (
        category_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        subtitle TEXT,
        icon_ascii_code TEXT,
        description TEXT,
        topic_id INTEGER NOT NULL,
        profile_id INTEGER NOT NULL,
        team_id INTEGER,
        FOREIGN KEY (topic_id) REFERENCES Topic(topic_id) ON DELETE CASCADE,
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) ON DELETE CASCADE,
        FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
    );
  `);

  // Link table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Link (
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
        FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE,
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) ON DELETE CASCADE,
        FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
    );
  `);

  // Team table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Team (
        team_id INTEGER PRIMARY KEY,
        team_name TEXT NOT NULL,
        icon_ascii_code TEXT
    );
  `);

  // ProfileTeam join table
  db.exec(`
    CREATE TABLE IF NOT EXISTS ProfileTeam (
        profile_id INTEGER,
        team_id INTEGER,
        PRIMARY KEY (profile_id, team_id),
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) ON DELETE CASCADE,
        FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
    );
  `);

  // Plan table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Plan (
        plan_id INTEGER PRIMARY KEY,
        plan_name TEXT NOT NULL
    );
  `);

  // ProfilePlan join table
  db.exec(`
    CREATE TABLE IF NOT EXISTS ProfilePlan (
        profile_id INTEGER,
        plan_id INTEGER,
        PRIMARY KEY (profile_id, plan_id),
        FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) ON DELETE CASCADE,
        FOREIGN KEY (plan_id) REFERENCES Plan(plan_id) ON DELETE CASCADE
    );
  `);
}).run();

// Close the database connection
db.close();