# Front-end-Project Grupo 1 Comision 22013 Codo a Codo GO

Importante: Instalar Formik. Ejecutar el comando npm install formik --save
Url del proyecto:
https://front-end-project-grupo1.vercel.app/

Temática elegida: Aplicación tipo Tinder para adopción de mascotas.

Firestore Utilizado para el sitio web.

3 Collections:

- pets:{
  age,
  description,
  id,
  images,
  likes,
  name,
  owner,
  surName
  }

- users:{
  id,
  id_UserPets,
  name,
  pets,
  photo
  }

- users_pets:{
  id,
  match,
  peopleLiked,
  peopleUnliked,
  petsLiked,
  petsUnliked,
  }

| Componente                                                                                                                                             | Miembro              | Status     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ---------- |
| Register Component                                                                                                                                     | Agustina Scarpinelli | Completado |
| Login Component                                                                                                                                        | Agustina Scarpinelli | Completado |
| Firebase Component                                                                                                                                     | Agustina Scarpinelli | Completado |
| Router React Component                                                                                                                                 | Agustina Scarpinelli | Completado |
| React Component                                                                                                                                        | Ariel farbiaz        | Completado |
| Footer Component                                                                                                                                       | Eric Recke           | Completado |
| Home Component                                                                                                                                         | Eric Recke           | Completado |
| Language Component                                                                                                                                     | Eric Recke           | Completado |
| Template Pallette Colors                                                                                                                               | Eric Recke           | Completado |
| ThemeSettings Component (Mejoras en Dark Mode, con fixes, Language y Background)                                                                       | Eric Recke           | Completado |
| Base Component: Home, Pets, People, News, Contacts                                                                                                     | Eric Recke           | Completado |
| Fix Bootstrap Bug                                                                                                                                      | Eric Recke           | Completado |
| Arreglos visuales de diseño y template                                                                                                                 | Eric Recke           | Completado |
| Perfil Component                                                                                                                                       | Eric Recke           | Completado |
| Perfil-MyPets Component                                                                                                                                | Eric Recke           | Completado |
| Home Component                                                                                                                                         | --                   | Pendiente  |
| Pets Component                                                                                                                                         | Eric Recke           | Completado |
| People Component                                                                                                                                       | --                   | Pendiente  |
| News Component                                                                                                                                         | --                   | Pendiente  |
| Contact Component                                                                                                                                      | Daniel de Acha       | Completado |
| ReStructure Components(Perfil-MyPets, pasarlos a variables reutilizables (los datos que se obtienen en firebase para reutilizar en otros componentes)) | Eric Recke           | Pendiente  |
| Perfil- Add Pet (por ahora guarda 3 imagenes, hacerlo luego dinamico en un array) Component                                                            | Eric Recke           | Completado |
| Firebase Component Mejoras, falta separarlo en componentes esta en el perfil de components                                                             | Eric Recke           | Completado |
| Fix names en Github                                                                                                                                    | Eric Recke           | Completado |
| Colections Firebase, Pets,Users,Users_Pets                                                                                                             | Eric Recke           | Completado |
| Pets Component -> Obtener Mascotas de Firebase distintas al user                                                                                       | Eric Recke           | Completado |
| Pets Component -> Dar Like o Dislike, guardar en pets y user_Pets                                                                                      | Eric Recke           | Completado |
| Pets Component -> Filtrar tambien los que ya di like o dislike                                                                                         | Eric Recke           | Completado |
| Perfil Component -> Apartado de Me Gusta (Mis Mascotas)                                                                                                |                      | Pendiente  |
| Perfil Component -> Apartado de Me Gusta (Personas)                                                                                                    |                      | Pendiente  |
| Perfil Component -> Generar el Match                                                                                                                   |                      | Pendiente  |
| Chat Component -> Crear un Chat para entablar conversación con el match                                                                                |                      | Pendiente  |
