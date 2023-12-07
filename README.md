# Price-Pulse App



### 🔩 Key Features




### 📝 How to Use



### 📒 About




### 🔭 Future Enhancements



- - -

### 📚 The project structure (architecture):

```go
📁prices-pulses/
│
├─ package.json
├─ tsconfig.json
├─ next.config
├─ next-env.d
├─ tailwind.config
├─ postcss.config
│
├─ 📁app/
│  ├─ globals.css
│  ├─ fonts.ts
│  ├─ favicon
│  ├─ layout.tsx
│  ├─ page.tsx
│  │
│  ├─ 📁api/
│  │  ├─ 📁admin/
│  │  │  ├─ 📁beverages/
│  │  │  ├─ 📁householdchemicals/
│  │  │  └─ 📁seafood/
│  │  │
│  │  ├─ 📁beverages/
│  │  │  ├─ 📁alcoholic/
│  │  │  └─ 📁nonalcoholic/
│  │  │
│  │  ├─ 📁householdchemicals/
│  │  │
│  │  └─ 📁seafood/
│  │
│  ├─ 📁about/
│  │  └─ page.tsx
│  ├─ 📁profile/
│  │  └─ page.tsx
│  ├─ 📁signin/
│  │  └─ page.tsx
│  │
│  ├─ 📁beverages/
│  │  ├─ layout.tsx
│  │  ├─ 📁alcoholic/
│  │  │  └─ page.tsx
│  │  ├─ 📁nonalcoholic/
│  │  │  └─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  ├─ 📁householdchemicals/
│  │  ├─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  └─ 📁seafood/
│  │  ├─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  └─ 📁view-components/
│     ├─ logo.tsx
│     ├─ skeletons.tsx
│     ├─ login-form.tsx
│     ├─ button.tsx
│     ├─ 📁dashboard/
│     │  ├─ sidenav.tsx
│     │  ├─ nav-links.tsx
│     │
│     ├─ 📁.../
│     │  ├─ ...tsx
│     │  ├─ ...tsx
│
│
├─ 📁public/
│  ├─ 📁beverages/
│  │  ├─ 📁alcoholic/
│  │  └─ 📁nonalcoholic/
│  ├─ 📁householdchemicals/
│  │   
│  └─ 📁seafood/  
│
├─ 📁backend/
│  ├─ 📁models/
│  │  ├─ enums.ts
│  │  ├─ interfaces.ts
│  │  ├─ types.ts
│  │  └─ classes.ts
│  │
│  ├─ 📁services/
│  │  ├─ get-data.ts
│  │  ├─ data-actions.ts
│  │  └─ utils.ts
│  │
│  ├─ 📁middlewares/
│  │  └─ 
│  │
│  └─ 📁controllers/
│     └─ 
│    
└─ 📁seeder/
   ├─ placeholder-data.ts
   └─ seed.js
```

- - -

### Try It Out
&emsp;You can experience the app firsthand by visiting the link:

- - -

### Standard background information
&emsp;This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Getting Started

First, run the development server:

```bash
  npm run dev
```

&emsp;Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

&emsp;This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Deploy on Vercel

&emsp;The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

&emsp;Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
