FROM node:8-alpine

USER node 

WORKDIR /opt/app
COPY --chown=node:node . /opt/app
RUN apk add --no-cache --virtual gyp \
  python \
  make \
  g++ \
  && npm install \
  && apk del gyp
EXPOSE 8481

CMD ["npm", "start"]

