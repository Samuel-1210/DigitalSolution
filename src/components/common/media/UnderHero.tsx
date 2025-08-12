// src/components/UnderHeroImage.jsx

import underHero from "../../../assets/icons/hero/underhero.png"; // Ajuste o caminho da imagem

export default function UnderHero() {
  return (
    <section>
      <img
        src={underHero}
        alt="Pessoa trabalhando em notebook"
        className="w-full object-cover"
      />
    </section>
  );
}
