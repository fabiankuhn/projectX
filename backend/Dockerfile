FROM node:18 as appbuild

WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:18

WORKDIR /app

COPY --from=appbuild /app/dist/ .
COPY --from=appbuild /app/package.json .

RUN npm install --ignore-scripts --only=prod

EXPOSE 3000

CMD ["node", "app.js"]
