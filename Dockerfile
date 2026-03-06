# 多階段建構：建構階段
FROM node:20-alpine AS builder

RUN npm install -g nginx

WORKDIR /app

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 複製所有源代碼
COPY . .

# 安裝依賴
RUN npm ci

# build app for production with minification
RUN rm -rf ./dist
# 建構生產版本
RUN npm run build

RUN rm -rf ./node_modules


# 生產階段：使用 nginx 伺服靜態文件
FROM nginx:alpine

# 複製建構的文件到 nginx 目錄
COPY --from=builder /app/dist /usr/share/nginx/html

# 複製 nginx 配置
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 8324

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]
