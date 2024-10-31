# Use the official Node.js image as the base image
FROM node:16 AS builder

# Install dependencies
RUN npm install 

# Expose the port that the application runs on
EXPOSE 3000