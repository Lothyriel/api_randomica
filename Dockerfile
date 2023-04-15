FROM node:lts-alpine AS packages

ADD package-lock.json /app/package-lock.json
ADD package.json /app/package.json

WORKDIR /app

# Installing packages
RUN npm ci

# Staging Image
FROM packages

ADD . /app

# Building TypeScript files
RUN npm run build

CMD ['node', './dist']