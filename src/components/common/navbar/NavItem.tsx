import type { ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  href: string;
  children: ReactNode;
  caret?: boolean;
  active?: boolean;
  onClick?: () => void;
  className?: ReactNode;
};

export default function NavItem({
  href,
  children,
  caret,
  onClick,
  active,
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-center gap-1 font-dm-sans text-base font-medium"
    >
      <span
        className={`pb-1 border-b-2 transition-colors
          ${active ? "border-primary " : "border-transparent text-title"}
        `}
      >
        {children}
      </span>

      {caret && (
        <ChevronDownIcon
          strokeWidth={2.5}
          className="w-4 h-4 transition-colors text-black"
        />
      )}
    </a>
  );
}
