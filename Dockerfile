# Build the Nuxt static files with Node.js

FROM node:16-alpine AS build

WORKDIR /qiskit.org

COPY . .

RUN npm ci
RUN npm run generate

# Serve the static files with Nginx

FROM nginx:1.23.3-alpine

COPY --from=build /qiskit.org/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
