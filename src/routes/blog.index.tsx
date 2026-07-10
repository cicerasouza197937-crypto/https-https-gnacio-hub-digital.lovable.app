import { createFileRoute, Link } from "@tanstack/react-router";

const POSTS = [
  {
    slug: "como-escolher-chuveiro-eletrico",
    title: "Como escolher o chuveiro elétrico certo para sua casa",
    excerpt: "Potência, voltagem, resistência e economia: um guia prático para acertar na compra do seu novo chuveiro.",
    date: "10/07/2026",
    tags: ["Elétrica", "Guia"],
  },
  {
    slug: "epi-obra-basico",
    title: "EPI's básicos que não podem faltar na sua obra",
    excerpt: "Capacete, luva, óculos, protetor auricular e bota. Entenda a função de cada equipamento e por que investir em segurança.",
    date: "05/07/2026",
    tags: ["EPI", "Segurança"],
  },
  {
    slug: "diferenca-mangueira-jardim-gas",
    title: "Mangueira de jardim, de gás e de nível: qual a diferença?",
    excerpt: "Nem toda mangueira serve pra tudo. Descubra qual é ideal para cada uso e evite acidentes em casa.",
    date: "28/06/2026",
    tags: ["Hidráulica", "Dica"],
  },
  {
    slug: "checklist-camping-fim-de-semana",
    title: "Checklist essencial para o camping de fim de semana",
    excerpt: "Da lanterna à churrasqueira, monte a mala perfeita pra curtir a natureza sem esquecer nada.",
    date: "20/06/2026",
    tags: ["Camping", "Lazer"],
  },
];

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog - Dicas de Ferragens, Obra e Ferramentas | Ferragista Inácio" },
      { name: "description", content: "Guias práticos e dicas para obra, reforma e manutenção. Conteúdo produzido pela equipe da Ferragista Inácio em Uberlândia." },
      { property: "og:title", content: "Blog - Ferragista Inácio" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  loader: () => ({ posts: POSTS }),
});

function BlogIndex() {
  const { posts } = Route.useLoaderData();
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Blog Ferragista Inácio</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">
            Dicas, guias e informações reais de quem entende de ferragens, obra e manutenção.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand">{t}</span>
                ))}
              </div>
              <h2 className="mt-3 font-display text-xl font-bold group-hover:text-brand">{p.title}</h2>
              <p className="mt-2 flex-1 text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{p.date}</span>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="font-semibold text-brand hover:underline">Ler mais →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
