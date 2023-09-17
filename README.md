# ProjectX

## Development
To prepare the development:
1. In root: copy `.env-template` to `.env` and fill in a password
2. In the backend: copy `.env.local-template` to `.env-local` and fill in the same password

### Docker Compose
Execute the following in the project root
1. Start docker compose `$ docker compose up -d`
2. Visit [localhost:3000/swagger](http://localhost:3000/swagger)

### Local Development
1. Start the db with `$ docker-compose up -d mongodb`
2. Start backend with `$ cd backend && npm run dev`
3. Visit [localhost:3000/swagger](http://localhost:3000/swagger)
