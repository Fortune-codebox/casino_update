module.exports = Object.freeze({
    AUTH_USER: "09f009efe7b9ae",
    AUTH_PASS: "cd1233a2d8d6a7",
    AUTH_FROM: "admin@gmail.com",

    SECRET_KEY: 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
    SECRET_KEY_JWT: "hello friend",

    PAYPAL_MODE: 'sandbox', //sandbox or live
    PAYPAL_CLIENT_ID: 'AYbRvJeQImerka0dvE00pNHjCenRb72jenr5ERICIQsHcauLYMnP-prfnm95bVmq90N7q72UB7kcj_KO',
    PAYPAL_CLIENT_SECRET: 'EL2r6gQpAcFkBLb2DC8eFsarnDGMu6cN2D1kL33dRvP4Yqya3UaQ2rBhKGC7l_N08f6EDaN_vAbFGnBf',

    DATABASE: [
        {
            host: 'db4free.net',
            user: 'aaronwhite',
            password: 'Qazwsxedc123rfv123!',
            database: 'bunnybetdb1',
            sql: "SELECT * FROM casino_users",
            // multipleStatements: true
        },
    ],
    DATABASE_URL: {
        URI: "postgresql://aaronbastian890_gmai:M0v6XOr1am3uIqr66Y2qWA@field-mage-12558.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

    },
    API_KEY: "Z1KG9J0-GNHMNQE-PT6HD64-ET6GTWK",
    API_URL: 'https://api.nowpayments.io/v1',
    STRIPE_URI: "sk_test_51Mdvu1CWq9uV6YuM2iH4wZdBXlSMfexDymB6hHwpmH3J9Dm7owHNBhq4l4wawzFV9dXL3xrYGbhO74oc8OeQn5uJ00It2XDg9U"
})