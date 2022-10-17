FROM node:14

COPY package.json .
RUN npm i -g npm
RUN npm install
COPY . .
CMD ["npm","run","start"]