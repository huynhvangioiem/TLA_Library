# TLA Library

A personal portfolio website and custom CSS/SCSS component library showcasing reusable UI components.

## Overview

TLA Library is a dual-purpose project:
- **Portfolio Site**: Professional profile showcasing skills, experience, and projects
- **UI Component Library**: Custom CSS framework with reusable components including grid system, buttons, navigation, and toast notifications

## Live Demo

Visit the live site: [TLA Library on GitHub Pages](https://huynhvangioiem.github.io/TLA_Library/)

## Features

### Portfolio
- Responsive personal profile page
- Skills and experience showcase
- Social media integration
- Mobile-friendly navigation

### Component Library
- **12-Column Grid System**: Responsive layout with PC, Tablet, and Mobile breakpoints
- **Buttons**: Multiple variants (primary, secondary, success, danger, warning, info, outline, rounded, social)
- **Navigation**: Dropdown menus with smooth transitions
- **Toast Notifications**: Animated notifications with auto-dismiss functionality
- **Form Elements**: Styled input fields and form components

## Technologies

- HTML5
- CSS3 / SCSS
- JavaScript / jQuery
- Font Awesome 5.15.4
- Highlight.js (for code examples)

## Project Structure

```
TLA_Library/
├── TLALib/                    # Component library source
│   ├── CSS/
│   │   └── TLA.css           # Compiled library CSS
│   ├── JS/
│   │   └── TLA.js            # Library JavaScript
│   └── SCSS/                  # SCSS source files
│       ├── TLA.scss          # Main entry point
│       ├── _config.scss      # Colors & spacing config
│       ├── _layout.scss      # Grid system
│       ├── _nav.scss         # Navigation styles
│       ├── _button.scss      # Button components
│       ├── _toast.scss       # Toast notifications
│       ├── _form.scss        # Form styles
│       └── _reset.scss       # CSS reset
├── img/                       # Image assets
├── index.html                 # Portfolio homepage
├── librabry.html              # Library documentation
├── script.js                  # Main JavaScript
├── style.css                  # Main stylesheet
├── TLALibrary.vs1.min.css    # Minified library CSS
└── TLALibrary.vs1.min.js     # Minified library JS
```

## Usage

### Grid System

```html
<div class="row">
  <div class="col pc-6 t-12 m-12">Column 1</div>
  <div class="col pc-6 t-12 m-12">Column 2</div>
</div>
```

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-success">Outline Success</button>
<button class="btn btn-rounded-danger">Rounded Danger</button>
```

### Toast Notifications

```javascript
toast({
  title: "Success",
  message: "Your action was completed successfully!",
  type: "success",
  duration: 5000
});
```

## Color Palette

| Color     | Hex Code  |
|-----------|-----------|
| Primary   | `#0069d9` |
| Secondary | `#5a6268` |
| Success   | `#218838` |
| Danger    | `#c82333` |
| Warning   | `#e0a800` |
| Info      | `#138496` |
| Light     | `#e2e6ea` |
| Dark      | `#23272b` |

## Responsive Breakpoints

- **PC (Desktop)**: Default styles
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/huynhvangioiem/TLA_Library.git
   ```

2. Open `index.html` in your browser to view the portfolio

3. Open `librabry.html` to view the component library documentation

### Using the Library in Your Project

Include the minified CSS and JS files:

```html
<link rel="stylesheet" href="TLALibrary.vs1.min.css">
<script src="TLALibrary.vs1.min.js"></script>
```

Or include the full versions for development:

```html
<link rel="stylesheet" href="TLALib/CSS/TLA.css">
<script src="TLALib/JS/TLA.js"></script>
```

## Author

**Huynh Van Gioi Em (TLA)**

- Email: huynhvangioiem@gmail.com
- GitHub: [@huynhvangioiem](https://github.com/huynhvangioiem)

## License

This project is open source and available for personal and educational use.

---

© 2021 TLA. All rights reserved.
