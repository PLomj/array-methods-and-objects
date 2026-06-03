# დავალება 1: თამაშის პერსონაჟის განახლება

## მიზანი

სტუდენტებმა გაივარჯიშონ ობიექტის property-ების შეცვლასა და ახალი property-ის დამატებაზე.

## აღწერა

მოცემულია თამაშის პერსონაჟი.

1. გაზარდეთ `level` 1-ით.
2. დაამატეთ ახალი property `isAlive: true`.
3. `health` შეამცირეთ 20-ით.
4. საბოლოოდ დაბეჭდეთ განახლებული ობიექტი.

## საწყისი კოდი

```js
const character = {
  name: "Shadow Knight",
  level: 4,
  health: 100,
  weapon: "Dark Sword"
};

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
{
  name: "Shadow Knight",
  level: 5,
  health: 80,
  weapon: "Dark Sword",
  isAlive: true
}
```

---

# დავალება 2: პერსონაჟის აღწერის გენერატორი

## მიზანი

სტუდენტებმა გამოიყენონ destructuring ობიექტიდან მონაცემების ამოსაღებად.

## აღწერა

მოცემულია ობიექტი `player`.

დაწერეთ ფუნქცია `describePlayer(player)`, რომელიც დააბრუნებს ტექსტს შემდეგი ფორმატით:

```js
"Player Neo is level 12 and uses Plasma Gun."
```

გამოიყენეთ destructuring.

## საწყისი კოდი

```js
const player = {
  username: "Neo",
  level: 12,
  weapon: "Plasma Gun",
  rank: "Diamond"
};

function describePlayer(player) {
  // შენი კოდი აქ...
}

console.log(describePlayer(player));
```

## მოსალოდნელი შედეგი

```js
"Player Neo is level 12 and uses Plasma Gun."
```

---

# დავალება 3: ინვენტარის საერთო ღირებულება

## მიზანი

სტუდენტებმა ივარჯიშონ `reduce` მეთოდზე.

## აღწერა

მოცემულია თამაშის ინვენტარი.

თითოეულ item-ს აქვს:

* `name`
* `price`
* `quantity`

დაწერეთ კოდი, რომელიც დაითვლის ინვენტარის სრულ ღირებულებას.

გამოიყენეთ `reduce`.

## საწყისი კოდი

```js
const inventory = [
  { name: "Health Potion", price: 10, quantity: 5 },
  { name: "Mana Potion", price: 15, quantity: 3 },
  { name: "Iron Sword", price: 100, quantity: 1 },
  { name: "Shield", price: 80, quantity: 1 }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
275
```

---

# დავალება 4: იშვიათი ნივთების სია

## მიზანი

სტუდენტებმა გამოიყენონ `filter` და `map` ერთად.

## აღწერა

მოცემულია თამაშის item-ების მასივი.

იპოვეთ მხოლოდ ის item-ები, რომელთა `rarity` არის `"rare"` ან `"legendary"`.

შემდეგ დააბრუნეთ მხოლოდ მათი სახელები.

გამოიყენეთ method chaining.

## საწყისი კოდი

```js
const items = [
  { name: "Wooden Stick", rarity: "common" },
  { name: "Dragon Blade", rarity: "legendary" },
  { name: "Silver Bow", rarity: "rare" },
  { name: "Old Boots", rarity: "common" },
  { name: "Phoenix Ring", rarity: "legendary" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
["Dragon Blade", "Silver Bow", "Phoenix Ring"]
```

---

# დავალება 5: ფილმების რეკომენდაცია

## მიზანი

სტუდენტებმა გამოიყენონ chaining რეალისტურ მონაცემებზე.

## აღწერა

მოცემულია ფილმების მასივი.

იპოვეთ ისეთი ფილმები, რომლებიც:

1. არის `rating` 8-ზე მეტი ან ტოლი.
2. ჟანრში შეიცავს `"Sci-Fi"`-ს.
3. დაალაგეთ rating-ის მიხედვით კლებადობით.
4. დააბრუნეთ მხოლოდ სათაურები.

გამოიყენეთ chaining.

## საწყისი კოდი

