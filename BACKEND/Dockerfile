FROM node:18-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

#RUN npm ci --silent
RUN npm install --quiet

COPY . ./
