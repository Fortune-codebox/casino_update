# 🎮 Casino Game Platform

A full-featured casino gaming application built using **Node.js/Express** for the backend, **React.js/Redux** for the frontend, and **HTML Canvas** for rendering game graphics.

### 🎲 Available Games

- Roulette
- Blackjack
- Slot Machines
- Craps
- Poker (5 Card Draw & Texas Hold’em)
- Keno
- Race Betting

---

## 📋 Project Requirements

    - After successful cloning the project with: git clone https://github.com/Fortune-codebox/casino_update.git
    - install dependencies - npm install
    - Run For Development: npm run dev
    - Run For Production: npm run start

### 1. Write your opinion here

    - Strengths and weaknesses of UI/UX
        ...
        1. Great UI/UX design but Room for improvement, would advice including colour pallettes that go well with green background, creating mild variation blends well with the entire background, the yellow needs improved touches especially on the home page after successful login.
        2. To Create a balanced visual effect with dull and bright colours i would suggest changing the bright colour and using colors like light beige or soft cream to add warmth to the green background.

    - Crypto Payment Logic Assessment & Suggest improvements
        ...
        The Crypto Payment Logic is functional and well-structured but there are several improvement that can be made for scalability, readability, security, and correctness.

        1. The createCryptoInvoice and fetchPaymentDetails functions unnecessarily wraps axios in new Promise(). This is an anti-pattern. improvemnts will be to strip out the new Promise and use axios like that as it returns a Promise
        2. Inconsistent error handling (resolving instead of rejecting)
        Also in createCryptoInvoice and fetchPaymentDetails resolving errors and treating them as normal responses. Instead, catch errors properly and send proper status codes
        3. Validation is too weak: In /api/crypto, amount, crypto_currency, and description are used without validation.
        4. Hardcoded API key – move to environment variable and call with process.env.API_KEY
        5. Mixing .then() and async/await leads to inconsistency. Make all handlers async.
        6. Response structure inconsistencies: Some routes use: { type: "crypto", result: "success", payload: ... } Others return raw objects or mix result: "error" and payload: error. Standardize response shape and structure.

### 2. Wallet Integration

- Integrate wallet connection as a **precondition** for sign-in.
- Maintain the existing sign-in flow, but ensure users can only authenticate **after a successful wallet connection**

### Included Online DataBase and Created User Access For A Real User Experience Login

- Login Access Requires 2 Steps

1. Connect Wallet
2. Input User and Password After a Successful Wallet Connection

## Test Login Access Input Data After Successful Connecting Wallet.

user: aaron1
pass: 12345@
