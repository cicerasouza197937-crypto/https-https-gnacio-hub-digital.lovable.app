import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const FAQ = [
  {
    q: "Vocês entregam na minha região?",
    a: "Sim, atendemos com delivery no Jardim Europa e bairros vizinhos de Uberlândia. O prazo e a taxa dependem da distância — consulte pelo WhatsApp.",
  },
  {
    q: "Abrem aos finais de semana?",
    a: "Sim! Estamos abertos aos sábados das 08:00 às 16:00 e aos domingos das 08:00 às 12:00.",
  },
  {
    q: "Aceitam cartão e Pix?",
    a: "Sim. Aceitamos dinheiro, Pix, cartão de crédito e débito. Pix costuma ter o melhor preço.",
  },
  {
    q: "Fazem cotação por WhatsApp?",
    a: "Fazemos! Mande a lista de itens ou uma foto do produto pelo WhatsApp e retornamos o orçamento rapidinho.",
  },
  {
    q: "Se eu não achar um produto no site, posso pedir?",
    a: "Com certeza. Nosso catálogo online mostra só uma parte. Na loja física temos uma variedade muito maior — pergunte à nossa equipe.",
  },
  {
    q: "Trocam produtos com defeito?",
    a: "Sim, seguindo o prazo e as condições do fabricante. Guarde a nota fiscal e a embalagem.",
  },
  {
    q: "Trabalham com material para pesca e camping?",
    a: "Sim, temos linha completa: anzóis, linhas, iscas, lanternas, churrasqueiras, cordas e mais.",
  },
];

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ - Perguntas Frequentes | Ferragista Inácio" },
      { name: "description", content: "Perguntas frequentes sobre horário, entrega, formas de pagamento, cotação e mais. Ferragista Inácio, Jardim Europa - Uberlândia." },
      { property: "og:title", content: "FAQ - Ferragista Inácio" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Perguntas Frequentes</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">Tire suas dúvidas rapidinho — se não estiver aqui, chama no WhatsApp.</p>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-3">
          {FAQ.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-muted/40"
              >
                <span>{f.q}</span>
                <span className={`text-brand transition ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && <div className="border-t border-border px-5 py-4 text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
