FROM node:18 as appbuild

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN npm run swagger-autogen prod

FROM node:18

WORKDIR /app

COPY --from=appbuild /app/dist/ .
COPY --from=appbuild /app/package.json .

RUN npm install --ignore-scripts --only=prod
COPY swagger_output.json .

EXPOSE 3000

CMD ["node", "app.js"]
