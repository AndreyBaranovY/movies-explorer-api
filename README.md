# movies-explorer-api
Yandex Praktikum Diploma BackEnd: Поиск и сохранение интересующих фильмов
***
## Описание
Репозиторий для полноценного API проекта Movie-Finder, включающий авторизацию и регистрацию пользователей, операции с фильмами и пользователями.
***
## Запуск проекта:
**`npm run start`** — запуск сервера
**`npm run dev`** — запуск сервера с hot-reload
***
## Как найти сервер:
**IP-адрес сервера:** 84.252.131.225 **домен:** https://api.movie-finder.students.nomoredomains.rocks
***
## Как взаимодействовать с API:
`GET /users/me` - возвращает информацию о пользователе (email и имя).
`PUT /users/me` - обновляет информацию о пользователе (email и имя).
`GET /movies` - возвращает все сохранённые пользователем фильмы.
`POST /movies` - создаёт фильм с переданными в теле: country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail. 
`DELETE /movies/movieId` - удаляет сохранённый фильм по _id.
