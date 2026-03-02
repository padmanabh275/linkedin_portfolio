import DigitalTwinChat from "@/components/digital-twin-chat";

export default function Home() {
  const coreSkills = [
    "AI for Business",
    "LangChain",
    "Predictive Forecasting",
    "Lead Prioritization",
    "Customer Segmentation",
    "Multi-model AI",
  ];

  const careerMilestones = [
    {
      period: "Sep 2025 - Present",
      role: "Founder",
      company: "Saleswave Consulting",
      location: "India",
      description:
        "Leading AI-led sales transformation initiatives that help organizations strengthen bottom lines through measurable commercial impact.",
    },
    {
      period: "Oct 2022 - Aug 2025",
      role: "Senior Consultant",
      company: "Deloitte",
      location: "India",
      description:
        "Delivered enterprise consulting engagements by combining analytics, business strategy, and execution rigor across complex programs.",
    },
    {
      period: "Jan 2020 - Jul 2022",
      role: "Technical Consultant",
      company: "Accord Business Group",
      location: "Saudi Arabia",
      description:
        "Built technical and analytical solutions to support decision-making and business performance improvements.",
    },
    {
      period: "Feb 2018 - Jan 2020",
      role: "Consultant",
      company: "Saleswave",
      location: "Ahmedabad, India",
      description:
        "Worked on sales consulting in Gujarat and developed analytics projects using R and related tools with senior management stakeholders.",
    },
  ];

  const futurePortfolioLinks = [
    {
      title: "AI Revenue Forecasting Case Study",
      subtitle: "From raw sales data to forward-looking growth decisions",
      href: "#",
    },
    {
      title: "Intelligent Lead Prioritization Engine",
      subtitle: "Scoring opportunities to improve conversion and team efficiency",
      href: "#",
    },
    {
      title: "Sales Enablement Transformation Program",
      subtitle: "Embedding analytics into frontline decision workflows",
      href: "#",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(34,197,94,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            PADMANABH
          </p>
          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#journey">
              Journey
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#digital-twin">
              Digital Twin
            </a>
            <a className="transition hover:text-white" href="#portfolio">
              Portfolio
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 md:py-24">
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
              Enterprise Meets Edgy
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Padmanabh Bosamia
            </h1>
            <p className="text-xl font-medium text-cyan-100">
              Founder at Saleswave - Driving Sales Growth with AI
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              I help companies improve profitability through AI-powered sales
              strategy, analytics, and execution systems. My focus is simple:
              measurable business outcomes, not vanity innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Portfolio Roadmap
              </a>
              <a
                href="https://www.linkedin.com/in/padmanabhbosamia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Visit LinkedIn
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-30px_rgba(56,189,248,0.45)] backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Professional Snapshot
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-3xl font-semibold text-white">20+ years</p>
                <p className="text-sm text-slate-300">
                  Consulting, sales, and business growth experience
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-3xl font-semibold text-white">2.5+ years</p>
                <p className="text-sm text-slate-300">
                  Enterprise consulting experience at Deloitte
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-3xl font-semibold text-white">
                  Ahmedabad, India
                </p>
                <p className="text-sm text-slate-300">
                  Building AI-first growth systems globally
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About Me
          </p>
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xl leading-relaxed text-white">
              As the founder of Saleswave, I am on a mission to transform how
              organizations achieve growth using artificial intelligence and
              advanced analytics.
            </p>
            <p className="leading-relaxed text-slate-300">
              I combine technical depth in Python, neural networks, R, and SAS
              with hands-on business leadership to design systems that improve
              conversion rates, unlock revenue opportunities, and build
              sustainable competitive advantage.
            </p>
            <p className="leading-relaxed text-slate-300">
              Every engagement is grounded in practical execution and measurable
              outcomes, so innovation directly contributes to profitability and
              long-term success.
            </p>
          </div>
        </section>

        <section id="journey" className="space-y-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Career Journey
            </p>
            <span className="text-xs text-slate-400">
              Leadership, consulting, and technical depth over two decades
            </span>
          </div>
          <div className="grid gap-5">
            {careerMilestones.map((milestone) => (
              <article
                key={`${milestone.period}-${milestone.company}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
                  {milestone.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {milestone.role}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {milestone.company} · {milestone.location}
                </p>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Core Skills
          </p>
          <div className="flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/5 p-7">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="digital-twin" className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              AI Digital Twin
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Ask my AI twin about my career, background, and focus areas.
            </h2>
            <p className="leading-relaxed text-slate-300">
              This conversational assistant is grounded in my real profile and
              tuned for concise, business-first responses.
            </p>
          </div>
          <DigitalTwinChat />
        </section>

        <section id="portfolio" className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Portfolio (Future-Ready)
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Upcoming case studies built around AI-led commercial outcomes.
            </h2>
            <p className="leading-relaxed text-slate-300">
              These placeholders are structured for future project pages,
              client-impact snapshots, implementation architecture, and result
              metrics.
            </p>
          </div>
          <div className="space-y-4">
            {futurePortfolioLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/50 hover:bg-cyan-300/5"
              >
                <p className="text-lg font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                <p className="mt-2 text-sm text-slate-400">
                  Add project URL when available
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Padmanabh Bosamia. Built with Next.js.
          </p>
          <a
            href="https://www.linkedin.com/in/padmanabhbosamia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
          >
            www.linkedin.com/in/padmanabhbosamia
          </a>
        </div>
      </footer>
    </div>
  );
}
