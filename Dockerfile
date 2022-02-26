FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD . .

EXPOSE 443

EXPOSE 51234

RUN npm run build

CMD ["npm", "start"]