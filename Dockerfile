FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM node:18-alpine as prod
WORKDIR /app
COPY package.json .
RUN npm i --save-prod
COPY --from=build /app/dist /app/dist
EXPOSE 4173
CMD ["npm", "run", "serve"]
