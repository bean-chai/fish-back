FROM node:14.4.0-slim

ENV LANG en_US.utf8
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    npm config set registry https://registry.npmmirror.com

COPY . /app
WORKDIR /app

CMD nohup sh -c "npm i && node ."
