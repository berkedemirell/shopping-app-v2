/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/main.jsx',
    './src/components/Nav.jsx',
    './src/components/Footer.jsx',
    './src/components/Cart.jsx',
    './src/pages/Main.jsx',
    './src/pages/All.jsx',
    './src/pages/Fragrance.jsx',
    './src/pages/Login.jsx',
    './src/pages/Skin.jsx',
    './src/pages/Detail.jsx',
    './src/pages/Groceries.jsx',
    './src/pages/Purchase.jsx',
    './src/pages/Decoration.jsx',
    './src/pages/Favs.jsx',
    './src/pages/Shoes.jsx',
    './src/pages/Products.jsx',
    './src/pages/Electronics.jsx',
    './src/components/SuccessPayment.jsx',
    './src/components/EmptyCard.jsx',
    './src/components/Discount.jsx',
    './src/components/Paginate.jsx',
    './src/components/Progress.jsx',
    './src/components/LazyImage.jsx',
    './src/pages/Search.jsx',
    './src/pages/Account.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rem': ['REM']
      },
      backgroundImage: {
        'back': 'url("./style/asd.png")',
        'shoe': 'url("./style/shoe.png")',
        'back-dark': 'url("./style/dark.png")',
      },

      width: {
        'header': '40rem',
        'pro-pic': '27rem',
        'cart': '20rem',
        'cartl': '30rem',
        'cart2': '15rem',
        'title': '7rem',
        'favs-i': '5rem',
        'delete': '2rem',
        'success-w': '23rem',
        'search-input': '17rem',
        'search-input2': '13rem',
        'search-input3': '9rem',
        'search-input4': '7rem',
      },
      height: {
        'formh': '20rem',
        'formh2': '15rem',
        'success': '20rem',
        'favs-i': '5rem',
        'carth': '25rem',
        'carth2': '18rem',
      },
      colors: {
        'nav': '#9c57a8',
        'nav2': '#52a5ad',
        'footer': '#2b2e4e',
        'button': '#a5c43b',
        'shoes': '#9e6168',
        'shoe-card': '#b5524a',
        'groce-card': '#2ed151',
        'deco-card': '#4a85b5',
        'login1': '#b66949',
        'login2': '#51aea8',
        'cat1': '#6d9273',
        'cat2': '#876f90',
        'card': '#5c495b',
      },
      screens: {
        'lg': {'max': '1020px'},
        'xl': {'min' : '1400px'},
        'md': {'max': '845px'},
        'sm': {'max': '700px'},
        'ssm': {'max': '560px'},
        'xs': {'max': '485px'},
        'xxs': {'max': '430px'},
        'xxxs': {'max': '355px'},
        'final': {'max': '325px'},
      }
    },
  },
  plugins: [],
}

