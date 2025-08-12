import Button from "../common/buttons/Button";
import NavItem from "../common/navbar/NavItem";
import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import MarkIcon from "../../assets/icons/header/Vector.svg";
import Wordmark from "../../assets/icons/header/Nexin.svg";
import { useState } from "react";
import { CepSearchModal } from "../modals/CpfSeachModal";

const NAV = [
  { label: "Home", href: "#", caret: true },
  { label: "About Us", href: "#", caret: false },
  { label: "Portfolio", href: "#", caret: true },
  { label: "Pages", href: "#", caret: true },
  { label: "Blog", href: "#", caret: true },
  { label: "Contact Us", href: "#", caret: false },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#d9dde0] bg-white relative">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="h-20 lg:h-26 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center h-12 lg:h-14 gap-3 lg:gap-5 flex-shrink-0"
          >
            <img
              src={MarkIcon}
              alt="Nexin marca"
              className="h-10 w-8 lg:h-14 lg:w-11"
            />
            <img src={Wordmark} alt="Nexin logotipo" className="h-8 lg:h-10" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 flex-1 justify-center max-w-[654px]">
            {NAV.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                caret={item.caret}
                active={active === item.label}
                onClick={() => setActive(item.label)}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <Button
              className="w-12 h-12 lg:w-14 lg:h-14 border border-border bg-transparent hover:bg-gray-50"
              onClick={() => setOpen(true)}
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-body" />
            </Button>
            <Button className="w-40 lg:w-48 h-12 lg:h-14 bg-primary gap-2">
              <span className="font-kanit text-sm lg:text-base text-title font-medium">
                Get A Quote
              </span>
              <ArrowUpRightIcon
                strokeWidth={3}
                className="w-4 h-4 text-black"
              />
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              className="w-12 h-12 border border-border bg-transparent hover:bg-gray-50"
              onClick={() => setOpen(true)} // <— ADICIONADO
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-body" />
            </Button>
            <Button
              className="w-12 h-12 border border-border bg-transparent hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-body" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-body" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#d9dde0] shadow-lg z-50">
            <nav className="px-3 py-4 space-y-2">
              {NAV.map((item) => (
                <div key={item.label} className="block">
                  <NavItem
                    href={item.href}
                    caret={item.caret}
                    active={active === item.label}
                    onClick={() => {
                      setActive(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full py-3 px-2"
                  >
                    {item.label}
                  </NavItem>
                </div>
              ))}
              <div className="pt-4 border-t border-[#d9dde0]">
                <Button className="w-full h-12 bg-primary gap-2">
                  <span className="font-kanit text-title font-medium">
                    Get A Quote
                  </span>
                  <ArrowUpRightIcon
                    strokeWidth={3}
                    className="w-4 h-4 text-black"
                  />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <CepSearchModal isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
}
