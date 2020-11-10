FROM node:14 as builder
WORKDIR /usr/app
COPY package.json package-lock.json /usr/app/
RUN npm i
COPY src src/
COPY public public/
RUN npm run build

FROM nginx:stable
COPY --from=builder /usr/app/build /usr/share/nginx/client
COPY docker.nginx.conf /etc/nginx/conf.d/client.conf