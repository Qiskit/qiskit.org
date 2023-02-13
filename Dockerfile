FROM node:16-alpine
WORKDIR /qiskit.org

COPY package*.json ./
RUN npm ci

COPY app app/
COPY assets assets/
COPY components components/
COPY constants constants/
COPY content content/
COPY deploy deploy/
COPY hooks hooks/
COPY layouts layouts/
COPY mixins mixins/
COPY pages pages/
COPY public public/
COPY static static/
COPY tests tests/
COPY types types/
COPY .npmrc nuxt.config.ts tsconfig.json ./
RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
