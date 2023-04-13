# Build

FROM node:18-alpine AS build

WORKDIR /qiskit.org

COPY . .

RUN npm ci
RUN npm run build

# Serve

FROM node:18-alpine

COPY --from=build /qiskit.org/.output ./.output/

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
