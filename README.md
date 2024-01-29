# link-pad

## db design

/ tables

- users
- categories
- links
- topics
- teams

### design rules:

#### managing topics

- creating topics for individuals requires the user_id
- creating topics for teams requires the user_id and the team_id must be defined

## Development

`pnpm init` - initialise the application db with table definitions
`pnpm seed` - seed the application db with mock data

## TODOs

Add favourites to links