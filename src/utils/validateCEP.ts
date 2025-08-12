export const validateCEP = (cep: string): boolean => {
  cep = cep.replace(/\D/g, "");

  if (cep.length !== 8) return false;

  if (/^(\d)\1+$/.test(cep)) return false;

  return true;
};
