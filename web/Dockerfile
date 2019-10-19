FROM node:alpine AS base

WORKDIR /web

COPY package.json package-lock.json ./
RUN npm install


FROM base AS builder

WORKDIR /web

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG VUE_APP_API_URL=https://verba-volant.civio.es/api/
ENV VUE_APP_API_URL=${VUE_APP_API_URL}

RUN npm run lint && npm run build


FROM nginx:alpine

COPY --from=builder /web/dist /usr/share/nginx/html
