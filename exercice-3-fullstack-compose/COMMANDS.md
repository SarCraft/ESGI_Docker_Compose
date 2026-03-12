# Commandes - Exercice 3

## Créer le fichier .env à partir de l'exemple
```bash
cp .env.example .env
```

## Construire et lancer la stack
```bash
docker compose up --build -d
```

## Vérifier les services
```bash
docker compose ps
```

## Consulter les logs
```bash
docker compose logs web
docker compose logs api
docker compose logs db
```

## Tester l'application
```bash
# Interface web
curl http://localhost:8080

# API via le proxy Nginx
curl http://localhost:8080/api/health
curl http://localhost:8080/api/message
```

## Vérifier l'isolation réseau (api joignable depuis web, db non joignable depuis web)
```bash
docker compose exec web ping api    # doit répondre
docker compose exec web ping db     # ne doit pas répondre
docker compose exec api ping db     # doit répondre
```

## Arrêter et supprimer la stack (sans supprimer le volume)
```bash
docker compose down
```

## Arrêter et supprimer la stack avec le volume
```bash
docker compose down -v
```

## Arrêter et supprimer la stack avec les images et le volume
```bash
docker compose down -v --rmi all
```
