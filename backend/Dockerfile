FROM node:lts-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267 AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --omit-dev
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:lts-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
#COPY --chown=node:node . .
#RUN npm install
#RUN npm run build
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app/dist
USER node
EXPOSE 3000
CMD ["dumb-init","node", "dist/main"]