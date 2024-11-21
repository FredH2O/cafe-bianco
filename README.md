# Cafe Bianco

Cafe Bianco is a modern café website built with React. It features a responsive design, an interactive menu, a contact form, and a map to the café's location.

## Live Demo

[Visit Cafe Bianco on GitHub Pages](https://fredH2O.github.io/cafe-bianco)

## Features

- Responsive design for all devices.
- Interactive menu with detailed items.
- Contact form for easy communication.
- Embedded map of the café's location.

## Technologies Used

- **React**: Component-based UI framework.
- **React Router**: Client-side routing.
- **Bootstrap**: Responsive design.
- **React Bootstrap**: Bootstrap components in React.
- **React Leaflet & Leaflet**: Interactive maps.
- **Swiper**: Carousels and slideshows.
- **Lodash**: JavaScript utility library.
- **Date-fns**: Date manipulation.
- **Bootstrap Icons**: Scalable vector icons.
- **Animate.css**: Smooth animations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fredH2O/cafe-bianco.git
   ```
2. Navigate into the project directory:
   ```bash
   cd cafe-bianco
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment

To deploy this project to GitHub Pages:

1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these scripts to `package.json`:
   ```json
   "homepage": "https://fredH2O.github.io/cafe-bianco",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Build and deploy:
   ```bash
   npm run deploy
   ```
4. Visit [https://fredH2O.github.io/cafe-bianco](https://fredH2O.github.io/cafe-bianco).

## License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
