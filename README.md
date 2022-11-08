## coto-admin-dashboard

### Entorno de desarrollo local

```
docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo

```

### Requerimientos Funcionales

#### Sistema

- El sistema debe de mostrar un dashboard con las siguientes secciones:
  - Usuarios
  - Amenidades
  - Cuotas de mantenimiento
  - Mapa del condominio (Estado de las propiedades)
    - habitada al corriente
    - habitada con deuda
    - vacía (ya se termino de construir, pero no se ha vendido)
    - en construcción

#### Autenticación

- El usuario debe poder iniciar sesión con su cuenta de Google.
- El usuario debe poder cerrar sesión.

#### Roles

- El sistema debe proporcionar un rol de administrador.
- El sistema debe proporcionar un rol de usuario.

#### Usuarios

- Como administrador quiero poder ver el listado de usuarios registrados en la plataforma.
- Como administrador quiero poder registrar un nuevo usuario.
- Como administrador quiero poder editar un usuario.
- Como administrador quiero poder eliminar un usuario.
- Como administrador quiero poder ver los detalles de un usuario.
- Como administrador quiero poder llevar el control de vehículos de los usuarios.

#### Multas

- Como administrador quiero poder ver el listado de multas registradas en la plataforma.
- Como administrador quiero poder registrar una nueva multa.
- Como administrador quiero poder editar una multa.
- Como administrador quiero poder eliminar una multa.
- Como administrador quiero poder ver los detalles de una multa.

- Como administrador quiero poder agregar una multa a un usuario.
- Como administrador quiero poder eliminar una multa de un usuario.

#### Amenidades

- Como administrador quiero poder ver el listado de amenidades registradas en la plataforma.
- Como administrador quiero poder registrar una nueva amenidad.
- Como administrador quiero poder editar una amenidad.
- Como administrador quiero poder eliminar una amenidad.
- Como administrador quiero poder ver los detalles de una amenidad.

#### Cuotas de Mantenimiento

- Como administrador quiero poder ver el listado de cuotas de mantenimiento registradas en la plataforma.
- Como administrador quiero poder registrar una nueva cuota de mantenimiento.
- Como administrador quiero poder editar una cuota de mantenimiento.
- Como administrador quiero poder eliminar una cuota de mantenimiento.
- Como administrador quiero poder ver los detalles de una cuota de mantenimiento.

#### Servicios de Usuario

- Como administrador quiero poder registrar servicios a un usuario de acuerdo a su estado con respecto a las cuotas de mantenimiento. (ejemplo: gimnasio, piscina, etc.)

## NEXTJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
