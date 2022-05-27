// import { db } from "../../firebase";

// const USERS = [
//     {
//         _id: "1",
//         name: "Scot Norington",
//         image: require("../assets/users_photo/photo_user.jpeg"),
//         email: "417051@mail.ru",
//         phone: "+77756999475",
//         password: "123456Aa"
//     },
//     {
//         _id: "2",
//         name: "Buyer Bork",
//         image: require("../assets/users_photo/photo_user.jpeg"),
//         email: "417050@mail.ru",
//         phone: "+77756999476",
//         password: "123456Aa"
//     }
// ]

// const getUserById = (id) => {
//     let userRef = db.ref('users/' + id);
//     userRef.on('value', (snapshot) => {
//         const data = snapshot.val();
//         return data;
//     });
//     return userRef
// }

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(USERS);
//         }, 2000);
//     });

// export default {
//     fetchAll,
//     getUserById
// }