# Utilisez l'image officielle Node.js pour la création du build
FROM node:14 AS build

# Créez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json depuis la racine du dossier ada-front
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code source
COPY . .

# Construisez l'application React
# RUN npm run build

# Utilisez une image légère pour servir le contenu statique
# FROM nginx:alpine

# # Copiez le build de l'application React dans le dossier de travail de Nginx
# COPY --from=build /app/build /usr/share/nginx/html

# Exposez le port 80
EXPOSE 3000

# Commande pour démarrer Nginx
CMD npm start
