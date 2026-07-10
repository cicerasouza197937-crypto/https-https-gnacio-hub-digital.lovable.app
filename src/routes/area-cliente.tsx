import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Lock, MessageCircle, ClipboardList, Truck } from "lucide-react";

export const Route = createFileRoute("/area-cliente")({
  component: AreaCliente,
  head: () => ({
    meta: [
      { title: "Área do Cliente - Ferragista Inácio Jardim Europa" },
      { name: "description", content: "Acompanhe pedidos, cotações e histórico de compras da Ferragista Inácio, tudo pelo WhatsApp." },
      { property: "og:title", content: "Área do Cliente - Ferragista Inácio" },
      { property: "og:url", content: "/area-cliente" },
    ],
    links: [{ rel: "canonical", href: "/area-cliente" }],
  }),
});

function AreaCliente() {
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Área do Cliente</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">Seu atendimento personalizado, direto no nosso WhatsApp.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { i: <ClipboardList className="h-6 w-6" />, t: "Acompanhar pedido", d: "Consulte o status do seu pedido em tempo real com nossa equipe.", cta: "Consultar pedido", msg: "Olá! Quero acompanhar meu pedido." },
            { i: <MessageCircle className="h-6 w-6" />, t: "Enviar cotação", d: "Envie a lista de materiais e receba o orçamento pelo WhatsApp.", cta: "Enviar cotação", msg: "Olá! Quero solicitar uma cotação." },
            { i: <Truck className="h-6 w-6" />, t: "Solicitar entrega", d: "Delivery no Jardim Europa e região. Consulte taxa e prazo.", cta: "Falar sobre entrega", msg: "Olá! Quero saber sobre delivery." },
            { i: <Lock className="h-6 w-6" />, t: "Cliente cadastrado", d: "Já é cliente? Fale com a equipe para consultar histórico e condições especiais.", cta: "Acessar atendimento", msg: "Olá! Sou cliente cadastrado e quero atendimento." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">{c.i}</span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              <a href={`${SITE.whatsapp}?text=${encodeURIComponent(c.msg)}`} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-4 text-sm">
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
