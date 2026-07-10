import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/produtos")({
  component: ProdutosPage,
  head: () => ({
    meta: [
      { title: "Produtos - Ferragista Inácio Jardim Europa" },
      { name: "description", content: "Catálogo de produtos da Ferragista Inácio: ferramentas elétricas, chuveiros, hidráulica, elétrica, EPI's e mais. Cotação direta no WhatsApp." },
      { property: "og:title", content: "Produtos - Ferragista Inácio" },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
});

function ProdutosPage() {
  const cats = useMemo(() => ["Todos", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))], []);
  const [cat, setCat] = useState("Todos");
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Nossos Produtos</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">
            Selecionamos o que temos hoje na loja. Não achou algo? Chame no WhatsApp — trabalhamos com
            uma variedade enorme além do que está listado aqui.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  cat === c ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:border-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand">{p.category}</div>
                  <h2 className="mt-1 font-display text-lg font-bold">{p.name}</h2>
                  {p.price && <div className="mt-1 text-xl font-bold text-secondary">{p.price}</div>}
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent(`Olá! Quero cotar: ${p.name}`)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-whatsapp mt-5 w-full text-sm"
                  >
                    Cotar este produto
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
