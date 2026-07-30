import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const TITLE = "Termos de Uso | Renan Durso Advocacia";
const DESCRIPTION = "Condições de uso do site e natureza informativa do conteúdo publicado.";

export const Route = createFileRoute("/termos-de-uso")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
});

function Page() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro="Ao navegar neste site, você concorda com as condições descritas abaixo."
    >
      <h2>Caráter informativo</h2>
      <p>
        O conteúdo deste site tem finalidade meramente informativa e não constitui consulta ou
        parecer jurídico. Cada caso exige análise individualizada dos documentos médicos e
        contratuais.
      </p>
      <h2>Publicidade na advocacia</h2>
      <p>
        Este site observa o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021, com
        caráter informativo e sem captação de clientela, mercantilização da profissão ou promessa de
        resultados.
      </p>
      <h2>Propriedade intelectual</h2>
      <p>
        Textos, marca, logotipo e elementos visuais são protegidos por direitos autorais. A
        reprodução total ou parcial depende de autorização prévia.
      </p>
      <h2>Links e conteúdos de terceiros</h2>
      <p>
        Não nos responsabilizamos por conteúdos, políticas ou práticas de sites de terceiros
        eventualmente acessados a partir deste site.
      </p>
    </LegalPage>
  );
}