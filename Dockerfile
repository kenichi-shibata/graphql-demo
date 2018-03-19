FROM node:8-alpine

RUN apk add --no-cache --virtual gyp \
  python \
  make \
  g++ \
  && npm install \
  && apk del gyp

USER node 

WORKDIR /opt/app
COPY --chown=node:node . /opt/app
EXPOSE 8481

CMD ["npm", "start"]