```js
const movies = [
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] },
  { title: "Blade Runner 2049", rating: 8.0, genres: ["Sci-Fi", "Mystery"] },
  { title: "Fast X", rating: 5.8, genres: ["Action"] }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
["Inception", "Interstellar", "Blade Runner 2049"]
```

---

# დავალება 6: რესტორნის მენიუ — ფასდაკლებული კერძები

## მიზანი

სტუდენტებმა გამოიყენონ `map` და spread operator ობიექტის უსაფრთხოდ გადასაკეთებლად.

## აღწერა

მოცემულია რესტორნის მენიუ.

დაწერეთ კოდი, რომელიც დააბრუნებს ახალ მასივს, სადაც ყველა კერძს დაემატება ახალი property:

```js
discountedPrice
```

ფასდაკლება არის 20%.

არ შეცვალოთ ორიგინალი ობიექტები. გამოიყენეთ spread operator.

## საწყისი კოდი

```js
const menu = [
  { name: "Burger", price: 20, category: "Fast Food" },
  { name: "Caesar Salad", price: 18, category: "Salad" },
  { name: "Pizza", price: 30, category: "Fast Food" },
  { name: "Soup", price: 12, category: "Starter" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  { name: "Burger", price: 20, category: "Fast Food", discountedPrice: 16 },
  { name: "Caesar Salad", price: 18, category: "Salad", discountedPrice: 14.4 },
  { name: "Pizza", price: 30, category: "Fast Food", discountedPrice: 24 },
  { name: "Soup", price: 12, category: "Starter", discountedPrice: 9.6 }
]
```

---

# დავალება 7: მენიუს დაჯგუფება კატეგორიების მიხედვით

## მიზანი

სტუდენტებმა გამოიყენონ `reduce` ობიექტის ასაწყობად.

## აღწერა

მოცემულია მენიუს მასივი.

დაწერეთ კოდი, რომელიც დააბრუნებს ობიექტს, სადაც key იქნება კატეგორია, ხოლო value იქნება ამ კატეგორიაში არსებული კერძების მასივი.

## საწყისი კოდი

```js
const menu = [
  { name: "Burger", price: 20, category: "Fast Food" },
  { name: "Pizza", price: 30, category: "Fast Food" },
  { name: "Caesar Salad", price: 18, category: "Salad" },
  { name: "Tomato Soup", price: 12, category: "Starter" },
  { name: "Greek Salad", price: 16, category: "Salad" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
{
  "Fast Food": [
    { name: "Burger", price: 20, category: "Fast Food" },
    { name: "Pizza", price: 30, category: "Fast Food" }
  ],
  "Salad": [
    { name: "Caesar Salad", price: 18, category: "Salad" },
    { name: "Greek Salad", price: 16, category: "Salad" }
  ],
  "Starter": [
    { name: "Tomato Soup", price: 12, category: "Starter" }
  ]
}
```

---

# დავალება 8: სოციალური ქსელის Feed

## მიზანი

სტუდენტებმა გამოიყენონ `filter`, `sort`, `map` chaining-ით.

## აღწერა

მოცემულია პოსტების მასივი.

იპოვეთ მხოლოდ გამოქვეყნებული პოსტები, რომლებსაც აქვს მინიმუმ 100 like.

შემდეგ დაალაგეთ like-ების რაოდენობის მიხედვით კლებადობით.

ბოლოს დააბრუნეთ ტექსტები ასეთი ფორმატით:

```js
"Post: JavaScript Tips | Likes: 350"
```

## საწყისი კოდი

```js
const posts = [
  { title: "My breakfast", likes: 23, isPublished: true },
  { title: "JavaScript Tips", likes: 350, isPublished: true },
  { title: "Private Draft", likes: 999, isPublished: false },
  { title: "CSS Tricks", likes: 180, isPublished: true },
  { title: "Random Thought", likes: 75, isPublished: true }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  "Post: JavaScript Tips | Likes: 350",
  "Post: CSS Tricks | Likes: 180"
]
```

---

# დავალება 9: Wallet Transactions

## მიზანი

სტუდენტებმა გამოიყენონ `filter` და `reduce` ფინანსურ მონაცემებზე.

## აღწერა

