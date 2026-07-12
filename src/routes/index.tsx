import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { PRODUCTS, LOGO_URL } from "@/lib/products";
import { ArrowRight, Truck, Clock, Wrench, ShieldCheck, Star, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ferragista Inácio Jardim Europa - Ferragens em Uberlândia/MG" },
      { name: "description", content: "Ferramentas, material hidráulico e elétrico, EPI's, pesca e camping no Jardim Europa, Uberlândia. Aberto todos os dias, com delivery." },
      { property: "og:title", content: "Ferragista Inácio Jardim Europa - Ferragens em Uberlândia/MG" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_14px)]" />
        <div className="container-x relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
              <MapPin className="h-3.5 w-3.5" /> Jardim Europa • Uberlândia/MG
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] md:text-6xl">
              Sua ferragem <span className="text-accent-yellow">completa</span> pertinho de você.
            </h1>
            <p className="mt-5 max-w-xl text-secondary-foreground/80">
              Ferramentas, material hidráulico, elétrico, EPI's, pesca e camping. Atendimento rápido, preço justo e{" "}
              <strong className="text-accent-yellow">aberto todos os dias</strong> — inclusive fins de semana.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp">Fale no WhatsApp</a>
              <Link to="/produtos" className="btn-primary">Ver produtos <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/cotacao" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">
                Solicitar cotação
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                { i: <Clock className="h-5 w-5" />, t: "Aberto 7 dias" },
                { i: <Truck className="h-5 w-5" />, t: "Delivery local" },
                { i: <Wrench className="h-5 w-5" />, t: "Ferramentas pro" },
                { i: <ShieldCheck className="h-5 w-5" />, t: "EPI's completos" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-accent-yellow">{b.i}</span>
                  <span className="font-medium">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {PRODUCTS.slice(0, 4).map((p) => (
                <div key={p.slug} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                  <img src={p.image} alt={p.name} className="aspect-square w-full rounded-lg object-cover transition group-hover:scale-105" loading="lazy" />
                  <div className="px-2 pb-1 pt-2 text-xs">
                    <div className="line-clamp-1 font-semibold">{p.name}</div>
                    {p.price && <div className="text-accent-yellow">{p.price}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">O que você encontra aqui</h2>
            <p className="mt-2 text-muted-foreground">Um mix completo para obra, reforma, manutenção e lazer.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.services.map((s) => (
              <div key={s} className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-brand hover:shadow-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand/10 text-brand"><Wrench className="h-4 w-4" /></span>
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS DESTAQUE */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Destaques da loja</h2>
              <p className="mt-2 text-muted-foreground">Produtos e ofertas mais procurados esta semana.</p>
            </div>
            <Link to="/produtos" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg font-bold">{p.name}</h3>
                  {p.price && <div className="mt-1 text-xl font-bold text-secondary">{p.price}</div>}
                  <a href={`${SITE.whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.name}`)}`} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-4 w-full text-sm">
                    Consultar disponibilidade
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">O que dizem no Google</h2>
            <p className="mt-2 text-muted-foreground">Avaliações reais de clientes que passam pela loja.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex text-accent-yellow">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground">Baseado nas avaliações do Google</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Para conferir todas as avaliações atualizadas da Ferragista Inácio no Jardim Europa, acesse diretamente
                nossa página no Google Maps — lá você encontra notas, comentários e fotos enviadas pelos clientes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={SITE.reviewsLink} target="_blank" rel="noreferrer noopener" className="btn-primary text-sm">
                  Ver avaliações no Google
                </a>
                <a href={SITE.mapsLink} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">
                  Abrir no Google Maps
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Localização Ferragista Inácio"
                src={SITE.mapsEmbed}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-brand text-brand-foreground">
        <div className="container-x grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Precisa agora? Chama no WhatsApp.</h2>
            <p className="mt-2 text-brand-foreground/85">Cotação rápida, delivery na região e atendimento humano.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp">WhatsApp</a>
            <a href={`tel:+${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/25">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
