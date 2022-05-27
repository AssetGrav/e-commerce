// import { categoriesObject as categories } from './CategoriesService';

// const PRODUCTS = [
//     {
//         _id: '1',
//         name: "Морковь",
//         price: 120,
//         image: require("../assets/product_images/carrow.jpeg"),
//         category: categories.vegetables,
//         description: "Морковь не поливная сорт зимний",
//         favorite: false
//     },
//     {
//         _id: 2,
//         name: "Картошка",
//         price: 79,
//         image: require("../assets/product_images/potato.jpeg"),
//         category: categories.vegetables,
//         description:"Картошка не поливная красный варяг",
//         favorite: false
//     },
//     {
//         _id: 3,
//         name: "Лук",
//         price: 130,
//         image: require("../assets/product_images/onion.jpeg"),
//         category: categories.vegetables,
//         description: "Лук деревенский местный",
//         favorite: false
//     },
//     {
//         _id: 4,
//         name: "Капуста",
//         price: 400,
//         image: require("../assets/product_images/vegetable.jpeg"),
//         category: categories.vegetables,
//         description: "Капуста местная",
//         favorite: false
//     },
//     {
//         _id: 5,
//         name: "Яблоко",
//         price: 500,
//         image: require("../assets/product_images/apple.jpeg"),
//         category: categories.fruit,
//         description: "Яблоко уралочка",
//         favorite: false
//     },
//     {
//         _id: 6,
//         name: "Вишня",
//         price: 420,
//         image: require("../assets/product_images/vishny.jpeg"),
//         category: categories.fruit,
//         description: "Вишня садовая",
//         favorite: false
//     },
//     {
//         _id: 7,
//         name: "Огурец",
//         price: 150,
//         image: require("../assets/product_images/cucumbers.jpeg"),
//         category: categories.vegetables,
//         description: "Огруцы местные сорт Торгайские",
//         favorite: false
//     },
//     {
//         _id: 8,
//         name: "Молоко",
//         price: 160,
//         image: require("../assets/product_images/mploko.jpeg"),
//         category: categories.milkProducts,
//         description: "Молоко Колхоз Мичурино",
//         favorite: false
//     },
//     {
//         _id: 9,
//         name: "Мясо говядины",
//         price: 1800,
//         image: require("../assets/product_images/meet.jpg"),
//         category: categories.meet,
//         description: "Мясо говядины местное",
//         favorite: false
//     },
// ]

// const getProduct = (id) =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(PRODUCTS.find((product) => product._id === id))
//         }, 1000);
//     })

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(PRODUCTS);
//         }, 2000);
//     });

// const filteredProducts = (data) =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             const newArr = PRODUCTS.filter((elem) => elem.category.title === data)
//             resolve (newArr)
//         }, 2000);
//     });

// export default {
//     fetchAll,
//     filteredProducts,
//     getProduct
// };
