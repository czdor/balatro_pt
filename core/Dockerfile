FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

RUN pnpm i

COPY . .

RUN pnpm tsc

# Production stage
FROM node:20-alpine

WORKDIR /app

# copy only the necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install

EXPOSE 8000

CMD ["node", "dist/src/index.js"]