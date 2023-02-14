FROM node:16-alpine

WORKDIR /qiskit.org

COPY . .

RUN npm ci
RUN npm run generate

RUN cp -R .output/public/. /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

