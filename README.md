# Personal Portfolio 🚀

A modern and responsive personal portfolio website built with React.js. This portfolio showcases projects, skills, experience, and articles in a clean and professional design.

🌍 **[Live Demo](https://your-portfolio-url.vercel.app)** - Check out the live website!

## ✨ Features

- **Multi-Page Layout**: Home, About, Projects, Articles, and Contact pages
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Clean and professional UI with smooth animations
- **SEO Optimized**: Built-in SEO configuration for better search engine visibility
- **Fast Performance**: Optimized React components for quick loading
- **Easy Customization**: Centralized configuration files for easy updates

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **FontAwesome** - Icons and graphics
- **CSS3** - Styling and animations
- **Google Analytics** - Website analytics
- **React Helmet** - SEO management

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gouravkumarpandey/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── public/                 # Static files
│   ├── images/            # Image assets
│   └── index.html         # HTML template
├── src/
│   ├── components/        # Reusable React components
│   │   ├── about/         # About page components
│   │   ├── articles/      # Article components
│   │   ├── common/        # Shared components
│   │   ├── homepage/      # Homepage components
│   │   └── projects/      # Project components
│   ├── data/              # Configuration files
│   │   ├── user.js        # Personal information
│   │   ├── articles.js    # Article content
│   │   ├── seo.js         # SEO metadata
│   │   └── styles.css     # Global styles
│   ├── pages/             # Page components
│   └── App.js             # Main app component
└── package.json           # Project dependencies
```

## ⚙️ Configuration

### Personal Information (`src/data/user.js`)
Update your personal details, experience, projects, and contact information.

### Articles (`src/data/articles.js`)
Add your blog posts and articles. Each article should follow this structure:

```javascript
function article_1() {
    return {
        date: "DD MMM YYYY",
        title: "Your Article Title",
        description: "Brief description of the article",
        body: (
            <React.Fragment>
                {/* Your article content */}
            </React.Fragment>
        ),
    };
}
```

### SEO Settings (`src/data/seo.js`)
Configure meta tags, descriptions, and keywords for each page.

### Styling (`src/data/styles.css`)
Customize colors, fonts, and other design elements:

```css
:root {
    --primary-color: #27272a;
    --secondary-color: #65656d;
    --link-color: #14b8a6;
    --primary-font: "Heebo", sans-serif;
}
```

## 📊 Analytics

Add Google Analytics tracking by updating your measurement ID in `src/data/tracking.js`.

## 🏗️ Building for Production

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Deploy the `build/` folder** to your hosting service

3. **Configure your web server** to serve `index.html` for all routes (for single-page app routing)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (one-way operation)

## 🌐 Deployment

### Current Deployment: Vercel ⚡

This portfolio is currently deployed on **Vercel** with automatic deployments from the main branch.

**Vercel Deployment Features:**
- ✅ Automatic deployments on push to main
- ✅ Preview deployments for pull requests
- ✅ Global CDN for fast loading
- ✅ Custom domain support
- ✅ Built-in SSL certificates

### Alternative Deployment Options:

- **Netlify**: Drag and drop the `build/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Traditional hosting**: Upload `build/` folder contents

### Deploy to Vercel (Recommended)

1. Fork this repository
2. Sign up for a free [Vercel account](https://vercel.com)
3. Connect your GitHub account
4. Import your forked repository
5. Vercel will automatically detect it's a React app and deploy it
6. Your portfolio will be live with a `.vercel.app` domain
7. Optionally, add a custom domain in the Vercel dashboard

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please reach out through the contact form on the website.

---

⭐ **Star this repository if it helped you!**