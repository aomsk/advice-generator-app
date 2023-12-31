# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![advice-generator-app-screenshot](https://github.com/aomsk/advice-generator-app/blob/main/src/assets/advice-generator-app-screenshot.png?raw=true)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/advice-generator-with-react-tailwind-css-typescript-wJqCxzwrI7)
- Live Site URL: [Advice generator app](https://advice-generator-app-six-wine.vercel.app/)

## My process

### Built with

- [Vite](https://vitejs.dev/) - Frontend Tooling
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [axios](https://tailwindcss.com/) - For call API
- [Advice Slip JSON API](https://api.adviceslip.com/) For Advice API

### What I learned

I learned to put filters to elements such as `drop-shadow` etc.

example:

```css
.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  filter: drop-shadow(0 0 20px hsl(150, 100%, 66%));
}
```

## Author

- Frontend Mentor - [@aomsk](https://www.frontendmentor.io/profile/aomsk)
