# Commandes - Exercice 1

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
```

## Accéder à l'application
Ouvrir http://localhost:8080 dans un navigateur.

## Arrêter et supprimer la stack
```bash
docker compose down
```

## Arrêter et supprimer avec les images
```bash
docker compose down --rmi all
```
