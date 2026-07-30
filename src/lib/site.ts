export const CONTACT = {
  name: "Renan Durso Advocacia",
  lawyer: "Renan Durso",
  phone: "(11) 94343-3532",
  phoneHref: "tel:+5511943433532",
  whatsapp: "(18) 99127-5357",
  whatsappNumber: "5518991275357",
  email: "renandurso@aasp.org.br",
  address: {
    street: "Av. Pres. Juscelino Kubitschek, nº 1327",
    complement: "4º andar — Conjunto 41",
    zip: "CEP 04543-011",
    district: "Itaim Bibi",
    city: "São Paulo/SP",
  },
};

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá. Encontrei seu site e preciso de orientação sobre um caso relacionado ao Direito da Saúde.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Áreas de Atuação", href: "/#areas" },
  { label: "Como Podemos Ajudar", href: "/#ajudar" },
  { label: "Perguntas Frequentes", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  icon: string;
  intro: string;
  details: string[];
  documents: string[];
};

export const AREAS: PracticeArea[] = [
  {
    slug: "home-care",
    title: "Home Care",
    short: "Internação domiciliar garantida com pedidos de urgência.",
    bullets: ["Internação domiciliar", "Negativa do plano", "Urgência"],
    icon: "HouseHeart",
    intro:
      "O home care é a continuidade do tratamento hospitalar dentro de casa, com equipe, equipamentos e insumos adequados. Quando há prescrição médica, a negativa do plano de saúde costuma ser abusiva.",
    details: [
      "Atuação imediata contra negativas de internação domiciliar e redução unilateral de horas de enfermagem.",
      "Pedidos de tutela de urgência para manutenção da equipe multiprofissional prescrita.",
      "Inclusão de fisioterapia, fonoaudiologia, nutrição e materiais indispensáveis ao cuidado.",
    ],
    documents: [
      "Relatório médico detalhado com a indicação do home care",
      "Negativa do plano de saúde (por escrito, e-mail ou protocolo)",
      "Carteirinha, documentos pessoais e comprovantes de pagamento do plano",
    ],
  },
  {
    slug: "medicamentos-de-alto-custo",
    title: "Medicamentos de Alto Custo",
    short: "Fornecimento judicial de medicamentos essenciais à vida.",
    bullets: ["Fornecimento judicial", "Medicamentos importados", "Uso contínuo"],
    icon: "Pill",
    intro:
      "Medicamentos de alto custo, importados ou sem registro pleno na ANVISA podem ser obtidos judicialmente quando há prescrição médica e comprovação da imprescindibilidade.",
    details: [
      "Ações contra planos de saúde e contra o poder público (SUS) para fornecimento contínuo.",
      "Teses consolidadas sobre medicamentos off label, orais e antineoplásicos domiciliares.",
      "Pedido de multa diária para garantir a entrega efetiva e sem interrupções.",
    ],
    documents: [
      "Prescrição médica com CID, dosagem e tempo de tratamento",
      "Relatório médico justificando a ausência de alternativa terapêutica",
      "Negativa do plano ou do SUS e orçamentos do medicamento",
    ],
  },
  {
    slug: "tratamentos-oncologicos",
    title: "Tratamentos Oncológicos",
    short: "Nenhum dia perdido no tratamento do câncer.",
    bullets: ["Quimioterapia", "Imunoterapia", "Radioterapia"],
    icon: "Ribbon",
    intro:
      "No tratamento oncológico o tempo é decisivo. Negativas de quimioterapia, imunoterapia, radioterapia de última geração ou exames de estadiamento exigem resposta jurídica imediata.",
    details: [
      "Liminares para início ou continuidade de protocolos oncológicos prescritos.",
      "Cobertura de radioterapia IMRT, radiocirurgia, PET-CT e terapias-alvo.",
      "Discussão de rol da ANS e caráter exemplificativo da cobertura.",
    ],
    documents: [
      "Relatório médico oncológico com protocolo indicado",
      "Exames, biópsia e laudo histopatológico",
      "Negativa do plano de saúde e histórico do tratamento",
    ],
  },
  {
    slug: "cirurgias-negadas",
    title: "Cirurgias Negadas",
    short: "Autorização de procedimentos cirúrgicos recusados.",
    bullets: ["Planos de saúde", "Urgência", "Procedimentos"],
    icon: "Stethoscope",
    intro:
      "Negativas de cirurgia por alegação de procedimento não previsto, carência indevida ou materiais não cobertos podem ser revertidas judicialmente, muitas vezes em poucas horas.",
    details: [
      "Tutela de urgência para agendamento imediato do procedimento.",
      "Inclusão de materiais, próteses e equipe cirúrgica indicada pelo médico.",
      "Cirurgias bariátricas, ortopédicas, cardíacas, oftalmológicas e reparadoras.",
    ],
    documents: [
      "Pedido cirúrgico com descrição do procedimento e materiais",
      "Relatório médico e exames que comprovem a indicação",
      "Negativa do plano e número de protocolo",
    ],
  },
  {
    slug: "reembolso-medico",
    title: "Reembolso Médico",
    short: "Recebimento correto de despesas médicas e hospitalares.",
    bullets: ["Despesas hospitalares", "Consultas", "Cirurgias"],
    icon: "Receipt",
    intro:
      "Reembolsos negados, pagos a menor ou calculados por critérios não informados no contrato podem ser revistos, inclusive em casos de urgência e emergência fora da rede.",
    details: [
      "Cobrança de reembolso integral em atendimentos de urgência e emergência.",
      "Revisão de cálculos de múltiplos de reembolso e glosas indevidas.",
      "Ressarcimento de despesas hospitalares suportadas pela família.",
    ],
    documents: [
      "Notas fiscais, recibos e relatórios de atendimento",
      "Extrato de reembolso e resposta do plano",
      "Contrato do plano e tabela de reembolso, quando disponível",
    ],
  },
  {
    slug: "orteses-e-proteses",
    title: "Órteses e Próteses",
    short: "Materiais especiais indicados pelo médico assistente.",
    bullets: ["Materiais especiais", "Equipamentos", "Insumos"],
    icon: "Bone",
    intro:
      "A escolha da marca e do modelo de OPME é do médico assistente. Substituições impostas pelo plano ou negativas de materiais especiais comprometem o resultado do procedimento.",
    details: [
      "Garantia do material indicado, sem imposição de similar de menor qualidade.",
      "Cobertura de equipamentos, insumos e itens ligados ao ato cirúrgico.",
      "Atuação em próteses ortopédicas, cardíacas, auditivas e mamárias.",
    ],
    documents: [
      "Justificativa técnica do médico para o material indicado",
      "Pedido cirúrgico com descritivo do OPME",
      "Negativa ou proposta de substituição feita pelo plano",
    ],
  },
  {
    slug: "diabetes",
    title: "Diabetes",
    short: "Tecnologia adequada para o controle glicêmico.",
    bullets: ["Bombas de insulina", "Sensores", "Tecnologias"],
    icon: "Activity",
    intro:
      "Bombas de insulina, sensores de monitoramento contínuo, insulinas análogas e insumos são frequentemente negados, mesmo com indicação médica expressa.",
    details: [
      "Ações para fornecimento de bomba de insulina e insumos de reposição.",
      "Sensores de monitoramento contínuo de glicose para adultos e crianças.",
      "Pedidos contra planos de saúde e contra o Estado/Município.",
    ],
    documents: [
      "Relatório médico endocrinológico com justificativa da tecnologia",
      "Exames laboratoriais e histórico glicêmico",
      "Negativa do plano ou do SUS e orçamentos",
    ],
  },
  {
    slug: "exames-e-terapias",
    title: "Exames e Terapias",
    short: "Cobertura de exames, internações e terapias continuadas.",
    bullets: ["Cobertura", "Internações", "Terapias multidisciplinares"],
    icon: "Microscope",
    intro:
      "Exames de alta complexidade e terapias multidisciplinares — especialmente em casos de TEA, atraso no desenvolvimento e reabilitação — têm cobertura obrigatória sem limite de sessões.",
    details: [
      "Terapia ABA, fonoaudiologia, terapia ocupacional, psicologia e fisioterapia.",
      "Exames genéticos, de imagem e de alta complexidade negados pelo plano.",
      "Internações clínicas, psiquiátricas e em UTI sem limitação de prazo.",
    ],
    documents: [
      "Relatório médico com diagnóstico, CID e carga horária indicada",
      "Laudos e avaliações da equipe multidisciplinar",
      "Negativa do plano ou limitação de sessões informada",
    ],
  },
  {
    slug: "cumprimento-de-decisao-judicial",
    title: "Cumprimento de Decisão Judicial",
    short: "Fazer valer, na prática, a decisão já obtida.",
    bullets: ["Execução", "Multas", "Obrigação de fazer"],
    icon: "Gavel",
    intro:
      "Conseguir a liminar é apenas parte do caminho. Quando a decisão não é cumprida, é necessário executar a obrigação de fazer e aplicar as medidas coercitivas cabíveis.",
    details: [
      "Petições de cumprimento com pedido de multa diária e majoração.",
      "Bloqueio de valores para custeio direto do tratamento.",
      "Medidas contra descumprimento reiterado e atraso na autorização.",
    ],
    documents: [
      "Decisão judicial e comprovante de intimação",
      "Provas do descumprimento (protocolos, e-mails, negativas)",
      "Orçamentos atualizados do tratamento",
    ],
  },
];

