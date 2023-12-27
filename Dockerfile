# Build

FROM node:18-alpine AS build

ARG SITE_URL
ENV SITE_URL=$SITE_URL

ARG AIRTABLE_ACCESS_TOKEN
ENV AIRTABLE_ACCESS_TOKEN=$AIRTABLE_ACCESS_TOKEN

WORKDIR /qiskit.org

COPY . .

RUN npm ci
RUN npm run generate

# Serve
FROM nginx:alpine AS serve

WORKDIR /app

COPY --from=build /qiskit.org/.output/public /usr/share/nginx/html/
COPY ./nginx.preview.conf /etc/nginx/nginx.conf

EXPOSE 80
