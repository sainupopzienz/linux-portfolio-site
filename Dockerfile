# =========================
# Build Stage
# =========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY tailwind.config.js postcss.config.js eslint.config.js ./
COPY index.html ./
COPY src ./src

RUN npm install
RUN npm run build

# =========================
# Production Stage
# =========================
FROM nginx:alpine AS production

# Copy build files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

