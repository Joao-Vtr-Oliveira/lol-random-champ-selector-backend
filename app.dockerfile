FROM node:20.3.0-alpine3.18
WORKDIR /app
ENV MONGODB=meu-mongodb
EXPOSE 3000
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "start-dev" ]