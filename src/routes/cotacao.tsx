import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { useState } from "react";

export const Route = createFileRoute("/cotacao")({
  component: CotacaoPage,
  head: () => ({
    meta: [
      { title: "Cotação Rápida - Ferragista Inácio Jardim Europa" },
      { name: "description", content: "Solicite uma cotação online. Nossa equipe retorna o orçamento no WhatsApp em minutos." },
      { property: "og:title", content: "Cotação - Ferragista Inácio" },
      { property: "og:url", content: "/cotacao" },
    ],
    links: [{ rel: "canonical", href: "/cotacao" }],
  }),
});

function CotacaoPage() {
  const [nome, setNome] = useState("");
  const [itens, setItens] = useState("");
  const [obs, setObs] = useState("");

  const link = () => {
    const msg = `Olá! Meu nome é ${nome || "(cliente)"}.
Gostaria de uma cotação:
${itens}

Observação: ${obs || "-"}`;
    return `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Cotação Rápida</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">
            Liste os itens que você precisa. A gente retorna o orçamento pelo WhatsApp em minutos.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-2xl">
          <form className="space-y-5 rounded-xl border border-border bg-card p-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1 block text-sm font-semibold">Seu nome</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" placeholder="Como podemos te chamar?" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">Itens que deseja cotar *</label>
              <textarea value={itens} onChange={(e) => setItens(e.target.value)} rows={6} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" placeholder="Ex: 2 chuveiros Lorenzetti Top Jet 220V, 10m mangueira de jardim, 1 kit EPI básico..." />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">Observações (opcional)</label>
              <textarea value={obs} onChange={(e) => setObs(e.target.value)} rows={3} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" placeholder="Precisa de delivery? Prazo? Endereço da obra?" />
            </div>
            <a href={link()} target="_blank" rel="noreferrer noopener" className="btn-whatsapp w-full text-base">Enviar cotação pelo WhatsApp</a>
            <p className="text-center text-xs text-muted-foreground">Nenhum dado é armazenado — a solicitação vai direto pro nosso WhatsApp.</p>
          </form>
        </div>
      </section>
    </>
  );
}
