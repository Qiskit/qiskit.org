FROM mhart/alpine-node:14
WORKDIR /qiskit.org

COPY package.json .
RUN npm install

COPY app app/
COPY assets assets/
COPY constants constants/
COPY content content/
COPY deploy deploy/
COPY hooks hooks/
COPY layouts layouts/
COPY mixins mixins/
COPY new-content new-content/
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
RUN npm run build

EXPOSE 3000
ENV HOST=0.0.0.0
ENV NODE_ENV=development
CMD [ "npx", "nuxt", "start" ]