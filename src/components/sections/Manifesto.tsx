import manifestoImage from "@/assets/manifesto.jpg";
import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={manifestoImage}
        alt="Mãos unidas em gesto de acolhimento"
        width={1408}
        height={912}
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-navy)", opacity: 0.94 }}
        aria-hidden="true"
      />
      <div className="section-shell py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs tracking-[0.24em] text-accent uppercase">Manifesto</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Cada Processo Representa uma Vida.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>A saúde é um direito fundamental.</p>
            <p>
              Cada processo representa muito mais que um número. Representa uma família. Uma
              história. Uma esperança.
            </p>
            <p>
              Nosso compromisso é atuar com responsabilidade, rapidez e excelência técnica para
              assegurar o acesso ao tratamento necessário.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}