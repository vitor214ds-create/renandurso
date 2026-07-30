import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";
import { CONTACT } from "@/lib/site";

const TITLE = "Política de Privacidade | Renan Durso Advocacia";
const DESCRIPTION =
  "Como tratamos os dados pessoais e sensíveis de saúde enviados por meio deste site.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function Page() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica quais dados coletamos, para quais finalidades e por quanto tempo eles são mantidos."
    >
      <h2>1. Dados coletados</h2>
      <p>
        Coletamos apenas os dados informados voluntariamente por você: nome, telefone, e-mail e o
        conteúdo da mensagem enviada pelo formulário ou pelo WhatsApp. Em casos relacionados ao
        Direito da Saúde, podem ser compartilhados dados sensíveis de saúde (relatórios, laudos e
        prescrições), tratados exclusivamente para a análise jurídica do seu caso.
      </p>
      <h2>2. Finalidade do tratamento</h2>
      <p>
        Os dados são utilizados para responder ao seu contato, avaliar a viabilidade jurídica da
        demanda e, se contratada a atuação, para a defesa dos seus interesses em juízo ou
        extrajudicialmente.
      </p>
      <h2>3. Compartilhamento</h2>
      <p>
        Não vendemos nem cedemos dados a terceiros para fins publicitários. Eventual
        compartilhamento ocorre apenas quando indispensável ao andamento do caso (órgãos do Poder
        Judiciário, peritos, correspondentes) ou por obrigação legal.
      </p>
      <h2>4. Sigilo profissional</h2>
      <p>
        Todas as informações estão protegidas pelo sigilo profissional do advogado, previsto no
        Estatuto da Advocacia e no Código de Ética e Disciplina da OAB.
      </p>
      <h2>5. Seus direitos</h2>
      <p>
        Você pode solicitar a confirmação do tratamento, o acesso, a correção, a anonimização ou a
        exclusão dos seus dados escrevendo para {CONTACT.email}.
      </p>
      <h2>6. Cookies e métricas</h2>
      <p>
        Este site pode utilizar ferramentas de medição de audiência para entender o desempenho das
        páginas. Os dados são analisados de forma agregada e você pode bloquear cookies nas
        configurações do seu navegador.
      </p>
    </LegalPage>
  );
}