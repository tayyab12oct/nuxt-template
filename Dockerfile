###############################################################################
# Node JS
###############################################################################

FROM splintnet/alpine-node as nodejs
LABEL maintainer="j.imping@5-anker.com"

RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libjpeg jpeg-dev libjpeg-turbo-dev libpng-dev nasm gifsicle

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--hostname", "0", "--port", "80"]