მოცემულია ტრანზაქციების მასივი.

დაწერეთ სამი ცვლადი:

```js
totalIncome
totalExpense
balance
```

წესები:

* `income` ტიპის ტრანზაქციები ზრდის ბალანსს.
* `expense` ტიპის ტრანზაქციები ამცირებს ბალანსს.
* გამოიყენეთ `filter` და `reduce`.

## საწყისი კოდი

```js
const transactions = [
  { id: 1, type: "income", amount: 1200, description: "Salary" },
  { id: 2, type: "expense", amount: 200, description: "Groceries" },
  { id: 3, type: "expense", amount: 100, description: "Transport" },
  { id: 4, type: "income", amount: 300, description: "Freelance" },
  { id: 5, type: "expense", amount: 150, description: "Restaurant" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
totalIncome: 1500
totalExpense: 450
balance: 1050
```

---

# დავალება 10: საეჭვო ტრანზაქციების პოვნა

## მიზანი

სტუდენტებმა გამოიყენონ `filter`, `some` და nested object.

## აღწერა

მოცემულია ტრანზაქციების მასივი.

თითოეულ ტრანზაქციას აქვს nested object `meta`.

იპოვეთ საეჭვო ტრანზაქციები.

ტრანზაქცია საეჭვოა თუ:

1. `amount` მეტია 1000-ზე.
2. ან `meta.location` არ არის `"Georgia"`.

გამოიყენეთ `filter`.

## საწყისი კოდი

```js
const transactions = [
  {
    id: 1,
    amount: 250,
    type: "expense",
    meta: { location: "Georgia", device: "iPhone" }
  },
  {
    id: 2,
    amount: 2400,
    type: "expense",
    meta: { location: "Georgia", device: "MacBook" }
  },
  {
    id: 3,
    amount: 80,
    type: "expense",
    meta: { location: "Germany", device: "Android" }
  },
  {
    id: 4,
    amount: 500,
    type: "income",
    meta: { location: "Georgia", device: "Windows" }
  }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  {
    id: 2,
    amount: 2400,
    type: "expense",
    meta: { location: "Georgia", device: "MacBook" }
  },
  {
    id: 3,
    amount: 80,
    type: "expense",
    meta: { location: "Germany", device: "Android" }
  }
]
```

---

# დავალება 11: Task Board — აქტიური დავალებების Dashboard

## მიზანი

სტუდენტებმა გამოიყენონ chaining უფრო რეალურ UI-სთან ახლოს მდგომ მონაცემზე.

## აღწერა

მოცემულია task-ების მასივი.

იპოვეთ მხოლოდ ის task-ები, რომლებიც:

1. არ არის დასრულებული.
2. priority არის `"high"` ან `"medium"`.
3. დაალაგეთ deadline-ის მიხედვით ზრდადობით.
4. დააბრუნეთ ტექსტი შემდეგი ფორმატით:

```js
"Fix navbar - high - 2026-06-05"
```

## საწყისი კოდი

```js
const tasks = [
  { title: "Fix navbar", priority: "high", completed: false, deadline: "2026-06-05" },
  { title: "Update footer", priority: "low", completed: false, deadline: "2026-06-10" },
  { title: "Refactor auth", priority: "high", completed: true, deadline: "2026-06-02" },
  { title: "Create pricing page", priority: "medium", completed: false, deadline: "2026-06-03" },
  { title: "Write tests", priority: "medium", completed: false, deadline: "2026-06-08" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  "Create pricing page - medium - 2026-06-03",
  "Fix navbar - high - 2026-06-05",
  "Write tests - medium - 2026-06-08"
]
```

---

# დავალება 12: Object.keys / Object.entries — უნარების ანალიზი

## მიზანი

სტუდენტებმა გამოიყენონ ობიექტის მეთოდები: `Object.keys`, `Object.values`, `Object.entries`.

## აღწერა

მოცემულია დეველოპერის უნარების ობიექტი.

დაწერეთ კოდი, რომელიც:

1. დაბეჭდავს ყველა skill-ის სახელს.
2. დაბეჭდავს მხოლოდ იმ skill-ებს, რომელთა დონე არის 70-ზე მეტი.
3. დააბრუნებს ტექსტებს ასეთი ფორმატით:

