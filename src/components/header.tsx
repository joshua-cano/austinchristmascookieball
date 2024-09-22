import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-neutral shadow-md">
      <div className="p-default">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};
