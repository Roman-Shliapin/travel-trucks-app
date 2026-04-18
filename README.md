# TravelTrucks

A frontend web application for TravelTrucks — a campervan rental company.

## Features

- **Home page** with a hero banner and a call-to-action button
- **Catalog page** with a list of available campervans
  - Filter by location, body type, engine, and transmission
  - Load More pagination (4 items per page)
- **Camper details page** with:
  - Image gallery (Swiper thumbs)
  - Vehicle specs and amenities
  - User reviews with star ratings
  - Booking form with success notification

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — `useInfiniteQuery` for paginated requests
- [Swiper](https://swiperjs.com/) — image gallery
- [React Hook Form](https://react-hook-form.com/) — booking form
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- [React Icons](https://react-icons.github.io/react-icons/) — icons
- CSS Modules — styling

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/travel-trucks-app.git

# Navigate to the project folder
cd travel-trucks-app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero banner |
| `/catalog` | Campervan catalog with filters |
| `/catalog/[camperId]` | Camper details, gallery, reviews, booking |

## API

This project uses the [Campers API](https://campers-api.goit.study/docs).

## Author

Roman Shliapin
