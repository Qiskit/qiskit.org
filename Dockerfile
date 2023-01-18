FROM node:16-alpine
WORKDIR /qiskit.org

COPY package*.json ./
RUN npm ci

COPY app app/
COPY assets assets/
COPY constants constants/
COPY content content/
COPY deploy deploy/
COPY hooks hooks/
COPY layouts layouts/
COPY mixins mixins/
COPY pages pages/
COPY plugins plugins/
COPY static static/
COPY store store
COPY types types/
COPY .eslintrc.js jest.config.js jest.setup.js \
     nuxt.config.ts stylelint.config.js tsconfig.json \
     ./
COPY tests tests/
COPY components components/
RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
