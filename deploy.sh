#!/usr/bin/env bash
touch .env
docker-compose down
docker system prune -f
docker rmi $(docker images -a -q)
docker-compose up -d --build