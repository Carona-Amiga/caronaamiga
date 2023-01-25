FROM node:16-alpine as build-step-frontend

WORKDIR /code

COPY package.json package-lock.json ./

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install --force

COPY . .

# COPY ./src src

# COPY ./public public

# COPY ./index.html .

# COPY ./nginx.conf .

# COPY ./vite.config.js .

# COPY ./.env .

RUN npm run build

FROM nginx as build-dedicated-server

COPY --from=build-step-frontend /code/dist /var/www
COPY --from=build-step-frontend /code/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]