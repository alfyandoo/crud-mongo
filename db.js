const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db_my_todo_list");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
    console.log("Koneksi database berhasil!");
});
