FROM node:18-alpine

WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci --only=production

COPY frontend/src ./src
COPY shared ../shared
COPY config ../config

ENV NODE_ENV=production
ENV PORT=3000
ENV BACKEND_URL="http://backend.${COPILOT_SERVICE_DISCOVERY_ENDPOINT}:8080"

EXPOSE 3000

CMD ["node", "src/server.js"]
