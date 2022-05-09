export const categoriesObject = {
    vegetables: { _id: "hy16541856", title: "Овощи" },
    meet: { _id: "hy16547896", title: "Мясо" },
    milkProducts: { _id: "hy16541890", title: "Кисломолочка" },
    fruit: { _id: "hy16941890", title: "Фрукты" },
    anyCategories: { _id: "hy16571890", title: "Разное" }
};
export const categories = [
    { _id: "hy16541856", title: "Овощи"},
    { _id: "hy16547896", title: "Мясо"},
    { _id: "hy16541890", title: "Кисломолочка"},
    { _id: "hy16941890", title: "Фрукты"},
    { _id: "hy16571890", title: "Разное"}
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categoriesObject);
        }, 2000);
    });

export default {
    fetchAll
};