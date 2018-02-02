FROM node:8-alpine

WORKDIR /opt/app
COPY . /opt/app
RUN apk add --no-cache --virtual gyp \
  python \
  make \
  g++ \
  && npm install \
  && apk del gyp
EXPOSE 8481

CMD ["npm", "start"]

