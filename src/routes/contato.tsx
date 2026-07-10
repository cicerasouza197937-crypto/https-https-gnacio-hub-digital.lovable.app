import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato - Ferragista Inácio Jardim Europa Uberlândia" },
      { name: "description", content: "Fale com a Ferragista Inácio: WhatsApp, telefone, endereço e horário. Atendemos no Jardim Europa, Uberlândia/MG." },
      { property: "og:title", content: "Contato - Ferragista Inácio" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

function Contato() {
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Fale Conosco</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">Todos os canais em um só lugar. Escolha o melhor para você.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-whatsapp hover:shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-whatsapp/10 text-whatsapp"><MessageCircle className="h-6 w-6" /></span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase">WhatsApp</h3>
            <p className="mt-1 text-sm text-muted-foreground">Resposta rápida, cotação, delivery e dúvidas.</p>
            <p className="mt-3 font-semibold text-whatsapp group-hover:underline">Abrir conversa →</p>
          </a>

          <a href={`tel:+${SITE.phoneRaw}`} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand"><Phone className="h-6 w-6" /></span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase">Telefone</h3>
            <p className="mt-1 text-sm text-muted-foreground">Prefere ligar? Estamos disponíveis no horário de atendimento.</p>
            <p className="mt-3 font-semibold text-brand group-hover:underline">{SITE.phone}</p>
          </a>

          <a href={SITE.mapsLink} target="_blank" rel="noreferrer noopener" className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand"><MapPin className="h-6 w-6" /></span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase">Endereço</h3>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
            <p className="mt-3 font-semibold text-brand group-hover:underline">Abrir no Google Maps →</p>
          </a>

          <div className="rounded-xl border border-border bg-card p-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-brand" />
              <h3 className="font-display text-xl font-bold uppercase">Horário de atendimento</h3>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {SITE.hours.map((h) => (
                <div key={h.d} className="rounded-md border border-border px-3 py-2 text-sm">
                  <div className="font-semibold">{h.d}</div>
                  <div className="text-muted-foreground">{h.h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-x mt-10 overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe title="Mapa Ferragista Inácio" src={SITE.mapsEmbed} className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
