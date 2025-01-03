FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

RUN pnpm i

COPY . .

RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

RUN npm install -g pnpm

WORKDIR /app

COPY --from=build /app/dist ./dist

# # copy only the necessary files from the build stage
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm i --prod

EXPOSE 8000

CMD ["node", "./dist/src/index.js"]