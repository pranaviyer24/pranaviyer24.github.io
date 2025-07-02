# UX Portfolio - Pranav Iyer

A modern, responsive UX portfolio built with Vue.js showcasing design work, case studies, and professional experience.

## Features

- **Home Page**: Hero section with introduction and featured work
- **About Page**: Professional background with detailed resume
- **Case Studies**: Portfolio of design projects with filtering and search
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Markdown Support**: Case studies stored as editable markdown files

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ux-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components
│   ├── Home.vue        # Home page
│   ├── About.vue       # About page with resume
│   ├── CaseStudies.vue # Case studies listing
│   └── CaseStudyDetail.vue # Individual case study view
├── data/
│   └── case-studies/   # Markdown files for case studies
├── router.js           # Vue Router configuration
├── main.js             # App entry point
└── App.vue             # Root component
```

## Customizing the Portfolio

### Personal Information

Update the following files with your information:

1. **App.vue**: Change the name in the navigation
2. **Home.vue**: Update hero section content and featured projects
3. **About.vue**: Replace resume content with your experience
4. **CaseStudies.vue**: Update the case studies data array

### Adding Case Studies

1. Create a new markdown file in `src/data/case-studies/`
2. Add the case study data to the `caseStudies` array in `CaseStudies.vue`
3. Update the `allCaseStudies` array in `CaseStudyDetail.vue`

### Styling

The portfolio uses a modern design system with:
- Primary color: `#2563eb` (blue)
- Secondary colors: Various grays for text and backgrounds
- Typography: Inter font family
- Spacing: Consistent 8px grid system

You can customize colors and styling in the component `<style>` sections.

## Case Study Markdown Format

Case studies are stored as markdown files with the following structure:

```markdown
# Project Title

## Project Overview
Brief description of the project.

## The Challenge
What problems needed to be solved.

## Research & Discovery
User research and findings.

## Design Strategy
Goals and approach.

## Design Process
Step-by-step process.

## Results
Quantitative and qualitative outcomes.

## Lessons Learned
Key takeaways from the project.
```

## Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router**: Client-side routing
- **Vite**: Build tool and development server
- **CSS Grid & Flexbox**: Modern layout techniques
- **Markdown**: Content management for case studies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to your repository
3. Configure GitHub Pages to serve from the `dist` directory

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vue.js project
3. Deploy with default settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out to [your-email@example.com]

---

Built with ❤️ using Vue.js
