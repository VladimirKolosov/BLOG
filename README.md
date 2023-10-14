Области хранения данных:

-   База данных на JSON server
-   BFF
-   redux store

Cущности приложения:

-   Пользователи: БД (список пользователей), BFF(сессия текущего), store(отображенеи в браузере)

-   Роль пользователя: БД (спислк ролей), BFF (сессия пользователя с ролью), store
    (использование на клиенте)

-   Статья: БД(список статей), store (для отображения в брауезере)

-   Комментарии: БД(список комментариев), store (отображение в браузере)

Таблицы БД:

-   Пользователи - users: id, login, password, registered_at, role_id

-   Роли - roles: id , name

-   Cтатьи - posts: id, title, image_url, content, published_at

-   Комментарии - comments: id, author_id, post_id, content

Cхема состояния на BFF:

-   cессия текущего пользователя: login, password, role

Cхема для redux store (на клиенте):

-   user: id , login , roleId

-   posts: массив post: id , title, imageUrl, publishedAt, commentsCount

-   post: id , title, imageUrl, content, publishedAt, comments: массив comment: id, author, content, publishedAt

-   users: массив user: id, login , registeredAt, role
