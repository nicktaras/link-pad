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

/user
  /category
    /subcategory
      /link
/team
  /category
    /subcategory
      /link

## Development

`pnpm init` - initialise the application db with table definitions
`pnpm seed` - seed the application db with mock data

## TODOs

- Test out the update and delete functions via the seed.js


https://medium.com/@farmaan30327/implement-web-sockets-with-nextjs-and-api-routes-6a14916e6c1a