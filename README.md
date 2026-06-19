# Resume Builder - Production-Grade Next.js Application

A professional, production-ready Resume Builder application built with Next.js, Redux Toolkit, and SCSS.

## 🚀 Features

### Core Features
- **Real-time Resume Building**: Live preview with instant updates
- **Multiple Templates**: Modern, Classic, and Minimal resume templates
- **Form Management**: Comprehensive forms for all resume sections
- **PDF Export**: Download your resume as a professional PDF
- **Print Support**: Print-friendly layouts with proper page breaks

### Advanced Features
- **Redux State Management**: Centralized state with Redux Toolkit
- **Undo/Redo**: Full history tracking with undo/redo functionality
- **LocalStorage Persistence**: Auto-save resume data locally
- **Theme Support**: Light/Dark theme toggle
- **Responsive Design**: Mobile-friendly layout
- **Code Splitting**: Dynamic imports for optimal performance
- **Multiple Resumes**: Manage multiple resume drafts

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with Redux provider
│   ├── page.js            # Home page with template selection
│   ├── builder/           # Resume builder pages
│   │   └── [template]/    # Dynamic template routes
│   └── dashboard/         # Resume management dashboard
│
├── components/
│   ├── common/           # Shared components (Header, UndoRedo)
│   ├── ui/               # Reusable UI components (Button, Input, etc.)
│   ├── forms/            # Form components (FormSection, DynamicList)
│   ├── resume/           # Resume section forms
│   └── templates/        # Resume template components
│
├── redux/
│   ├── store.js          # Redux store configuration
│   ├── StoreProvider.js  # Client-side Redux provider
│   ├── slices/           # Redux slices (resume, ui, history)
│   └── middleware/      # Redux middleware (history tracking)
│
├── styles/
│   ├── base/            # SCSS base (variables, mixins, reset)
│   ├── layout/          # Layout styles
│   ├── components/      # Component styles
│   ├── templates/       # Template-specific styles
│   └── globals.scss     # Global styles
│
├── utils/
│   ├── pdf.js          # PDF export utilities
│   ├── storage.js      # LocalStorage utilities
│   └── helpers.js      # Helper functions
│
└── constants/
    └── templates.js    # Template constants and options
```

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Redux Toolkit** - State management
- **SCSS** - Styling (no Tailwind, no styled-components)
- **html2pdf.js** - PDF generation
- **jsPDF** - PDF utilities

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Usage

### Starting the Application

1. Navigate to the home page to select a template
2. Choose from Modern, Classic, or Minimal templates
3. Fill in your resume information in the form panel
4. Preview your resume in real-time
5. Export as PDF or print directly

### Building a Resume

1. **Personal Information**: Add your name, contact details, and summary
2. **Experience**: Add work experience with descriptions
3. **Education**: Add educational background
4. **Skills**: List your technical and soft skills
5. **Projects**: Showcase your projects with links
6. **Certifications**: Add professional certifications
7. **Languages**: List languages and proficiency levels

### Features

- **Auto-save**: Resume data is automatically saved to localStorage
- **Undo/Redo**: Use the undo/redo buttons to revert changes
- **Theme Toggle**: Switch between light and dark themes
- **Preview Modes**: Toggle between Split, Form-only, or Preview-only views
- **Template Switching**: Change templates without losing data

## 🏗️ Architecture Decisions

### State Management
- **Redux Toolkit**: Chosen for predictable state management and time-travel debugging
- **Single Source of Truth**: All resume data flows through Redux
- **History Tracking**: Middleware automatically tracks state changes for undo/redo

### Styling
- **SCSS**: Modular SCSS architecture with BEM naming
- **CSS Variables**: Theme support via CSS custom properties
- **Component Styles**: Scoped styles using CSS Modules
- **No Inline Styles**: All styles in separate SCSS files

### Performance
- **Code Splitting**: Templates loaded dynamically with `next/dynamic`
- **Memoization**: React.memo used for expensive components
- **Debounced Auto-save**: Prevents excessive localStorage writes

### Code Quality
- **Reusable Components**: DRY principle with shared UI components
- **Type Safety**: PropTypes or TypeScript ready
- **Clean Architecture**: Separation of concerns (components, state, styles, utils)

## 📝 Redux State Structure

```javascript
{
  resume: {
    personalInfo: { ... },
    education: [ ... ],
    experience: [ ... ],
    projects: [ ... ],
    skills: [ ... ],
    certifications: [ ... ],
    languages: [ ... ],
    socialLinks: { ... }
  },
  ui: {
    selectedTemplate: 'modern',
    theme: 'light',
    loading: false,
    previewMode: 'split'
  },
  history: {
    past: [ ... ],
    future: [ ... ]
  }
}
```

## 🎨 Template System

Templates are pure presentational components that:
- Receive resume data via props
- Contain no business logic
- Are loaded dynamically for code splitting
- Have isolated SCSS styles

## 🔧 Customization

### Adding a New Template

1. Create a new template component in `src/components/templates/`
2. Add template styles in `src/styles/templates/`
3. Register in `src/constants/templates.js`
4. Add case in `TemplateLoader.js`

### Adding a New Resume Section

1. Create form component in `src/components/resume/`
2. Add reducer actions in `src/redux/slices/resumeSlice.js`
3. Add to builder page
4. Update templates to display the section

## 📄 License

MIT

## 👨‍💻 Development

This project follows industry best practices:
- Component-based architecture
- Separation of concerns
- Reusable, maintainable code
- Performance optimizations
- Accessibility considerations
- SEO-friendly structure

---

Built with ❤️ using Next.js and Redux Toolkit
# Resume_builder
# Resume_builder
