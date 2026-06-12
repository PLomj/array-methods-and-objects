//1: თამაშის პერსონაჟის განახლება
const character = {
  name: "Shadow Knight",
  level: 4,
  health: 100,
  weapon: "Dark Sword"
};

character.isAlive = true;
character.level = character.level + 1;
character.health = character.health - 20;

console.log(character);


//2: პერსონაჟის აღწერის გენერატორი

const player = {
  username: "Neo",
  level: 12,
  weapon: "Plasma Gun", //Sword, Laser -both works;
  rank: "Diamond"
};

function describePlayer(element) {
  const {username:name, level, weapon, rank} = element;
  console.log(`Player ${name} is level 12 and uses ${weapon}.`);
  
}
describePlayer(player);

function anotherplayer(element) {
  const {username, level, weapon, rank} = player;
  console.log(`Player ${username} is level ${level} uses ${weapon} and has a ${rank} rank`);
}

anotherplayer(player);

//3: ინვენტარის საერთო ღირებულება
const inventory = [
  { name: "Health Potion", price: 10, quantity: 5 },
  { name: "Mana Potion", price: 15, quantity: 3 },
  { name: "Iron Sword", price: 100, quantity: 1 },
  { name: "Shield", price: 80, quantity: 1 }
];

//Without Addtitional Destructurisation;
const sum = inventory.reduce((totalprice, item) => totalprice + (item.price * item.quantity), 0);

console.log("without destructurisation:", sum);


//Destructurisation Version I
const sum1 = inventory.reduce((totalPrice, item)=>{
  const {price,quantity} = item;
  const totalItemPrice = price * quantity
 return totalPrice + totalItemPrice 
},0)
console.log("Destructurisation V1:",sum1);


//Destructurisation Version II
const sum2 = inventory.reduce((totalPrice,{price,quantity})=>{
const totalItemPrice = price * quantity
 return totalPrice + totalItemPrice
},0)
console.log("Destructurisation V2:",sum2);



//4: იშვიათი ნივთების სია
const items = [
  { name: "Wooden Stick", rarity: "common" },
  { name: "Dragon Blade", rarity: "legendary" },
  { name: "Silver Bow", rarity: "rare" },
  { name: "Old Boots", rarity: "common" },
  { name: "Phoenix Ring", rarity: "legendary" }
];


// const names = items.filter((item) => {

//     const { rarity} = item;
//     if(item === "rare" || item === "legendary"){
//         return true;  
//     }
//     return false 
// }).map((item) => item.name);

const names = items.filter(({ rarity }) => {
return rarity === "rare" || rarity === "legendary"
}).map((item) => item.name);

console.log("Rare items are",names);


//5: ფილმების რეკომენდაცია
const movies = [
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] },
  { title: "Blade Runner 2049", rating: 8.0, genres: ["Sci-Fi", "Mystery"] },
  { title: "Fast X", rating: 5.8, genres: ["Action"] },
];

const filteredMovies = movies.filter(
  ({title, rating, genres}) => {
    return rating >= 8 || genres.includes("Sci-Fi")}
).map(el => el.title);

console.log("Filtered movies are:", filteredMovies);


//6: რესტორნის მენიუ — ფასდაკლებული კერძები
const menu = [
  { name: "Burger", price: 20, category: "Fast Food" },
  { name: "Caesar Salad", price: 18, category: "Salad" },
  { name: "Pizza", price: 30, category: "Fast Food" },
  { name: "Soup", price: 12, category: "Starter" },
];


const fullMenu = menu.map(item => ({
  ...item,
  discountedPrice: item.price / 1.25
}));

console.log(fullMenu);


//7: მენიუს დაჯგუფება კატეგორიების მიხედვით
const menu1 = [
  { name: "Burger", price: 20, category: "Fast Food" },
  { name: "Pizza", price: 30, category: "Fast Food" },
  { name: "Caesar Salad", price: 18, category: "Salad" },
  { name: "Tomato Soup", price: 12, category: "Starter" },
  { name: "Greek Salad", price: 16, category: "Salad" },
];

const groupedMenu = menu1.reduce((acc, { category, ...rest }) => {
  acc[category] ??= [];
  acc[category].push({ category, ...rest });
  return acc;
}, {});

console.log(groupedMenu);


//8: სოციალური ქსელის Feed
const posts = [
  { title: "My breakfast", likes: 23, isPublished: true },
  { title: "JavaScript Tips", likes: 350, isPublished: true },
  { title: "Private Draft", likes: 999, isPublished: false },
  { title: "CSS Tricks", likes: 180, isPublished: true },
  { title: "Random Thought", likes: 75, isPublished: true },
];

const publishedPosts = posts
.filter(el => el.isPublished == true && el.likes >= 100)
.sort((a,b) =>  b.likes - a.likes)
.map(post => `Post: ${post.title} | Likes: ${post.likes}`);


console.log(publishedPosts);

