FROM node:10-alpine
EXPOSE 3000
WORKDIR /app
COPY ./package.json .
RUN npm install --production

COPY ./src ./src
COPY ./tsconfig.json .
RUN npm run build
RUN ls

RUN rm -rf src
RUN ls

CMD ["node", "./dist/index.js"]





