FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]

# Build -- docker build .
# Build with tag -- docker build -t noi/visits .

# -- create containers -- these will not work because they are not connected --
# docker run redis -- leave this running on one window -- create redis container
# docker run noi/visits -- open a new window -- create the a docker container

# --- use docker compose tool to map redis and node together ---