export const STEPS = [
  { title: "Entre em contato", text: "Fale diretamente pelo WhatsApp e relate o caso." },
  { title: "Envie a documentação", text: "Relatórios médicos, negativa e documentos pessoais." },
  { title: "Análise jurídica", text: "Estudo técnico da negativa e das teses aplicáveis." },
  { title: "Definição da estratégia", text: "Caminho mais rápido e seguro para o seu caso." },
  { title: "Pedido de urgência", text: "Protocolo com tutela de urgência quando cabível." },
  { title: "Acompanhamento do processo", text: "Comunicação direta e atualizações constantes." },
];

export const DIFFERENTIALS = [
  { title: "Atendimento Humanizado", text: "Escuta atenta em um momento delicado, sem juridiquês." },
  { title: "Agilidade", text: "Resposta rápida e protocolo em regime de prioridade." },
  { title: "Medidas Urgentes", text: "Liminares e tutelas de urgência quando o tempo é vital." },
  { title: "Atendimento Nacional", text: "Atuação em todo o Brasil, de forma online e segura." },
  { title: "Estratégia Personalizada", text: "Cada caso é analisado individualmente, sem modelos prontos." },
  { title: "Transparência", text: "Clareza sobre riscos, prazos e possibilidades reais." },
  { title: "Comunicação Direta", text: "Contato direto com o advogado responsável pelo caso." },
  { title: "Atualização Constante", text: "Você acompanha cada movimentação do processo." },
];