//9: Wallet Transactions
const transactions = [
  { id: 1, type: "income", amount: 1200, description: "Salary" },
  { id: 2, type: "expense", amount: 200, description: "Groceries" },
  { id: 3, type: "expense", amount: 100, description: "Transport" },
  { id: 4, type: "income", amount: 300, description: "Freelance" },
  { id: 5, type: "expense", amount: 150, description: "Restaurant" },
];

const totalIncome = transactions
.filter(el => el.type == "income")
.reduce((acc, element) => acc + element.amount, 0);


const totalExpense = transactions
.filter(el => el.type === "expense")
.reduce((acc, el) => acc + el.amount, 0);

const balance = totalIncome - totalExpense;


console.log(`totalIncome: ${totalIncome}, totalExpense: ${totalExpense}, balance: ${balance}`);



//10: საეჭვო ტრანზაქციების პოვნა
const transactions2 = [
  {
    id: 1,
    amount: 250,
    type: "expense",
    meta: { location: "Georgia", device: "iPhone" },
  },
  {
    id: 2,
    amount: 2400,
    type: "expense",
    meta: { location: "Georgia", device: "MacBook" },
  },
  {
    id: 3,
    amount: 80,
    type: "expense",
    meta: { location: "Germany", device: "Android" },
  },
  {
    id: 4,
    amount: 500,
    type: "income",
    meta: { location: "Georgia", device: "Windows" },
  },
];

const doughtfull = transactions2.filter(({amount, meta}) => amount > 1000 || meta.location !== "Georgia");

console.log("Doughtfull Transactions: ", doughtfull);


//11: Task Board — აქტიური დავალებების Dashboard
const tasks = [
  {
    title: "Fix navbar",
    priority: "high",
    completed: false,
    deadline: "2026-06-05",
  },
  {
    title: "Update footer",
    priority: "low",
    completed: false,
    deadline: "2026-06-10",
  },
  {
    title: "Refactor auth",
    priority: "high",
    completed: true,
    deadline: "2026-06-02",
  },
  {
    title: "Create pricing page",
    priority: "medium",
    completed: false,
    deadline: "2026-06-03",
  },
  {
    title: "Write tests",
    priority: "medium",
    completed: false,
    deadline: "2026-06-08",
  },
];

const filteredtasks = tasks
.filter((task) => task.completed === false && task.priority === "high" || task.priority === "medium")

.sort((a, b) => a.deadline.localeCompare(b.deadline))

.map(task => `${task.title} - ${task.priority} - ${task.deadline}`);

console.log(filteredtasks);

// 12: Object.keys / Object.entries — უნარების ანალიზი
const skills = {
  HTML: 95,
  CSS: 90,
  JavaScript: 78,
  React: 85,
  Node: 45,
};

const skillnames =Object.keys(skills)

const filteredskills = Object.entries(skills)
.filter(([name, percentage]) => percentage > 70)
.map(([name, percentage]) => `${name} : ${percentage}`);

console.log(skillnames, filteredskills);

//13: მომხმარებლის პროფილის უსაფრთხო განახლება
const profile = {
  username: "neo",
  email: "old@matrix.com",
  settings: {
    theme: "light",
    language: "en",
    notifications: {
      email: true,
      sms: false,
    },
  },
};

const updatedProfile = {
  ...profile,
  email: "neo@matrix.com",
  settings: {
    ...profile.settings,
    theme: "dark",
    notifications: {
      ...profile.settings.notifications,
      email: false
    }
  }
};

console.log(updatedProfile);


//14: ონლაინ კურსის პროგრესის ანალიზი
const courses = [
  {
    title: "HTML Basics",
    lessons: [
      { title: "Tags", completed: true },
      { title: "Forms", completed: true },
    ],
  },
  {
    title: "JavaScript Basics",
    lessons: [
      { title: "Variables", completed: true },
      { title: "Functions", completed: false },
    ],
  },
  {
    title: "React Intro",
    lessons: [
      { title: "Components", completed: false },
      { title: "Props", completed: false },
    ],
  },
];


const completedCourses = courses
  .filter(course =>
    course.lessons.every(lesson => lesson.completed === true)
  )
  .map(course => course.title);

console.log("Completed courses:", completedCourses);

const inProgressCourses = courses
  .filter(course =>
    course.lessons.some(lesson => lesson.completed === false)
  )
  .map(course => course.title);

console.log("Courses in progress:", inProgressCourses);


//15: Playlist Analyzer
const songs = [
  { title: "Bohemian Rhapsody", genre: "rock", duration: 354 },
  { title: "Billie Jean", genre: "pop", duration: 294 },
  { title: "Hotel California", genre: "rock", duration: 391 },
  { title: "Smells Like Teen Spirit", genre: "rock", duration: 301 },
  { title: "Blinding Lights", genre: "pop", duration: 200 },
];

const playlist = songs
  .filter(item => item.genre == "rock")
  .sort((a, b) => b.duration - a.duration)
  .map(item => `${item.title} - ${item.duration} sec, `);

