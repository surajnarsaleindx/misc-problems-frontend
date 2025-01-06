---
sidebar_position: 4
---

# Dockerfile Overview

This document explains the Dockerfile used in our project. Our Dockerfile is divided into two stages: the Build Stage and the Production Stage.

## Build Stage

### Base Image

- `FROM node:18.14.0-slim AS build`: We use a slim version of the Node.js 18.14.0 image for the build stage.

### Working Directory

- `WORKDIR /app`: Sets the working directory in the Docker image to `/app`.

### Copying Files

- `COPY package.json yarn.lock ./`: Copies `package.json` and `yarn.lock` to the Docker image.
- Ensures that we use the exact versions of dependencies specified in `yarn.lock`.

### Installing Dependencies

- `RUN yarn install --frozen-lockfile`: Installs the project dependencies.

### Building the App

- `COPY . .`: Copies the rest of the project files to the Docker image.
- `RUN yarn build`: Builds the application.

## Production Stage

### Base Image

- `FROM nginx:alpine`: Uses the Alpine version of the Nginx image for the production stage.

### Working Directory

- `WORKDIR /usr/share/nginx/html`: Sets the working directory for Nginx to serve static files.

### Preparing for Production

- `RUN rm -rf ./*`: Clears the working directory.
- `COPY --from=build /app/dist .`: Copies the built application from the build stage to the Nginx directory.
- `COPY nginx.conf /etc/nginx/conf.d/default.conf`: Copies the Nginx configuration file.

### Exposing Port and Starting Nginx

- `EXPOSE 80`: Exposes port 80.
- `ENTRYPOINT ["nginx", "-g", "daemon off;"]`: Starts Nginx with the specified command.

## Conclusion

This Dockerfile is designed to create a lightweight, efficient production build of our application. The multi-stage build process ensures that only the necessary files are included in the final image, reducing size and improving security.
