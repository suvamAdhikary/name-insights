# Name Insights

Uncover the hidden stories behind names with demographic, gender, and geographic insights.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Technologies Used](#technologies-used)

## Introduction

Name Insights is a web application designed to provide users with valuable information based on names. It aims to solve the curiosity and interest people have in understanding the insights associated with different names. By entering a name, users can uncover various details such as age demographics, gender distribution, and geographic distribution associated with that name.

## Features

- Name Analysis: Users can input a name and receive insights into age demographics, gender distribution, and geographical distribution related to that name.
- Interactive Interface: The application provides a user-friendly interface for seamless interaction and exploration of name insights.
- Real-time Data: Name insights are generated based on real-time data, ensuring accuracy and relevance.
- Error Handling: Robust error handling ensures smooth user experience even in the event of unexpected errors.
- Loading Indicators: Users are provided with loading indicators to indicate when data is being fetched, enhancing transparency and user experience.

## Installation

```bash
# Clone the repository
git clone https://github.com/suvamAdhikary/name-insights.git

# Navigate to the project directory
cd name-insights

# Install dependencies
npm 
```

## Usage

```bash
# Start the development server
npm run dev
```

## Folder Structure

```
NAME-INSIGHTS/
  ├── .next/                     # Next.js build output
  ├── app/                       # Application-specific components and utilities
  │   ├── api/                   # API-related functions
  │   │   └── fetchNameInsights.ts  # Function to fetch name insights
  │   ├── components/            # Reusable React components
  │   │   ├── ErrorIndicator/          # Error message component
  │   │   │   ├── index.tsx
  │   │   │   └── ErrorIndicator.module.css
  │   │   ├── InputForm/               # Input form component
  │   │   │   ├── index.tsx
  │   │   │   └── InputForm.module.css
  │   │   ├── LoadingIndicator/        # Loading indicator component
  │   │   │   ├── index.tsx
  │   │   │   └── LoadingIndicator.module.css
  │   │   └── ResultDisplay/           # Component to display results
  │   │       ├── index.tsx
  │   │       └── ResultDisplay.module.css
  │   ├── hoc/                    # Higher-order components
  │   │   ├── Footer/                   # Footer component
  │   │   │   ├── index.tsx
  │   │   │   └── Footer.module.css
  │   │   ├── Header/                   # Header component
  │   │   │   ├── index.tsx
  │   │   │   └── Header.module.css
  │   │   ├── Main/                     # Main content component
  │   │   │   ├── index.tsx
  │   │   │   └── Main.module.css
  │   │   ├── Skeleton/                 # Skeleton component for loading states
  │   │   │   ├── index.tsx
  │   │   │   └── Skeleton.module.css
  │   │   └── withLoadingAndError.ts    # HOC to handle loading and error states
  │   └── interfaces/             # TypeScript interfaces and types
  │       └── common.ts
  ├── public/                     # Public static assets
  │   ├── favicon.ico             # Favicon icon
  │   ├── next.svg                # Next.js related SVG
  │   └── vercel.svg              # Vercel SVG
  ├── styles/                     # Global styles
  │   ├── base/                         
  │   │   ├── globals.css               
  │   │   └── reset.css
  │   └── page.module.css         # Page-specific CSS module
  ├── .eslintrc.json              # ESLint configuration
  ├── .gitignore                  # Specifies intentionally untracked files to ignore
  ├── next-env.d.ts               # Next.js TypeScript declaration file
  ├── next.config.mjs             # Next.js configuration file in ES Module format
  ├── package.json                # Project metadata and dependencies
  ├── package-lock.json           # Automatically generated for any operations where npm modifies the node_modules tree
  ├── README.md                   # Project documentation
  └── tsconfig.json               # TypeScript configuration
```

## Technologies Used

- React.js: [Documentation](https://reactjs.org/)
- Next.js: [Documentation](https://nextjs.org/)
- CSS Modules: [Documentation](https://github.com/css-modules/css-modules)

---