```js
"React: 85%"
```

## საწყისი კოდი

```js
const skills = {
  HTML: 95,
  CSS: 90,
  JavaScript: 78,
  React: 85,
  Node: 45
};

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
["HTML", "CSS", "JavaScript", "React"]

[
  "HTML: 95%",
  "CSS: 90%",
  "JavaScript: 78%",
  "React: 85%"
]
```

---

# დავალება 13: მომხმარებლის პროფილის უსაფრთხო განახლება

## მიზანი

სტუდენტებმა გამოიყენონ spread operator nested object-ზე.

## აღწერა

მოცემულია მომხმარებლის პროფილი.

შექმენით ახალი ობიექტი `updatedProfile`, სადაც:

1. `username` დარჩება იგივე.
2. `email` შეიცვლება `"neo@matrix.com"`-ზე.
3. `settings.theme` შეიცვლება `"dark"`-ზე.
4. `settings.notifications.email` შეიცვლება `false`-ზე.

არ შეცვალოთ ორიგინალი `profile` ობიექტი.

## საწყისი კოდი

```js
const profile = {
  username: "neo",
  email: "old@matrix.com",
  settings: {
    theme: "light",
    language: "en",
    notifications: {
      email: true,
      sms: false
    }
  }
};

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
{
  username: "neo",
  email: "neo@matrix.com",
  settings: {
    theme: "dark",
    language: "en",
    notifications: {
      email: false,
      sms: false
    }
  }
}
```

---

# დავალება 14: ონლაინ კურსის პროგრესის ანალიზი

## მიზანი

სტუდენტებმა გამოიყენონ `every`, `some`, `filter`, `map` და nested arrays.

## აღწერა

მოცემულია კურსების მასივი.

თითოეულ კურსს აქვს lessons მასივი.

დაწერეთ კოდი, რომელიც დააბრუნებს მხოლოდ იმ კურსების სახელებს, სადაც ყველა lesson დასრულებულია.

გამოიყენეთ `every`.

შემდეგ დაწერეთ კოდი, რომელიც დააბრუნებს იმ კურსების სახელებს, სადაც მინიმუმ ერთი lesson ჯერ არ არის დასრულებული.

გამოიყენეთ `some`.

## საწყისი კოდი

```js
const courses = [
  {
    title: "HTML Basics",
    lessons: [
      { title: "Tags", completed: true },
      { title: "Forms", completed: true }
    ]
  },
  {
    title: "JavaScript Basics",
    lessons: [
      { title: "Variables", completed: true },
      { title: "Functions", completed: false }
    ]
  },
  {
    title: "React Intro",
    lessons: [
      { title: "Components", completed: false },
      { title: "Props", completed: false }
    ]
  }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
Completed courses:
["HTML Basics"]

Courses in progress:
["JavaScript Basics", "React Intro"]
```

---

# დავალება 15: Playlist Analyzer

## მიზანი

სტუდენტებმა გამოიყენონ chaining და `reduce` მუსიკალურ მონაცემებზე.

## აღწერა

მოცემულია სიმღერების მასივი.

იპოვეთ მხოლოდ `"rock"` ჟანრის სიმღერები.

დაალაგეთ duration-ის მიხედვით კლებადობით.

დააბრუნეთ ტექსტები ასეთი ფორმატით:

```js
"Bohemian Rhapsody - 354 sec"
```

შემდეგ დაითვალეთ rock სიმღერების საერთო ხანგრძლივობა წამებში.

## საწყისი კოდი

```js
const songs = [
  { title: "Bohemian Rhapsody", genre: "rock", duration: 354 },
  { title: "Billie Jean", genre: "pop", duration: 294 },
  { title: "Hotel California", genre: "rock", duration: 391 },
  { title: "Smells Like Teen Spirit", genre: "rock", duration: 301 },
  { title: "Blinding Lights", genre: "pop", duration: 200 }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  "Hotel California - 391 sec",
  "Bohemian Rhapsody - 354 sec",
  "Smells Like Teen Spirit - 301 sec"
]

1046
```

---

# დავალება 16: პატარა CRM — მომხმარებლების სეგმენტაცია

