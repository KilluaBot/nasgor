FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
WORKDIR /root/ILHAM
COPY . .
RUN npm install
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY pheqiah2qgpu45w
ENV PM2_SECRET_KEY xk8zhybf7ns8ybz

RUN pwd
RUN ls

EXPOSE 5000

CMD ["pm2-runtime", "index.js"]
