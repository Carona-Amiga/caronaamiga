FROM node:16-alpine

RUN mkdir /code
WORKDIR /code

COPY . .

#RUN npm install --global node-gyp

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install --force

ENV VITE_API_URL 172.18.0.3

EXPOSE 8000

CMD npm run dev