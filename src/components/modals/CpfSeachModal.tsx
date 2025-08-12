import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BasicModal from "./BasicModal";
import { useCep } from "../../hooks/useCep";

type CepSearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CepSearchModal({ isOpen, onClose }: CepSearchModalProps) {
  const [cepInput, setCepInput] = useState<string>("");
  const { loading, error, data, getCep, clear } = useCep();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    getCep(cepInput);
  }

  useEffect(() => {
    if (!isOpen) {
      setCepInput("");
      clear();
    }
  }, [isOpen, clear]);

  return (
    <BasicModal
      isOpen={isOpen}
      onClose={onClose}
      title="Buscar endereço por CEP"
    >
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <div className="relative flex-1">
          <label className="mb-1 block text-sm font-medium text-title">
            CEP
          </label>
          <input
            type="text"
            placeholder="Digite o CEP (ex.: 03323000 ou 03323-000)"
            value={cepInput}
            onChange={(e) => setCepInput(e.target.value)}
            className="w-full rounded-md border border-border px-3 py-2 pr-11 text-body outline-none focus:border-black"
          />
          {cepInput && (
            <button
              type="button"
              onClick={() => {
                setCepInput("");
                clear();
              }}
              aria-label="Limpar CEP"
              className=" absolute right-2 top-[45px] -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center"
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-[42px] self-end rounded-md bg-primary px-4 py-2 font-medium text-title hover:opacity-90 disabled:opacity-60 cursor-pointer"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      {data && (
        <div className="mt-6 grid grid-cols-1 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-title">
              Logradouro
            </label>
            <input
              value={data.logradouro ?? ""}
              readOnly
              disabled
              className="w-full rounded-md border border-border bg-gray-100 px-3 py-2 text-body cursor-not-allowed"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-title">
              Complemento
            </label>
            <input
              value={data.complemento ?? ""}
              readOnly
              disabled
              className="w-full rounded-md border border-border bg-gray-100 px-3 py-2 text-body cursor-not-allowed"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-title">
              Bairro
            </label>
            <input
              value={data.bairro ?? ""}
              readOnly
              disabled
              className="w-full rounded-md border border-border bg-gray-100 px-3 py-2 text-body cursor-not-allowed"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-title">
              UF
            </label>
            <input
              value={data.uf ?? ""}
              readOnly
              disabled
              className="w-full rounded-md border border-border bg-gray-100 px-3 py-2 text-body cursor-not-allowed"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-title">
              Estado
            </label>
            <input
              value={data.estado ?? ""}
              readOnly
              disabled
              className="w-full rounded-md border border-border bg-gray-100 px-3 py-2 text-body cursor-not-allowed"
            />
          </div>
        </div>
      )}
    </BasicModal>
  );
}
