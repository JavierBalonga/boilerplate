<div style="display: flex; justify-content: center; align-items: center;">
  <a href="https://www.typescriptlang.org/" target="blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" height="32" alt="TypeScript Logo" style="margin: 0 8px;">
    <img src="https://expressjs.com/images/favicon.png" height="32" alt="Express Logo" style="margin: 0 8px;">
    <img src="https://www.prisma.io/images/favicon-32x32.png" height="32" alt="Prisma Logo" style="margin: 0 8px;">
    <img src="https://www.postgresql.org/favicon.ico" height="32" alt="Postgres Logo" style="margin: 0 8px;">
  </a>
</div>

# {{nombre_del_proyecto}}-API

{{descripcion_del_proyecto}}

## ¿Como Empezar?

- Primero tendran que generar una base de datos postgres
- Luego deberan crear el archivo `.env` baseandose en el archivo [.env.example](./.env.example), y cambiar todas las variables que crean necesarias, pero lo mas importante es cambiar la variable `DATABASE_URL` con la url de la base de datos que acaban de crear
- Y por ultimo es correr los siguientes comandos:

```shell
npm install
npm run dev
```

---

## Scripts:

| Script                          | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| `npm run dev`                   | Corre migraciones y levanta el servidor en modo desarrollo |
| `npm run build`                 | Traspila el codigo a Javascript                            |
| `npm run start`                 | Levanta el servidor una vez traspilado                     |
| `npm run prisma:generate`       | Genera el Cliente de Prisma                                |
| `npm run prisma:reset`          | Resetea la base de datos                                   |
| `npm run prisma:migrate:dev`    | Corre migraciones en modo desarrollo                       |
| `npm run prisma:migrate:prod`   | Corre migraciones en modo productivo                       |
| `npm run prisma:migrate:status` | Da un reporte del estado de las migraciones                |
| `npm run prisma:seed`           | Precarga la base de datos                                  |

---