## მიზანი

სტუდენტებმა გამოიყენონ `filter`, `map`, `reduce`, `sort` და chaining.

## აღწერა

მოცემულია მომხმარებლების მასივი.

თითოეულ მომხმარებელს აქვს:

* `name`
* `spent`
* `isActive`
* `country`

დაწერეთ კოდი, რომელიც:

1. დატოვებს მხოლოდ აქტიურ მომხმარებლებს.
2. დატოვებს მხოლოდ იმ მომხმარებლებს, რომლებმაც დახარჯეს მინიმუმ 500.
3. დაალაგებს დახარჯული თანხის მიხედვით კლებადობით.
4. დააბრუნებს ტექსტებს ასეთი ფორმატით:

```js
"Ana from Georgia spent $1200"
```

## საწყისი კოდი

```js
const customers = [
  { name: "Nika", spent: 300, isActive: true, country: "Georgia" },
  { name: "Ana", spent: 1200, isActive: true, country: "Georgia" },
  { name: "John", spent: 900, isActive: false, country: "USA" },
  { name: "Mariam", spent: 700, isActive: true, country: "Germany" },
  { name: "Luka", spent: 1500, isActive: true, country: "Georgia" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
[
  "Luka from Georgia spent $1500",
  "Ana from Georgia spent $1200",
  "Mariam from Germany spent $700"
]
```

---

# დავალება 17: Country Report — მომხმარებლების დაჯგუფება ქვეყნების მიხედვით

## მიზანი

სტუდენტებმა შექმნან report ობიექტი `reduce`-ის გამოყენებით.

## აღწერა

მოცემულია მომხმარებლების მასივი.

დაწერეთ კოდი, რომელიც დააბრუნებს ობიექტს, სადაც თითოეული country იქნება key.

თითოეული country-ს value უნდა იყოს ობიექტი:

```js
{
  users: რაოდენობა,
  totalSpent: ჯამური დახარჯული თანხა
}
```

## საწყისი კოდი

```js
const customers = [
  { name: "Nika", spent: 300, country: "Georgia" },
  { name: "Ana", spent: 1200, country: "Georgia" },
  { name: "John", spent: 900, country: "USA" },
  { name: "Mariam", spent: 700, country: "Germany" },
  { name: "Luka", spent: 1500, country: "Georgia" }
];

// შენი კოდი აქ...
```

## მოსალოდნელი შედეგი

```js
{
  Georgia: {
    users: 3,
    totalSpent: 3000
  },
  USA: {
    users: 1,
    totalSpent: 900
  },
  Germany: {
    users: 1,
    totalSpent: 700
  }
}
```

---

# დავალება 18: Mini Project — Movie Platform Dashboard

## მიზანი

სტუდენტებმა ერთ დავალებაში გამოიყენონ მასივები, ობიექტები, chaining, reduce და nested data.

## აღწერა

მოცემულია ფილმების მასივი.

დაწერეთ შემდეგი ფუნქციები:

```js
getTopRatedMovies(movies)
getMoviesByGenre(movies, genre)
getAverageRating(movies)
getMovieTitles(movies)
getGenreReport(movies)
```

## მოთხოვნები

### getTopRatedMovies

უნდა დააბრუნოს ფილმები, რომელთა rating არის 8 ან მეტი.

ფილმები უნდა დალაგდეს rating-ის მიხედვით კლებადობით.

### getMoviesByGenre

უნდა დააბრუნოს მხოლოდ ის ფილმები, რომელთა `genres` მასივი შეიცავს გადმოცემულ ჟანრს.

### getAverageRating

უნდა დააბრუნოს ყველა ფილმის საშუალო rating.

### getMovieTitles

უნდა დააბრუნოს მხოლოდ ფილმების სათაურების მასივი.

### getGenreReport

უნდა დააბრუნოს ობიექტი, სადაც key არის ჟანრის სახელი, ხოლო value არის ამ ჟანრში არსებული ფილმების რაოდენობა.

## საწყისი კოდი

