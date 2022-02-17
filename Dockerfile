FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD . .

RUN npm run build

CMD ["npm", "start"]