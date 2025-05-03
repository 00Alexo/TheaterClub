# Theater Website Project

A modern React application for a theater company, featuring member reviews, show information, and more.

![Theater Website Preview](public/images/preview.png)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Updating Content](#updating-content)
  - [Updating Member Review Photos](#updating-member-review-photos)
  - [Updating Homepage Images](#updating-homepage-images)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [Yarn](https://yarnpkg.com/) (v1.22.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/theater-website.git
cd theater-website
```

2. Install dependencies:

With npm:
```bash
npm install
```

Or with Yarn:
```bash
yarn install
```

### Running the App

To start the development server:

With npm:
```bash
npm start
```

Or with Yarn:
```bash
yarn start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
# or
yarn build
```

## Updating Content

### Updating Member Review Photos

The member reviews carousel is located in the `src/components/MemberReviews.js` file. Here's how to update or add new review member images:

1. **Place your images**:
   - Add your image files to the `src/assets/` directory
   - Recommended image size: 80px × 80px (square)
   - Supported formats: JPG, PNG, WebP

2. **Update the reviews array**:
   - Open `src/components/MemberReviews.js`
   - Locate the `reviews` array (around line 5)
   - Update the `image` property for existing reviews or add new review objects:

```javascript
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Theater Enthusiast",
    rating: 5,
    text: "The production of 'Hamlet' was absolutely breathtaking...",
    // Update the image path to your new image:
    image: "/images/reviews/sarah-johnson.jpg" 
  },
  // Add new reviews or modify existing ones
  {
    id: 5, // Use the next available ID
    name: "New Member Name",
    role: "Member Role",
    rating: 4,
    text: "Your review text goes here...",
    image: "/images/reviews/new-member.jpg"
  }
];
```

3. **Image optimization tips**:
   - Compress your images to improve load times
   - Keep file sizes under 100KB if possible
   - Use descriptive filenames (e.g., `john-smith.jpg` rather than `img1.jpg`)

### Updating Homepage Images

The homepage components are located in `src/pages/HomePage.js`. Here's how to update or add new section images:

1. **Place your images**:
   - Add your image files to the `src/assets/` directory
   - Recommended image sizes:
     - Hero section: 600px × 400px
     - Gallery images: 600px × 400px

2. **Update the HomePage component**:
   - Open `src/pages/HomePage.js`
   - Find the section where you want to update the image
   - Update the image source:

```jsx
// For hero section
<div className="hero-section">
  <img 
    src="/images/homepage/new-hero-image.jpg" 
    alt="Main Theater Stage" 
    className="hero-image"
  />
</div>

// For feature sections
<section className="feature-section">
  <img 
    src="/images/homepage/new-feature-image.jpg" 
    alt="Feature Description" 
    className="feature-image"
  />
  <div className="feature-content">
    {/* Content here */}
  </div>
</section>
```

3. **For carousel/gallery images**:
   - If your homepage has a carousel or gallery component, find the images array:

```jsx
const galleryImages = [
  {
    id: 1,
    src: "/images/homepage/gallery-1.jpg",
    alt: "Performance of Romeo and Juliet",
  },
  // Add or update images here
  {
    id: 4,
    src: "/images/homepage/new-gallery-image.jpg",
    alt: "Description of the new image",
  }
];
```

4. **Best practices**:
   - Maintain consistent aspect ratios within each section
   - Use responsive image techniques for better performance
   - Consider adding WebP versions of images for modern browsers

## Project Structure

```
theater-website/
├── src/
|   ├── assets/
│   ├── components/
│   │   ├── MemberReviews.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── ...
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Created with ❤️ by Ionut Apostol