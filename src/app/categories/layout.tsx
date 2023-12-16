// @path: @/app/categories/layout.tsx


export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <div>
      <div>
        {/*  */}
        <h1>Категорії товарів.</h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
