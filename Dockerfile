FROM node:14.5.0-stretch-slim

LABEL Name=boilerplate-node-koa-postgres-dev Version=1.0.0

RUN mkdir /app && chown node:node /app

USER node

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app/node_app

CMD ["yarn", "dev"]
