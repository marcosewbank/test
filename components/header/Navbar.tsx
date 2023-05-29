import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function Navbar({
  items,
}: {
  items: INavItem[];
  /*   searchbar: SearchbarProps; */
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="flex w-full absolute mt-5 px-8 md:max-w-[1170px]">
        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>
        <Buttons variant="menu" />

        <div class="flex gap-1">
          {
            /*         <Buttons variant="search" />
          <Buttons variant="cart" /> */
          }
        </div>
      </div>

      {/* Desktop Version */}
      {
        /*  <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
    <Buttons variant="search" />
     <Searchbar searchbar={searchbar} />
          <a class="btn btn-square btn-ghost" href="/login" aria-label="Log in">
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>
          <a
            class="btn btn-square btn-ghost"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon id="Heart" size={20} strokeWidth={2} fill="none" />
          </a>
        <Buttons variant="cart" />
        </div>
      </div> */
      }
    </>
  );
}

export default Navbar;
