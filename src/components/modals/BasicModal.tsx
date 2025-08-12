import { useEffect } from "react";

type BasicModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function BasicModal({
  isOpen,
  onClose,
  title,
  children,
}: BasicModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        {(title || true) && (
          <div className="flex items-center justify-between border-b p-4">
            {title ? (
              <h2 className="text-lg font-semibold">{title}</h2>
            ) : (
              <span />
            )}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="rounded p-1"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
