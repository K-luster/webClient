FROM node:16.14.0 AS build

ARG PORT=3000

WORKDIR /app

COPY . ./

RUN npm install

RUN npm i -D @sveltejs/adapter-node

RUN npm run build

RUN npm ci --omit dev

EXPOSE ${PORT}

CMD node build
