FROM node:lts-buster-slim

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app

RUN npm ci --only=production

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]