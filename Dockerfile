FROM node:16

RUN apt-get update

RUN npm i -g typescript nodemon ts-node

WORKDIR /app

COPY . .

ENTRYPOINT nodemon src/index.ts
