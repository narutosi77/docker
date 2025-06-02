# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de manifiesto de dependencias primero para aprovechar el cache de Docker
COPY package*.json ./

# Instala las dependencias
# Las dependencias de desarrollo (devDependencies) son necesarias para que las pruebas unitarias puedan ejecutarse en el contenedor
RUN npm install --production=false

# Copia los archivos de nuestra aplicación al directorio de trabajo
COPY app.js .
# Copia el archivo de pruebas también
COPY app.test.js .

EXPOSE 3000

CMD ["node", "app.js"]