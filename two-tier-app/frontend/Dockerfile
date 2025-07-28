FROM node:18-alpine

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install --omit=dev

COPY frontend/src ./src
COPY shared ../shared
COPY config ../config

ENV NODE_ENV=production
ENV PORT=3000
ENV BACKEND_URL=http://backend:8080
EXPOSE 3000

CMD ["node", "src/server.js"]
