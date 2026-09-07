import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Search, Sparkles } from "lucide-react";
import { SiteHeader, SiteFooter, ServiceCard, ProofStrip } from "@/components/site-shell";
import { services, testimonials } from "@/lib/site-data";
import { defaultDescription, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Practical Technology for Business Growth",
  description: defaultDescription,
});

const selectedExperience = [
  { name: "JaSure", href: "https://jasure.ca/", description: "Management consulting firm", logo: "/client-logos/jasure.png" },
  { name: "KOY Immigration", href: "https://koyimmigration.com/", description: "Canadian immigration services", logo: "/client-logos/koy-immigration.png" },
  { name: "Daystar Leadership Academy", href: "https://dlaonline.org/", description: "Leadership development and learning", logo: "/client-logos/dla-online.png" },
  { name: "SB Visas", href: "https://sbvisas.com/", description: "Visa and immigration support", logo: "/client-logos/sb-visas.png" },
  { name: "Association of Corporate Trustees", href: "https://corporatetrustees.org.ng/", description: "Professional association for corporate trustees", logo: "/client-logos/corporate-trustees.png" },
  { name: "Aspen Healthcare Staffing", href: "https://aspenhealthcarestaffing.com/", description: "Healthcare staffing services", logo: "/client-logos/aspen-healthcare.png" },
];

export default function Home(){return <main>
  <SiteHeader/>
  <section className="hero" id="top"><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow"><Sparkles size={16}/> Practical technology. Measurable progress.</p><h1>Technology that helps your business <span>work better and grow.</span></h1><p className="lede">HezEdge designs, connects and improves the digital systems behind ambitious businesses, from websites and search visibility to automation, cloud infrastructure and strategic guidance.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">Discuss your project <ArrowRight size={18}/></Link><Link className="button button-secondary" href="/services/seo-digital-growth"><Search size={18}/> Get a free SEO audit</Link></div><ul className="trust-list"><li><Check size={16}/> Clear scope</li><li><Check size={16}/> Solutions shaped around your budget</li><li><Check size={16}/> Ongoing technical support</li></ul></div><div className="hero-system" aria-label="HezEdge connected growth system"><div className="system-core"><span>HE</span><strong>One technology partner</strong><small>Strategy to delivery</small></div><div className="system-chip chip-one">Build</div><div className="system-chip chip-two">Grow</div><div className="system-chip chip-three">Automate</div><div className="system-chip chip-four">Scale</div></div></div></section>
  <ProofStrip/>
  <section className="section" id="services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Six connected capabilities</p><h2>Start with the problem your business needs to solve.</h2></div><p>You do not need to diagnose the technology first. Choose the outcome that matters, and we will help define the right route.</p></div><div className="service-grid">{services.map(service=><ServiceCard key={service.slug} service={service}/>)}</div></div></section>
  <section className="section section-ink" id="approach"><div className="shell approach-grid"><div><p className="eyebrow eyebrow-light">A lower-risk way to move forward</p><h2>Clarity before complexity.</h2><p className="lede muted-light">Every engagement begins by understanding the business outcome, the users affected, your existing systems and the constraints that matter.</p></div><ol className="steps">{[["Discover","We examine your goals, users, processes and current technology."],["Define","You receive a clear scope, priorities, delivery path and agreed measures of success."],["Deliver","We build, test and launch the solution with transparent progress."],["Improve","We monitor, support and refine where ongoing partnership adds value."]].map((step,i)=><li key={step[0]}><span>0{i+1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></li>)}</ol></div></section>
  <section className="section" id="work"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Selected experience</p><h2>Work grounded in real business needs.</h2></div><p>HezEdge has supported organisations in insurance, immigration, digital services, professional bodies and healthcare.</p></div><div className="work-grid">{selectedExperience.map((project,index)=><a className={`work-card work-${(index%4)+1}`} key={project.href} href={project.href} target="_blank" rel="noreferrer"><span>0{index+1}</span><div className="work-card__logo"><img src={project.logo} alt={`${project.name} logo`}/></div><h3>{project.name}</h3><p>{project.description}</p></a>)}</div></div></section>
  <section className="section section-soft" id="testimonials"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Client perspective</p><h2>What working together looks like.</h2></div></div><div className="quote-grid">{testimonials.map(q=><figure key={q.name}><blockquote>“{q.quote}”</blockquote><figcaption><strong>{q.name}</strong><span>{q.context}</span></figcaption></figure>)}</div></div></section>
  <section className="cta-band"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Your next useful step</p><h2>Tell us what is slowing your business down.</h2><p>We will help you identify the right service, scope and practical starting point.</p></div><Link className="button button-white" href="/contact">Start a conversation <ArrowRight size={18}/></Link></div></section>
  <SiteFooter/>
</main>}
