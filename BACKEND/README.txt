** API no DOCKER **
* 1. criar uma pasta chamada: db
* 2. criar uma pasta chamada: mysql-dumps, colocar todos os .sql dentro para que seja importado automaticamente
* 3. criar o .env, exemplo: 
MYSQL_PASSWORD=
MYSQL_LOCAL_PORT=3306
MYSQL_DOCKER_PORT=3306
NODE_LOCAL_PORT=8800
MYSQL_DATABASE=empresa_db
MYSQL_USERNAME=root

* 4. docker-compose.yml:
version: "3.8"

services:
    mysqldb:
        container_name: bancoEmpresa-mysql
        image: 'mysql/mysql-server:8.0'
        restart: unless-stopped
        env_file: ./.env
        ports:
            - $MYSQL_LOCAL_PORT:$MYSQL_DOCKER_PORT
        environment:
            MYSQL_ROOT_PASSWORD: $MYSQL_ROOT_PASSWORD
            MYSQL_ROOT_HOST: "%"
            MYSQL_DATABASE: $MYSQL_DATABASE
            MYSQL_USER: $MYSQL_USERNAME
            MYSQL_PASSWORD: $MYSQL_PASSWORD
            MYSQL_ALLOW_EMPTY_PASSWORD: 1
        volumes:
            - ./mysql-dumps:/docker-entrypoint-initdb.d                
            - './db:/var/lib/mysql'
        healthcheck:
            test: ["CMD", "mysqladmin", "ping", "-p${DB_PASSWORD}"]
            retries: 3
            timeout: 5s        
    app:
        depends_on:
            mysqldb:
                condition: service_healthy
        build:
            context: ./
            dockerfile: Dockerfile        
        container_name: backend-api
        restart: unless-stopped
        env_file: ./.env        
        ports:
            - $NODE_LOCAL_PORT:$NODE_LOCAL_PORT
        stdin_open: true
        tty: true        
        command: ['npm', 'start']
        
* 5. Dockerfile:
FROM node:20-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

#RUN npm ci --silent
RUN npm install --quiet

COPY . ./

* 6. comando: docker-compose build && docker-compose up

* 7. lembrar de alterar a senha do root... kk
