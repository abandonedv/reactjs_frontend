FROM node:16.15.1-alpine

WORKDIR /usr/src/docker-react-sample

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

#docker build -t react_image .
#docker run -d --name react_container -p 3000:3000 react_image