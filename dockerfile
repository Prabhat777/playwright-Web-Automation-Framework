FROM mcr.microsoft.com/playwright:v1.58.2-noble

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY playwright.config.js ./
COPY pages ./pages
COPY tests ./tests
COPY utils ./utils

ENV CI=true

CMD ["npx", "playwright", "test"]