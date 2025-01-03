# Makefile

.PHONY: watch down

COMPOSE_FILE := ./docker-compose.yml

build:
	sudo docker compose -f $(COMPOSE_FILE) up --build --force-recreate
watch:
	sudo docker compose -f $(COMPOSE_FILE) up --watch --force-recreate
down:
	sudo docker compose -f $(COMPOSE_FILE) down