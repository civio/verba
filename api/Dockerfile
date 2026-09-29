FROM node:22-alpine AS base

WORKDIR /api

COPY package.json package-lock.json ./
RUN npm install


FROM base AS builder

WORKDIR /api

COPY . .

RUN npm prune --omit=dev


FROM node:22-alpine

WORKDIR /api

COPY --from=builder /api/package.json .
COPY --from=builder /api/src ./src
COPY --from=builder /api/node_modules ./node_modules

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG PORT=80
ENV PORT=${PORT}

ARG ELASTIC_API_URL=https://api-verba-volant.civio.es
ENV ELASTIC_API_URL=${ELASTIC_API_URL}

EXPOSE ${PORT}

CMD [ "node", "src/index.js" ]
