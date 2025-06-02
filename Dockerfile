# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto de dependencias primero para aprovechar el cache de Docker
COPY package*.json ./

# Instala las dependencias
# Las dependencias de desarrollo (devDependencies) no son necesarias en producción
# pero aquí las instalaremos para que las pruebas unitarias puedan ejecutarse en el contenedor si fuera necesario
RUN npm install --production=false # Instala todas las dependencias, incluyendo devDeps para pruebas

# Copia los archivos de nuestra aplicación al directorio de trabajo
COPY app.js .
COPY app.test.js . # Copia el archivo de pruebas también

# Expone el puerto que nuestra aplicación usará
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "app.js"]