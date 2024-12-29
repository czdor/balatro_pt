# Makefile

.PHONY: watch down

COMPOSE_FILE := ./docker-compose.yml

build:
	sudo docker compose -f $(COMPOSE_FILE) up --build
watch:
	sudo docker compose -f $(COMPOSE_FILE) up --watch
down:
	sudo docker compose -f $(COMPOSE_FILE) down