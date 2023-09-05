FROM --platform=linux/amd64 node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5678

CMD [ "npm", "start" ]
