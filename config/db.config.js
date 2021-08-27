module.exports = {
    HOST: "192.168.1.28",
    USER: "sangi",
    PASSWORD: "sangi",
    DB: "cryptabot",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}