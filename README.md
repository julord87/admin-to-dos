# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d
```

2. Crear una copia del .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el seed para crear la local DB


# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```