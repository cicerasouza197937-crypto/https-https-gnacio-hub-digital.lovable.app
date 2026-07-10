import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Clock, Truck } from "lucide-react";

export const Route = createFileRoute("/unidade")({
  component: Unidade,
  head: () => ({
    meta: [
      { title: "Unidade Jardim Europa - Ferragista Inácio Uberlândia" },
      { name: "description", content: "Endereço, mapa e horário da unidade Ferragista Inácio no Jardim Europa, Uberlândia/MG." },
      { property: "og:title", content: "Unidade Jardim Europa - Ferragista Inácio" },
      { property: "og:url", content: "/unidade" },
    ],
    links: [{ rel: "canonical", href: "/unidade" }],
  }),
});

function Unidade() {
  return (
    <>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="container-x py-12">
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">Nossa Unidade</h1>
          <p className="mt-2 max-w-2xl text-secondary-foreground/80">Venha nos visitar — estamos abertos todos os dias.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold uppercase">Endereço</h2>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer noopener" className="mt-3 flex items-start gap-3 text-foreground hover:text-brand">
                <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                <span>{SITE.address}</span>
              </a>
              <a href={`tel:+${SITE.phoneRaw}`} className="mt-3 flex items-center gap-3 text-foreground hover:text-brand">
                <Phone className="h-5 w-5 text-brand" />
                <span>{SITE.phone}</span>
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-5 text-sm">Fale no WhatsApp</a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold uppercase"><Clock className="h-5 w-5 text-brand" /> Horário de funcionamento</h2>
              <ul className="mt-4 divide-y divide-border">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between py-2 text-sm">
                    <span className="font-medium">{h.d}</span>
                    <span className="text-muted-foreground">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold uppercase"><Truck className="h-5 w-5 text-brand" /> Delivery</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fazemos entrega no Jardim Europa e bairros vizinhos de Uberlândia. Consulte a taxa e o prazo pelo WhatsApp.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Localização Ferragista Inácio Jardim Europa"
              src={SITE.mapsEmbed}
              className="h-full min-h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
