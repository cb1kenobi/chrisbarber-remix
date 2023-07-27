FROM node:16-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build
ENV NODE_ENV production
CMD [ "npm", "start" ]
