# LM EXCHANGE

This is a LM Exchange server API's, Created by and maintained by [shubham](https://github.com/S-Tentacion)

## Demo

This is node js project made via using of nodejs, expressjs, mongodb and of other packages.
A live deployment of <b><i>API's </i></b> is here [link](https://lm-exchange.onrender.com).

## API Documentation

- `Sign-up`: https://lm-exchange.onrender.com/auth/signup
- Payload

```bash
{
username:'username',
password:'password'
}
```

- `Login`: https://lm-exchange.onrender.com/auth/login
- Payload

```bash
{
username:'username',
password:'password'
}
```

- `Get User Details`: https://lm-exchange.onrender.com/getuserdetails
* Payload : `JWT Token`

- `Update User Details`: https://lm-exchange.onrender.com/updateUserDetails
* Payload : `JWT Token`

- `Update User Details`: https://lm-exchange.onrender.com/updateUserDetails
* Payload : `JWT Token`

- `Get All Products`: https://lm-exchange.onrender.com/products

- `Get Single Product`: https://lm-exchange.onrender.com/product/:id
* Payload :`:id`

## Installation

First, run the development server:

```bash
git clone https://github.com/S-Tentacion/LM_EXCHANGE.git
cd LM_EXCHANGE
npm install
#or
npm install --legacy-peer-deps
```

## Running locally

- `npm install`: install dependencies
- `nodemon start`: start server

## Tech Stack

Built with:

- [express](https://expressjs.com/) - learn about express
- [mongoose](https://mongoosejs.com/) - learn about mongoose
- [nodemon](https://nodemon.io/) - learn about nodemon
- [body-parser](https://github.com/expressjs/body-parser#readme) - learn about body parser
- [dotenv](https://github.com/motdotla/dotenv#readme) -  learn about dotenv

## Authors

- [@shubham](https://github.com/S-Tentacion)
