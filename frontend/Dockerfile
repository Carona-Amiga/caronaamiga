FROM node:16-alpine as build-step-frontend

RUN mkdir /code
WORKDIR /code

COPY . .

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install --force

RUN npm run build

FROM nginx

COPY --from=build-step-frontend /code/dist /var/www
COPY --from=build-step-frontend /code/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]