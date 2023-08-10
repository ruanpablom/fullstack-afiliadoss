FROM node:lts-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
COPY .env /app/
RUN npm run build

# Step 2: Set up the production environment
FROM nginx:stable-alpine
COPY  --from=build /app/dist /usr/share/nginx/html
COPY  nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]