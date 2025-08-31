FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache nginx nginx-mod-http-headers-more
COPY --from=build /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD sh -c "node node_modules/next/dist/bin/next start -p 3000 & nginx -g 'daemon off;'" 