# JRFAdda UGC NET PYQ Website

This project is a responsive website for JRFAdda UGC NET Previous Year Questions (PYQs) resources. The website provides access to various subject-wise PYQ materials for UGC NET aspirants.

## Project Structure

```
pyq-jrf-ugc/
├── components/
│   ├── header.html  # Reusable header component
│   └── footer.html  # Reusable footer component
├── css/
│   └── styles.css   # Main stylesheet with all styles
├── js/
│   └── main.js      # JavaScript functionality
├── images/          # Directory for storing images
│   └── 1.jpeg       # Sample image for cards
├── index.html       # Main PYQ page
└── README.md        # Project documentation
```

## Features

- Modern and responsive design
- Component-based architecture for easy maintenance
- Optimized card grid layout (5 cards per row on large screens, 3 on medium, 2 on tablets)
- Interactive elements like "Read More" toggles
- Mobile-friendly layout with responsive navigation
- Subject-wise categorization of PYQ resources
- Card-based UI with hover effects for better user experience
- Non-scrollable sticky sidebar

## Layout Specifications

- Maximum content width: 1440px
- Card grid:
  - 5 cards per row on screens larger than 1440px
  - 3 cards per row on screens between 1080px and 1440px
  - 2 cards per row on tablets (768px to 1080px)
  - 1 card per row on mobile devices
- Cards are sized smaller with reduced padding for a more compact, modern look
- Sticky sidebar that doesn't scroll independently

## How to Use

1. Open `index.html` in a web browser to view the main PYQ page.
2. The header and footer are directly included in the HTML (not loaded via JavaScript).
3. For adding new pages, create a new HTML file and include the same header/footer components.

## Customization

- **Colors**: The color scheme is defined using CSS variables in the `:root` selector in `styles.css`.
- **Fonts**: The website uses the Poppins font family from Google Fonts.
- **Images**: Replace placeholder images in the `images` directory with actual content.
- **Grid Layout**: Adjust the grid template columns in the media queries in `styles.css` to change the number of cards per row.

## Browser Compatibility

The website is designed to work on modern browsers with support for:

- CSS Grid and Flexbox
- CSS Variables
- JavaScript ES6 features
- HTML5 semantic elements

## Future Improvements

- Add subject-specific pages with detailed PYQ content
- Implement a search functionality for finding specific subjects
- Create a user authentication system for personalized experience
- Develop an assessment module for online testing
- Add dark mode toggle
- Implement lazy loading for images 