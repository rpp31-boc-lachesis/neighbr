#!/usr/bin/env bash
touch .env
docker-compose down
docker system prune -f
docker-compose up -d --build