export const SITUATIONS = [
  { text: "Seu plano de saúde negou uma cirurgia?", slug: "cirurgias-negadas" },
  { text: "Negaram um medicamento de alto custo?", slug: "medicamentos-de-alto-custo" },
  { text: "Você precisa de Home Care?", slug: "home-care" },
  { text: "Negaram um tratamento oncológico?", slug: "tratamentos-oncologicos" },
  { text: "Seu filho precisa de uma terapia especializada?", slug: "exames-e-terapias" },
  { text: "O SUS negou um tratamento?", slug: "medicamentos-de-alto-custo" },
];

export const FAQS = [
  {
    q: "Posso conseguir uma liminar rapidamente?",
    a: "Sim. Em casos de urgência devidamente documentados, é possível obter decisão judicial em prazos que variam de algumas horas a poucos dias, dependendo da comarca e da robustez dos documentos médicos apresentados.",
  },
  {
    q: "Quais documentos preciso enviar?",
    a: "Em regra: relatório médico detalhado com CID e justificativa do tratamento, prescrição, exames, a negativa do plano ou do SUS (ou o número de protocolo), documentos pessoais, carteirinha do plano e comprovantes de pagamento.",
  },
  {
    q: "Atendem todo o Brasil?",
    a: "Sim. O atendimento é realizado em todo o território nacional, com acompanhamento remoto e, quando necessário, apoio de correspondentes locais.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. Todo o processo pode ser conduzido de forma online, do primeiro contato ao acompanhamento processual, com assinatura eletrônica de documentos. Reuniões presenciais no escritório em São Paulo também são possíveis.",
  },
  {
    q: "Quanto tempo demora uma ação?",
    a: "A decisão de urgência costuma ser analisada logo após o protocolo. Já a duração total do processo depende da complexidade do caso e do órgão julgador, mas o tratamento normalmente é garantido desde o início por meio da liminar.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira conversa serve para entender o caso, avaliar os documentos e explicar de forma clara as possibilidades jurídicas, os prazos e os custos envolvidos, sem qualquer compromisso.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ana Paula M.",
    role: "São Paulo/SP",
    text: "Meu pai precisava de home care e o plano negou. Em poucos dias tínhamos a decisão judicial e a equipe em casa. Fomos tratados com muito respeito do início ao fim.",
  },
  {
    name: "Carlos Eduardo S.",
    role: "Presidente Prudente/SP",
    text: "Medicamento de alto custo negado duas vezes. A condução do caso foi técnica, rápida e sempre com explicações claras sobre cada etapa.",
  },
  {
    name: "Juliana R.",
    role: "Campinas/SP",
    text: "Conseguimos a liberação da cirurgia da minha mãe com urgência. O acompanhamento diário fez toda a diferença em um momento tão difícil.",
  },
  {
    name: "Marcos A.",
    role: "Rio de Janeiro/RJ",
    text: "Terapias do meu filho estavam limitadas pelo plano. Hoje ele tem todas as sessões prescritas. Atendimento humano e muito eficiente.",
  },
  {
    name: "Fernanda L.",
    role: "Belo Horizonte/MG",
    text: "Reembolso pago a menor por anos. Fui orientada com transparência e resolvemos a questão sem que eu precisasse me deslocar.",
  },
];

export const CREDENTIALS = [
  { value: "Especialista", label: "em Direito da Saúde" },
  { value: "Pós-Graduando", label: "em Direito Médico e da Saúde" },
  { value: "OAB/SP", label: "Comissão Especial de Direito Médico e Saúde" },
  { value: "Estratégica", label: "Atuação técnica e personalizada" },
];

export const COUNTERS = [
  { value: 500, suffix: "+", label: "Atendimentos realizados" },
  { value: 24, suffix: "h", label: "Análise de casos urgentes" },
  { value: 9, suffix: "", label: "Áreas de atuação especializadas" },
  { value: 100, suffix: "%", label: "Atuação em todo o Brasil" },
];