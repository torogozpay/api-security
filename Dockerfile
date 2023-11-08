#### Base ####
FROM node:18-alpine as base

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN apk update &&\
  apk upgrade --no-cache &&\
  apk add --no-cache git &&\
  yarn

# app port
EXPOSE 3030

CMD ["npm", "start"]
