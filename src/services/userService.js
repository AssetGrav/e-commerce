const USERS = [
    {
        _id: "1",
        name: "Scot",
        email: "417051@mail.ru",
        phone: "+77756999475",
        password: "123456"
    },
    {
        _id: "2",
        name: "Bumer",
        email: "417050@mail.ru",
        phone: "+77756999476",
        password: "123456"
    }
]

const getUserById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(USERS.find((product) => product._id === id))
        }, 1000);
    })

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(USERS);
        }, 2000);
    });

export default {
    fetchAll,
    getUserById
}