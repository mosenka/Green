# WhatsApp simulator

## Demo

> https://green-6j8n-grkucqgem-mosenka.vercel.app/

### локальный запуск проекта

```bash
npm run dev
```

запускается на [http://localhost:3000](http://localhost:3000)

### Запуск ESLint

```bash
npm run lint
npm run lint:fix
```

### Запуск Тестов

(сделала несколько для примера)

```bash
npm run test
```

### запуск в режиме production

```bash
npm run build
```

### Стек

- Движок [NextJS]('https://nextjs.org/')
- Архитектурная методология для фронтенд
  проектов [Feature-Sliced Design]('https://feature-sliced.design/ru/')
- TypeScript "5.0.4"
- Scss
- [SVG sprite loader]('https://www.npmjs.com/package/svg-sprite-loader')
  и иные

### Инструкция

Реализована простая авторизация (с использованием localStorage)

При запуске открывается страница авторизации, для входа необходимо ввести
> idInstance && apiTokenInstance

- Далее отправляется запрос на получение состояния аккаунта если статус "authorized" то происходит редирект на главную
  страницу

- Для создания чата необходимо ввести номер телефона контакта (допустимо через 8 или +7)
- Для перехода в чат нужно кликнуть по контакту
- для отправки сообщения нужно кликнуть по кнопке отправки
- Возможно добавление нескольких контактов, а также отправка сообщений на разные аккауны
- также реализована возможность выти из аккауна (в header)
