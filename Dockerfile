FROM node:8-alpine

WORKDIR /opt/datamanager

RUN apk --no-cache add gcc g++ bash musl-dev make python

COPY package.json ./package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
