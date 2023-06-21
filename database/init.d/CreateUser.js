db.createUser({
    user: "appUserAdmin",
    pwd: "secret",
    roles: [{ role: "readWrite", db: "personalWebsite" }],
    mechanisms: ["SCRAM-SHA-1"],
});

// Authenticate user
db.auth({
    user: "appUserAdmin",
    pwd: "secret",
    mechanisms: ["SCRAM-SHA-1"],
    digestPassword: true,
});