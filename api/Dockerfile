FROM node:alpine AS base

WORKDIR /api

COPY package.json package-lock.json ./
RUN npm install


FROM base AS builder

WORKDIR /api

COPY . .

RUN npm run lint && npm run build

RUN npm prune --production


FROM node:alpine

WORKDIR /api

COPY --from=builder /api/dist .
COPY --from=builder /api/node_modules ./node_modules

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG PORT=80
ENV PORT=${PORT}

ARG ELASTIC_API_URL=https://api-verba-volant.civio.es
ENV ELASTIC_API_URL=${ELASTIC_API_URL}

EXPOSE ${PORT}

CMD [ "node", "index.js" ]
