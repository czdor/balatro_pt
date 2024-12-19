export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-light-white dark:bg-dark-background">
      <div className="w-full md:w-[70%] flex items-center flex-col mx-auto px-4 md:px-0">
        {children}
      </div>
    </div>
  );
};
