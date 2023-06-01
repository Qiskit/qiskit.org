# This Dockerfile is used to preview the docs in pull requests via GitHub Actions.
#
# To test it out locally:
#
#   1. ❯ docker build -t qiskit-org-preview .
#   2. ❯ docker run --rm -p 3000:3000 -t qiskit-org-preview
#   3. Open up localhost:3000

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
