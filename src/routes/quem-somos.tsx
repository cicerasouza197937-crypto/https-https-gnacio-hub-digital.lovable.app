import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LOGO_URL } from "@/lib/products";

export const Route = createFileRoute("/quem-somos")({
  component: QuemSomos,
  head: () => ({
    meta: [
      { title: "Quem Somos - Ferragista Inácio Jardim Europa" },
      { name: "description", content: "Conheça a história da Ferragista Inácio, uma referência em ferragens e ferramentas no Jardim Europa, Uberlândia/MG." },
      { property: "og:title", content: "Quem Somos - Ferragista Inácio" },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
});

function QuemSomos() {
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Quem Somos</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">A ferragem do bairro que virou referência da região.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <img src={LOGO_URL} alt="Comercial Inácio Ferragista" className="w-full max-w-sm rounded-xl border border-border shadow-md" />
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg">
              <strong>Comercial Inácio Ferragista</strong> nasceu no coração do <strong>Jardim Europa, em Uberlândia/MG</strong>,
              com um propósito simples: oferecer atendimento próximo, produtos confiáveis e preço justo para quem
              cuida da casa, faz obra, trabalha na construção civil ou curte o mundo pesca e camping.
            </p>
            <p>
              Ao longo dos anos, viramos ponto de referência no bairro por sempre ter em estoque o que ninguém acha
              — do <em>parafuso avulso</em> à <em>ferramenta elétrica profissional</em>. Nossa equipe conhece cada
              cliente pelo nome e cada produto pela função. Não vendemos apenas ferragens: entregamos solução.
            </p>
            <h2 className="mt-8 font-display text-2xl font-bold uppercase">Nossos valores</h2>
            <ul>
              <li><strong>Atendimento humano:</strong> quem sabe do serviço, quem entende do produto.</li>
              <li><strong>Preço honesto:</strong> orçamento transparente e cotação rápida.</li>
              <li><strong>Disponibilidade:</strong> abrimos <strong>todos os dias</strong>, inclusive fins de semana.</li>
              <li><strong>Delivery local:</strong> levamos até você no Jardim Europa e bairros vizinhos.</li>
            </ul>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp not-prose mt-6 text-sm">
              Fale com a nossa equipe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
