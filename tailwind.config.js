/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],


        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        myYellow: '#ffdf2e',
        navBtnClr: '#AEDC01',
        navItmClr: '#2E2E2E',
        'headingClr':"#2E2E2E",
        lightGreenGrd: "#c0dc0e",
        lightYellowGrd: "rgba(228,215,30,.9) 94%",
        'testUser': '#B1E103',
        'footerClr': "#1E1E1E",
        'darkGreen':'#035D35'
        // Add more colors as needed
      },
      fontSize: {
        '56': '3.5rem', // You can adjust the value as needed
        '18': '18px', // You can adjust the value as needed
        '32': '32px', // You can adjust the value as needed
        '26': '26px', // You can adjust the value as needed
        '20': '20px', // You can adjust the value as needed
      },
      borderRadius: {
        'tr-120': '0 120px 0 0',
      },
      spacing: {
        '85': '70%',
        '86': '86%',
        '386': '386px',
        '320': '320px',
        '360': '360px',
        '438': '438px',
        '30': '30%',
        '5300': '5300px',

      }
      , animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
};
