FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/src ./src
COPY shared ../shared
COPY config ../config

ENV NODE_ENV=production
ENV BACKEND_PORT=8080
EXPOSE 8080

CMD ["node", "src/server.js"]