const totalRockDuration = songs
  .filter(item => item.genre == "rock")
  .reduce((accumulator, item) => accumulator + item.duration, 0)

console.log(playlist);
console.log("Total Duration of Rock music is - ", totalRockDuration);

//16: პატარა CRM — მომხმარებლების სეგმენტაცია
const customers = [
  { name: "Nika", spent: 300, isActive: true, country: "Georgia" },
  { name: "Ana", spent: 1200, isActive: true, country: "Georgia" },
  { name: "John", spent: 900, isActive: false, country: "USA" },
  { name: "Mariam", spent: 700, isActive: true, country: "Germany" },
  { name: "Luka", spent: 1500, isActive: true, country: "Georgia" },
];

const filteredCustomers = customers
  .filter(item => item.isActive == true && item.spent >= 500)
  .sort((a,b) => b.spent - a.spent)
  .map(item => `${item.name} from ${item.country} spent $${item.spent}`);

console.log(filteredCustomers);


//17: Country Report — მომხმარებლების დაჯგუფება ქვეყნების მიხედვით
const customers2 = [
  { name: "Nika", spent: 300, country: "Georgia" },
  { name: "Ana", spent: 1200, country: "Georgia" },
  { name: "John", spent: 900, country: "USA" },
  { name: "Mariam", spent: 700, country: "Germany" },
  { name: "Luka", spent: 1500, country: "Georgia" },
];



const customerByCountry = customers.reduce((acc, customer) => {
  const { country, spent } = customer;

  if (!acc[country]) {
    acc[country] = {
      users: 0,
      totalSpent: 0
    };
  }

  acc[country].users += 1;
  acc[country].totalSpent += spent;

  return acc;
}, {});

console.log(customerByCountry);



//18: Mini Project — Movie Platform Dashboard
const movies = [
  { title: "Inception", rating: 8.8, genres: ["Sci-Fi", "Thriller"] },
  { title: "Interstellar", rating: 8.6, genres: ["Sci-Fi", "Drama"] },
  { title: "The Dark Knight", rating: 9.0, genres: ["Action", "Drama"] },
  { title: "The Room", rating: 3.7, genres: ["Drama"] },
  { title: "Shrek", rating: 7.9, genres: ["Animation", "Comedy"] },
];

function getTopRatedMovies(movies) {
  return movies
  .filter(({rating}) => rating > 8)
  .sort((a,b) => b.rating - a.rating)
};

function getMoviesByGenre(movies, genre) {
  return movies.filter(({genres}) => genres.includes(genre))
};


function getAverageRating(movies) {
  const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) /
  movies.length;

  return averageRating;
};

function getMovieTitles(movies) {
  return movies.map(movie => movie.title)
};

function getGenreReport(movies) {
  return movies.reduce((acc, movie) => {
    movie.genres.forEach(genre => {
      if (!acc[genre]) {
      acc[genre] = 0
      }

      acc[genre] += 1;

    })

    return acc;

  }, {});
}

console.log("Hight Rated Movies",getTopRatedMovies(movies));
console.log("Only Dramas", getMoviesByGenre(movies, "Drama"));
console.log("Avarage Rating of Movies is: ",getAverageRating(movies));
console.log("Movie Titles: ",getMovieTitles(movies));
console.log(getGenreReport(movies));

//დამატებითი გამოწვევა: E-commerce Analytics Pipeline
const orders = [
  {
    id: 1,
    customer: "Nika",
    status: "completed",
    items: [
      { name: "Mouse", category: "Tech", price: 80, quantity: 1 },
      { name: "Keyboard", category: "Tech", price: 150, quantity: 1 },
    ],
  },
  {
    id: 2,
    customer: "Ana",
    status: "pending",
    items: [{ name: "Monitor", category: "Tech", price: 700, quantity: 1 }],
  },
  {
    id: 3,
    customer: "Giorgi",
    status: "completed",
    items: [
      { name: "Notebook", category: "Office", price: 10, quantity: 5 },
      { name: "Pen", category: "Office", price: 2, quantity: 20 },
    ],
  },
  {
    id: 4,
    customer: "Mariam",
    status: "completed",
    items: [{ name: "Laptop", category: "Tech", price: 2500, quantity: 1 }],
  },
];

function getCompletedOrderSummaries(orders) {
  return orders
    .filter(order => order.status === "completed")
    .map(order => {
      const total = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        orderId: order.id,
        customer: order.customer,
        total: total
      };
    })
    .sort((a, b) => b.total - a.total);
}

console.log(getCompletedOrderSummaries(orders));


//დამატებითი გამოწვევა 2: Category Revenue Report
function getCategoryRevenueReport(orders){
  return orders.reduce((acc, order) => {
    order.items.forEach(item => {
      const { category, price, quantity } = item;

      if (!acc[category]) {
        acc[category] = 0;
      }

      acc[category] += price * quantity;
    });

    return acc;
  }, {});
}

console.log(getCategoryRevenueReport(orders));
