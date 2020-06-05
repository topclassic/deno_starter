FROM node:12.0.0

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]