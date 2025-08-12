import { useState } from "react";
import { validateCEP } from "../utils/validateCEP";

export function useCep() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getCep(cep: string) {
    if (!validateCEP(cep)) {
      setError("CEP inválido.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await res.json();
      if (json.erro) {
        setError("CEP não encontrado.");
        setData(null);
      } else {
        setData({
          ...json,
        });
      }
    } catch {
      setError("Erro ao buscar CEP.");
    } finally {
      setLoading(false);
    }
  }
  function clear() {
    setData(null);
    setError(null);
  }

  return { data, loading, error, getCep, clear };
}
