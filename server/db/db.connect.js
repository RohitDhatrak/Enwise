const Sequelize = require("sequelize");

if (process.env.NODE_ENV === "development") {
    var sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            dialect: "postgres",
        }
    );
} else {
    var sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    });
}

sequelize
    .authenticate()
    .then(() => console.log("Connected to the DB"))
    .catch(() => console.log("Error connecting to the DB"));

module.exports = sequelize;
