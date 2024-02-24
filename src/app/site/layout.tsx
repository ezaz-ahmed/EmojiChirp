import Navigation from "~/components/site/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default MainLayout;
