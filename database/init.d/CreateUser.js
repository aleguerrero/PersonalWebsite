db.createUser(
    {
        user: "admin",
        pwd: "secret",
        roles: [{ role: "userAdmin", db: "personalWebsite" }]
    }
)