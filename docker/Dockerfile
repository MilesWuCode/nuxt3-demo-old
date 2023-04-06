FROM node:18-alpine AS builder

ARG ENV

WORKDIR /app

COPY . .

COPY .env.${ENV} .env

RUN yarn install

RUN yarn build

FROM keymetrics/pm2:18-alpine

WORKDIR /app

COPY --from=builder /app/.output /app/.output

COPY ./ecosystem.config.js /app

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start", "/app/ecosystem.config.js"]
