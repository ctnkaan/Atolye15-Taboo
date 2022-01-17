FROM node

WORKDIR /src

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]