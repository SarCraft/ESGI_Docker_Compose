# Commandes - Exercice 2

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
docker compose logs api
docker compose logs db
```

## Tester l'API
```bash
curl http://localhost:3000
curl http://localhost:3000/health
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
