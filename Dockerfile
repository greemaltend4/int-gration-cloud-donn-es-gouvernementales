FROM node:16

# Création du répertoire de l'application
WORKDIR /usr/src/app

# Copie les fichiers de package et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie le reste de l'application
COPY . .

# Exposition du port
EXPOSE 5000

# Commande pour démarrer l'application
CMD [ "node", "server.js" ]