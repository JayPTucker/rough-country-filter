This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Rough Country Product Filter

## Overview

This project is a simple product filtering application built with Next.js, React, and TypeScript. It allows users to browse Rough Country products and filter them by vehicle make and year all while showing the amount of products found. The application is designed with a clean, component-based architecture and utilizes Tailwind CSS for styling.

---

Test for Dev Branch.  Ignore this.

## Features Completed

### Core Requirements

- Display all products
- Filter products by vehicle make
- Display a helpful empty state when no products match
- Clean, component-based architecture

### Bonus Features

- Filter by vehicle year
- Filter by make and year together
- Reset Filters button
- Improved styling with Tailwind CSS

---

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

---

## Project Structure

Below is a rough outline of the project structure I've made:

```
app/
├── page.tsx

components/
├── Filter.tsx
├── ProductCard.tsx
└── ProductList.tsx

data/
└── product.ts

types/
└── product.ts
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser to:

```
http://localhost:3000
```

---

## Future Improvements

With more time, I would consider adding:

- Product search
- Sorting by price
- Responsive mobile enhancements
- Pagination or infinite scrolling
- Server-side data fetching from an API

---

## Notes

The make and year dropdown options are generated dynamically from the product data rather than being hardcoded. This makes the filters easier to maintain if new products or vehicle information are added in the future.