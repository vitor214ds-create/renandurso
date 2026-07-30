import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";
import { CONTACT } from "@/lib/site";

const TITLE = "LGPD | Renan Durso Advocacia";
const DESCRIPTION =
  "Compromisso com a Lei Geral de Proteção de Dados no tratamento de dados sensíveis de saúde.";

export const Route = createFileRoute("/lgpd")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/lgpd" },
    ],
    links: [{ rel: "canonical", href: "/lgpd" }],
  }),
});

function Page() {
  return (
    <LegalPage
      title="LGPD — Lei Geral de Proteção de Dados"
      intro="Tratamos dados pessoais e sensíveis de saúde em conformidade com a Lei nº 13.709/2018."
    >
      <h2>Bases legais</h2>
      <p>
        O tratamento de dados sensíveis de saúde ocorre com fundamento no consentimento do titular,
        no exercício regular de direitos em processo judicial e no cumprimento de obrigação legal ou
        regulatória, conforme o art. 11 da LGPD.
      </p>
      <h2>Minimização e segurança</h2>
      <ul>
        <li>Solicitamos apenas os documentos indispensáveis à análise do caso.</li>
        <li>O acesso é restrito ao advogado responsável e à equipe designada.</li>
        <li>Documentos são armazenados em ambiente com controle de acesso.</li>
      </ul>
      <h2>Retenção</h2>
      <p>
        Os dados são mantidos durante a vigência da relação profissional e pelos prazos legais de
        guarda documental, sendo eliminados de forma segura após esse período.
      </p>
      <h2>Encarregado de dados</h2>
      <p>
        Solicitações relacionadas aos seus direitos como titular podem ser enviadas para{" "}
        {CONTACT.email} ou pelo WhatsApp {CONTACT.whatsapp}.
      </p>
    </LegalPage>
  );
}