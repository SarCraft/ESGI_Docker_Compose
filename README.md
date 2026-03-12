# TP Docker - Docker Compose

Le but est de vous faire pratiquer, pas a pas, la definition, le lancement et la gestion d'applications multi-conteneurs avec Docker Compose.

## Objectifs pedagogiques

A la fin du TP, vous devez etre capable de:
- ecrire un fichier Compose lisible et valide
- declarer plusieurs services dans un meme fichier
- utiliser `image`, `build`, `ports`, `environment` et `depends_on`
- injecter des variables d'environnement avec `environment` et `env_file`
- declarer un volume persistant dans Compose
- utiliser des reseaux Compose pour isoler les communications

## Organisation du TP

Le TP est compose de 3 exercices progressifs:

1. `exercice-1-api-single-service`
- Premier service lance avec Docker Compose
- Focus: structure minimale, `services`, `image`, `ports`, commandes Compose de base

2. `exercice-2-api-db-config`
- API et base de donnees avec configuration externalisee
- Focus: multi-services, `environment`, `env_file`, volume persistant, `depends_on`

3. `exercice-3-fullstack-compose`
- Mini architecture front + api + base de donnees avec reseaux dedies
- Focus: `build` + `image`, reseaux, separation frontend/backend, cycle de vie complet

## Ce que vous devez rendre

Dans chaque dossier d'exercice, vous devez fournir:
- `README.md` (consigne / contexte / criteres, sans commandes)
- `compose.yaml`
- `COMMANDS.md` (toutes les commandes executees pour realiser l'exercice)

Le format attendu est precise dans [CONTRIBUTING.md](./CONTRIBUTING.md).

## Methode de travail conseillee

- Lire d'abord la consigne de l'exercice.
- Ecrire une premiere version minimale du fichier Compose.
- Verifier les services avec `docker compose ps` et `docker compose logs`.
- Tester le bon fonctionnement avant d'ajouter configuration, volumes et reseaux.
- Documenter vos commandes dans `COMMANDS.md`.

## Evaluation

Vous serez evalues sur:
- la conformite a la consigne
- la qualite du fichier Compose
- la bonne utilisation des services, variables, volumes et reseaux
- la capacite a lancer une architecture fonctionnelle
- la clarte du rendu

Bon TP.
