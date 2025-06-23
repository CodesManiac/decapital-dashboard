# Professional Profile Dashboard – De'Capital Assessment

This is a responsive profile dashboard built using **React**, **Next.js**, and **Tailwind CSS**, developed as part of a technical assessment for the Part-Time Frontend Developer role at De'Capital.

It demonstrates UI accuracy, clean code structure, state management, responsiveness, and integration with real-world APIs.

---

## Key Features

- **Responsive Layout** – optimized for desktop and mobile
- **Sticky Navbar** – with scroll background effect
- **Sidebar Navigation** – icon-based with collapsible behavior
- **Profile Header** – includes role selector, “Book Now” CTA, and price info
- **Tabbed Interface** – filters experiences into categories
- **Experience Cards** – expandable, with a dynamic details panel
- **Mobile Cards** – a simplified version for small screens
- **API Integration** – data fetched using `getServerSideProps`

---

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **TypeScript**
- **Lucide Icons**
- **Netlify** (for deployment)

---

## Live Link



---

## Folder Overview
src
/pages
  -index.tsx
  -_app.tsx
/components
  - Sidebar.tsx
  - Navbar.tsx
  - ProfileHeader.tsx
  - ExperienceTabs.tsx
  - ExperienceCard.tsx
  - ProgramPanel.tsx
  - MobileExperienceCard.tsx
/styles
   - globals.css
- types.ts

---
## APIs Used

- Users: `https://jsonplaceholder.typicode.com/users/1`
- Posts: `https://jsonplaceholder.typicode.com/posts?userId=1`

---
## Getting Started

1. **Clone the repository**

git clone https://github.com/codesmaniac/decapital-dashboard.git
cd decapital-dashboard

2. **Instal dependencies**

```bash
npm install
```

3. **Run locally**

```bash
npm run dev
```

4. **Visit**

[http://localhost:3000](http://localhost:3000)

---

## Deployment(Netlify)
1. Push to Github
2. [Link your repo on Netlify](https://www.netlify.com/)
3. Set:
   -Build Command: npm run dev
   -Publish Directory: out
4. Netlify auto-deploys on push.

---

## Requirements Covered

1. **React + Next.js (Pages Router)**
2. getStaticProps usage
3. Tailwind CSS for layout and theming
4. **Real API integration**
5. **UI accuracy with wireframe reference**
6. Public GitHub repo
7. Live deployment on Netlify

---

## Author

Joy Ajiboye

[LinkedIn](nkedin.com/in/joy-ajiboye/)
[GitHub](https://github.com/CodesManiac/)