```js
const movies = [
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Dark Knight", rating: 9.0, genres: ["Action", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] },
  { title: "Shrek", rating: 7.9, genres: ["Animation", "Comedy"] }
];

function getTopRatedMovies(movies) {
  // შენი კოდი აქ...
}

function getMoviesByGenre(movies, genre) {
  // შენი კოდი აქ...
}

function getAverageRating(movies) {
  // შენი კოდი აქ...
}

function getMovieTitles(movies) {
  // შენი კოდი აქ...
}

function getGenreReport(movies) {
  // შენი კოდი აქ...
}

console.log(getTopRatedMovies(movies));
console.log(getMoviesByGenre(movies, "Drama"));
console.log(getAverageRating(movies));
console.log(getMovieTitles(movies));
console.log(getGenreReport(movies));
```

## მოსალოდნელი შედეგი

```js
[
  { title: "The Dark Knight", rating: 9.0, genres: ["Action", "Drama"] },
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] }
]

[
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Dark Knight", rating: 9.0, genres: ["Action", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] }
]

7.6

["Inception", "Interstellar", "The Dark Knight", "The Room", "Shrek"]

{
  "Sci-Fi": 2,
  "Thriller": 1,
  "Drama": 3,
  "Action": 1,
  "Animation": 1,
  "Comedy": 1
}
```

---

# დამატებითი გამოწვევა: E-commerce Analytics Pipeline

## მიზანი

სტუდენტებმა შექმნან პატარა ანალიტიკური pipeline method chaining-ის გამოყენებით.

## აღწერა

მოცემულია შეკვეთების მასივი.

თითოეულ შეკვეთას აქვს:

* `id`
* `customer`
* `status`
* `items`

თითოეულ item-ს აქვს:

* `name`
* `category`
* `price`
* `quantity`

დაწერეთ ფუნქცია:

```js
getCompletedOrderSummaries(orders)
```

ფუნქციამ უნდა:

1. დატოვოს მხოლოდ `"completed"` status-ის მქონე შეკვეთები.
2. თითოეული შეკვეთისთვის დაითვალოს total.
3. დააბრუნოს ახალი მასივი ასეთი ობიექტებით:

```js
{
  orderId: 1,
  customer: "Nika",
  total: 120
}
```

4. დაალაგოს შეკვეთები total-ის მიხედვით კლებადობით.

## საწყისი კოდი

```js
const orders = [
  {
    id: 1,
    customer: "Nika",
    status: "completed",
    items: [
      { name: "Mouse", category: "Tech", price: 80, quantity: 1 },
      { name: "Keyboard", category: "Tech", price: 150, quantity: 1 }
    ]
  },
  {
    id: 2,
    customer: "Ana",
    status: "pending",
    items: [
      { name: "Monitor", category: "Tech", price: 700, quantity: 1 }
    ]
  },
  {
    id: 3,
    customer: "Giorgi",
    status: "completed",
    items: [
      { name: "Notebook", category: "Office", price: 10, quantity: 5 },
      { name: "Pen", category: "Office", price: 2, quantity: 20 }
    ]
  },
  {
    id: 4,
    customer: "Mariam",
    status: "completed",
    items: [
      { name: "Laptop", category: "Tech", price: 2500, quantity: 1 }
    ]
  }
];

function getCompletedOrderSummaries(orders) {
  // შენი კოდი აქ...
}

console.log(getCompletedOrderSummaries(orders));
```

## მოსალოდნელი შედეგი

```js
[
  { orderId: 4, customer: "Mariam", total: 2500 },
  { orderId: 1, customer: "Nika", total: 230 },
  { orderId: 3, customer: "Giorgi", total: 90 }
]
```

---

# დამატებითი გამოწვევა 2: Category Revenue Report

## მიზანი

სტუდენტებმა nested arrays დაამუშაონ და საბოლოოდ report object ააწყონ.

## აღწერა

იგივე `orders` მასივის გამოყენებით შექმენით ფუნქცია:

```js
getCategoryRevenueReport(orders)
```

ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც key არის კატეგორია, ხოლო value არის ამ კატეგორიის სრული revenue.

გაითვალისწინეთ მხოლოდ `"completed"` შეკვეთები.

## მოსალოდნელი შედეგი

```js
{
  Tech: 2730,
  Office: 90
}
```
