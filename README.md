# Garden Bogoridi - Ресторант в Бургас

Красив и модерен уебсайт за ресторант Garden Bogoridi, построен с React, Next.js, Tailwind CSS, shadcn/ui и Aceternity UI компоненти.

## 🚀 Функционалности

- **Next.js 15** - Най-новият React framework с App Router
- **TypeScript** - Тип-сигурна разработка
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Красиви, достъпни компоненти
- **Aceternity UI** - Зашеметяващи анимирани компоненти
- **Framer Motion** - Плавни анимации и преходи
- **Responsive Design** - Mobile-first подход
- **Български език** - Пълна локализация

## 🛠️ Технологии

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Aceternity UI
- **Animations**: Framer Motion
- **Package Manager**: npm

## 📦 Инсталация

1. Клонирайте репозиторията:

```bash
git clone <your-repo-url>
cd garden-app
```

2. Инсталирайте зависимостите:

```bash
npm install
```

3. Стартирайте development сървъра:

```bash
npm run dev
```

4. Отворете [http://localhost:3000](http://localhost:3000) в браузъра.

## 🎨 Компоненти

### Основни компоненти

- **Navbar** - Навигационна лента с лого и меню
- **Hero** - Главна секция с анимиран текст и CTA бутони
- **MenuSection** - Показване на менюто с категории
- **AboutSection** - Информация за ресторанта
- **Footer** - Долна част с контакти и линкове

### shadcn/ui компоненти

- **Button** - Универсален бутон компонент с множество варианти
- **Card** - Контейнер компонент за организация на съдържанието
- **Input** - Форма компонент за въвеждане
- **Label** - Достъпен label компонент

### Aceternity UI компоненти

- **Sparkles** - Анимиран sparkle ефект overlay
- **TextGenerateEffect** - Typewriter-style текст анимация
- **BackgroundGradient** - Анимиран градиентен фон

## 📁 Структура на проекта

```
garden-app/
├── app/                    # Next.js App Router
│   ├── globals.css        # Глобални стилове
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Главна страница
├── components/            # React компоненти
│   ├── ui/               # shadcn/ui компоненти
│   ├── aceternity/       # Aceternity UI компоненти
│   ├── navbar.tsx        # Навигационна лента
│   ├── hero.tsx          # Главна секция
│   ├── menu-section.tsx  # Секция с меню
│   ├── about-section.tsx # Секция "За нас"
│   ├── footer.tsx        # Долна част
│   └── index.ts          # Експорт на компонентите
├── lib/                  # Utility функции
└── public/              # Статични файлове
```

## 🎯 Примери за използване

### Използване на основните компоненти

```tsx
import { Navbar, Hero, MenuSection, AboutSection, Footer } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
```

### Използване на shadcn/ui компоненти

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Моята карта</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Кликни ме</Button>
      </CardContent>
    </Card>
  );
}
```

### Използване на Aceternity UI компоненти

```tsx
import {
  Sparkles,
  TextGenerateEffect,
  BackgroundGradient,
} from "@/components/aceternity";

export default function MyComponent() {
  return (
    <BackgroundGradient>
      <Sparkles>
        <TextGenerateEffect words="Здравей свят!" />
      </Sparkles>
    </BackgroundGradient>
  );
}
```

## 🎨 Персонализация

### Добавяне на нови shadcn/ui компоненти

```bash
npx shadcn@latest add <component-name>
```

### Създаване на custom Aceternity UI компоненти

1. Създайте нов файл в `components/aceternity/`
2. Използвайте Framer Motion за анимации
3. Експортирайте от `components/aceternity/index.ts`

### Стилизиране с Tailwind CSS

Проектът използва Tailwind CSS v4 с custom CSS променливи за темизиране. Можете да персонализирате цветовете, отстоянията и други design tokens в `app/globals.css`.

## 🚀 Деплойване

### Vercel (Препоръчително)

1. Качете кода в GitHub
2. Свържете репозиторията с Vercel
3. Деплойвайте автоматично

### Други платформи

Проектът може да бъде деплойнат на всяка платформа, която поддържа Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Скриптове

- `npm run dev` - Стартиране на development сървъра
- `npm run build` - Build за production
- `npm run start` - Стартиране на production сървъра
- `npm run lint` - Стартиране на ESLint

## 🤝 Принос

1. Fork-нете репозиторията
2. Създайте feature branch
3. Направете промените си
4. Добавете тестове, ако е приложимо
5. Изпратете pull request

## 📄 Лиценз

Този проект е open source и е достъпен под [MIT License](LICENSE).

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Aceternity UI](https://ui.aceternity.com/) - Анимирани компоненти
- [Framer Motion](https://www.framer.com/motion/) - Анимационна библиотека

## 🏪 За ресторанта

**Garden Bogoridi** е традиционен български ресторант, разположен в сърцето на Бургас. Специализираме се в автентична българска кухня, използвайки най-качествените сезонни продукти и традиционни рецепти, предадени от поколение на поколение.

### 📍 Локация

ул. Богориди, Бургас, България

### 🕐 Работно време

11:00 - 23:00

### 📞 Контакти

+359 888 123 456
info@gardenbogoridi.bg
