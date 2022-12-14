FROM node:14-alpine

WORKDIR /app

COPY package.json .
RUN npm install --silent

COPY . .
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000
CMD [ "npx", "serve", "build" ]
