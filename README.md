# Work in an Elevator

> A simple Progressive Web App (PWA) for keeping track of elevator floors visited

Visit the site live at https://workinanelevator.netlify.app/

*This app works fine on desktop but shines on mobile as an installable web app. Visit in the browser and select `install app` from the menu to see!*

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=000)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=fff)](https://whatwg.org/)
[![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=fff)](https://www.w3.org/Style/CSS/)
[![Workbox](https://img.shields.io/badge/-Workbox-fb8c00)](https://developers.google.com/web/tools/workbox/)
[![Babel](https://img.shields.io/badge/-Babel-030301?logo=babel)](https://babeljs.io/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/-Prettier-24292e?logo=prettier)](https://prettier.io/)
[![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm)](https://www.npmjs.com/)

## Purpose

This app was made for a client who needed help keeping track of which elevator floors he'd collected trash from. He had limited experience with his smartphone, having difficulty performing simple tasks like answering calls, but also bristled at the idea of a paper worksheet. This app had the dual purpose of helping him work with dignity and enabling him to grow in confidence with his phone.

## Task Requirements

The basic requirements were:
- **Simple to use**: Must be accessible to use for someone without basic smartphone skills.
- **Low bar of entry for daily use**: Navigating to a website each day would be a significant barrier to use.
- **Immediately intuitive**: Must provide an immediately intuitive representation of the elevator buttons.
- **Professional look and feel**: Must make the client feel good about what he is doing, and not like he is using a tool other workers might consider beneath them.
- **Introduces common smartphone interface features**: Should introduce a manageable number of features useful for navigating mobile apps.

Making the app installable on his phone as a progressive web app was crucial for daily use. Navigating to a url or a bookmark in a browser would quickly engender disuse.

When making the interface, I took care to make the buttons look similar to how they do on the actual elevators. For one building, that means circular buttons with shadow below and light above to give some shape. For the other building, that means square buttons illuminated around the edges. Building images and names further serve as markers to ensure the correct building screen is being used.

Navigation between buildings is intuitively obvious with the buttons up top, but easier by swiping side to side. I wanted to offer confusion-free design while encouraging use of a common mobile feature.

The app uses the color and font from the client's employer, and the building images are immediately recognizable for the client. It was important that the app feel professional and give the client a sense of excitement for learning something new. No matter how functional, an app that felt like a worksheet would always feel like a demeaning chore.


