import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

type Post = { title: string; date: string; body: string[] };

const CONTENT: Record<string, Post> = {
  "como-escolher-chuveiro-eletrico": {
    title: "Como escolher o chuveiro elétrico certo para sua casa",
    date: "10/07/2026",
    body: [
      "Escolher um bom chuveiro não é só olhar o design. O que faz diferença no banho é a combinação de três fatores: potência, voltagem e tipo de resistência.",
      "A **voltagem** precisa bater com a instalação da sua casa (110V ou 220V). Ligar um chuveiro 220V em rede 110V vai fazer ele esquentar pouco; o contrário queima o aparelho na hora.",
      "A **potência** determina a força do jato quente. Modelos de 5500W a 7500W são os mais comuns para clima frio; abaixo disso ficam melhores em regiões quentes.",
      "A **resistência** blindada, como a Loren Ultra da Lorenzetti, dura mais e tem melhor desempenho. Vale o investimento.",
      "Na nossa loja você encontra os modelos Top Jet 100, Bella Ducha 4T e Maxi Ducha, todos com garantia e a preço justo. Fale com a gente pelo WhatsApp para uma indicação personalizada.",
    ],
  },
  "epi-obra-basico": {
    title: "EPI's básicos que não podem faltar na sua obra",
    date: "05/07/2026",
    body: [
      "Segurança na obra começa muito antes do primeiro tijolo. Todo trabalhador — profissional ou o dono da casa que resolveu botar a mão na massa — precisa de EPI adequado.",
      "**Capacete:** protege contra queda de objetos. Item obrigatório em qualquer canteiro.",
      "**Luvas:** existem para corte, impacto e produtos químicos. Escolha conforme a atividade.",
      "**Óculos de proteção:** essencial ao usar esmerilhadeira, furadeira ou serra.",
      "**Protetor auricular:** ruídos acima de 85dB causam perda auditiva. Ferramentas elétricas passam disso fácil.",
      "**Calçado de segurança:** sola antiderrapante e biqueira de composite são o mínimo.",
      "Passa aqui na loja: temos kits completos e as marcas mais confiáveis do mercado.",
    ],
  },
  "diferenca-mangueira-jardim-gas": {
    title: "Mangueira de jardim, de gás e de nível: qual a diferença?",
    date: "28/06/2026",
    body: [
      "Parece detalhe, mas usar a mangueira errada pode causar prejuízo — ou até acidente.",
      "**Mangueira de jardim:** feita para água, resistente a raios UV e dobras. Ideal para regar plantas, lavar carro e áreas externas.",
      "**Mangueira de gás:** homologada pelo INMETRO, com malha reforçada, para conectar botijão ao fogão. Nunca improvise com mangueira comum.",
      "**Mangueira de nível:** transparente e flexível, usada por pedreiros para conferir alinhamento e nível em construções.",
      "Cada uma tem material, pressão e comprimento específicos. Na loja você encontra todos os tipos, medidas e adaptadores.",
    ],
  },
  "checklist-camping-fim-de-semana": {
    title: "Checklist essencial para o camping de fim de semana",
    date: "20/06/2026",
    body: [
      "Fim de semana chegando e vontade de fugir da cidade? Antes de montar a mochila, confere essa lista rápida:",
      "**Barraca e isolante térmico:** o básico do básico. Nunca durma direto no chão.",
      "**Lanterna e pilhas extras:** de cabeça, se possível — deixa as mãos livres.",
      "**Churrasqueira e carvão:** temos churrasqueiras de carrinho que facilitam o transporte.",
      "**Kit ferramentas:** canivete, corda, fita e alicate resolvem 90% dos perrengues.",
      "**Artigos de pesca:** anzol, linha, isca e caixa organizadora, se o roteiro incluir rio ou lago.",
      "Passa aqui e monta seu kit completo. A gente separa tudo pra você.",
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = CONTENT[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData?.post.title ?? "Blog";
    return {
      meta: [
        { title: `${title} - Blog Ferragista Inácio` },
        { name: "description", content: loaderData?.post.body[0] ?? "" },
        { property: "og:title", content: title },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Post não encontrado</h1>
      <Link to="/blog" className="mt-4 inline-block text-brand hover:underline">Voltar ao blog</Link>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-x max-w-3xl py-12 md:py-20">
      <Link to="/blog" className="text-sm font-semibold text-brand hover:underline">← Voltar ao blog</Link>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase md:text-4xl">{post.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Publicado em {post.date}</p>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-foreground/90">
        {post.body.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <p className="font-semibold">Gostou do conteúdo?</p>
        <p className="text-sm text-muted-foreground">Fala com a gente — te ajudamos a escolher o produto certo.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-4 text-sm">WhatsApp</a>
      </div>
    </article>
  );
}
