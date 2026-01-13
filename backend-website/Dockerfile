FROM node:20-slim
RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install

RUN npx prisma generate

COPY . .

RUN npx tsc --outDir dist

EXPOSE 3000
CMD ["npm", "run", "start:prod"]