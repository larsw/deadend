FROM node:latest-alpine AS build

WORKDIR "/app"
COPY package*.json /app
RUN ["npm", "install"]

FROM node:latest-alpine AS runtime
WORKDIR "/app"
COPY --from=build /app /app
COPY app.js assets views /app
ENV PORT 80
EXPOSE 80
ENTRYPOINT ["node", "start"]


