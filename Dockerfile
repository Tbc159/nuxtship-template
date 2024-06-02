# Usa l'immagine ufficiale di Node.js
FROM node:18

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il package.json e il package-lock.json (se esiste)
COPY package*.json ./
COPY * ./app

# Installa le dipendenze
RUN npm install

# Copia il resto del codice sorgente
COPY . .

# Esponi la porta su cui gira l'applicazione
EXPOSE 3000

# Comando di default per lanciare l'applicazione in sviluppo
CMD ["npm", "run", "build"]
