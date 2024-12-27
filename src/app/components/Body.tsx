interface BodyProps {
  children: React.ReactNode;
}

export function Body({ children }: BodyProps) {
  return (
    <main className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </main>
  );
}
