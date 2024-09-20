import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  return (
    <header>
      <div className="p-default">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};
