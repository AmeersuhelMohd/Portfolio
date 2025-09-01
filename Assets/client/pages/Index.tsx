export default function Index() {
  return (
    <div className="space-y-12" id="overview">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}

function InfoBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground ring-1 ring-inset ring-border/70">
      {children}
    </span>
  );
}

function Section({ id, title, children, subtitle }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="grid gap-6">
        {children}
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/70 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

function Hero() {
  return (
    <Card>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ameer Suhel Mohammed
          </h1>
          <p className="text-muted-foreground">
            Health Informatics · SAP S/4 HANA & ETL Developer · Data & Analytics
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a
              className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
              href="mailto:Ameersuhel123@gmail.com"
            >
              Ameersuhel123@gmail.com
            </a>
            <a
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/15"
              href="tel:+13177375890"
            >
              ☎ +1 (317) 737-5890
            </a>
            <InfoBadge>LinkedIn</InfoBadge>
            <InfoBadge>GitHub</InfoBadge>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-inset ring-border/60">
            <div className="text-2xl font-bold">3+ yrs</div>
            <div className="text-xs text-muted-foreground">Data & Dev</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-inset ring-border/60">
            <div className="text-2xl font-bold">Health</div>
            <div className="text-xs text-muted-foreground">Informatics</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-inset ring-border/60">
            <div className="text-2xl font-bold">ETL</div>
            <div className="text-xs text-muted-foreground">SSIS · Python</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-inset ring-border/60">
            <div className="text-2xl font-bold">SAP</div>
            <div className="text-xs text-muted-foreground">S/4 HANA</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function TimelineItem({ role, org, period, bullets }: { role: string; org: string; period: string; bullets: string[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full bg-primary shadow-sm" />
      <div className="absolute left-0 top-5 bottom-0 w-px -translate-x-1.5 bg-border" />
      <div className="grid gap-2 rounded-lg border border-border/70 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold">
            {role} – <span className="text-foreground/90">{org}</span>
          </h3>
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>
        <ul className="ml-4 list-disc space-y-1 text-sm text-foreground/90">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <TimelineItem
        role="EPIC – SAP S/4 HANA Developer & ETL Developer"
        org="Eskenazi Health"
        period="April 2023 – Present"
        bullets={[
          "Configured and maintained Epic databases, SAP S/4 HANA databases, and SSIS servers, ensuring optimal performance, health monitoring, and adherence to documentation standards.",
          "Designed, modified, and monitored ETL/ELT processes to meet organizational needs, developed new workflows for integrating additional data sources needed for Power BI implementation, and ensured daily process completion.",
          "Developed SAP S/4 HANA data models tailored to operational requirements, collaborated with Analytics teams to troubleshoot issues, and optimized queries for efficiency.",
          "Ensured secure and accurate SQL database access, participated in change control processes for technical activities, and provided on-call support for troubleshooting database & SSIS package issues.",
        ]}
      />
      <TimelineItem
        role="Research Assistant"
        org="Herman B Wells Center (IU School of Medicine)"
        period="Oct 2021 – April 2024"
        bullets={[
          "Conducted preclinical studies and genotyping on over 300 mice disease samples of cancer. Collected, analyzed, processed, and reported clinical trial research data to the Principal Investigator.",
          "Applied PCR and gel electrophoresis data for molecular differentiation of DNA, RNA, and proteins, aiding in detecting 75% of cancer drug-induced DNA changes in mice.",
          "Improved data quality and integrated it into appropriate databases and conducted research in compliance with standards and regulations.",
          "Maintained regulatory documents and comprehensive laboratory records. Effectively managed data from multiple studies, including the generation of research reports.",
        ]}
      />
      <TimelineItem
        role="Data Analyst"
        org="HANDS in Autism (IU School of Medicine)"
        period="Aug 2022 – Dec 2022"
        bullets={[
          "Contributed to the successful execution of multiple clinical research projects focused on autism spectrum disorder (ASD) by conducting data collection and improved the accuracy rate by 20%.",
          "Utilized REDCap and CERNER to collect, store, and analyze research data with creation of data repositories.",
          "Adhered to rigorous SOPs to maintain protocol compliance and ensure the highest quality of research data, serving as liaison for clinicians’ program protocols compliance.",
          "Conducted retrospective chart reviews to identify protocol-eligible patients and maintained study-related documents (screening logs, enrollment logs, regulatory binders, etc.).",
          "Performed medical chart reviews to enter data into Electronic Data Capture (EDC) systems and resolved queries promptly for research integrity.",
        ]}
      />
      <TimelineItem
        role="Research Assistant"
        org="Indiana University & BHIRC"
        period="Oct 2021 – April 2024"
        bullets={[
          "Led a team of six for data collection from federal agencies and regions of the United States, populating 80% of the database for the BioHealth Informatics department using Python and SQL.",
          "Collaborated with the clinical project manager to meet timelines, increasing data collection from 50% to 70%, and integrating standardized state datasets for program accreditation.",
          "Created and updated five data extraction scripts, delivering customized reports aligned with stakeholders’ needs.",
        ]}
      />
      <TimelineItem
        role="Clinical Informatics Pharmacist"
        org="N.R.I General Hospital"
        period="June 2020 – May 2021"
        bullets={[
          "Collaborated with medical teams to update electronic medical records, ensuring accurate patient information and aiding clinical documentation.",
          "Improved prescription accuracy and patient outcomes by offering drug information, regularly reviewing medication charts, and aligning with safety standards.",
          "Supported patients by cross-referencing medical records, safety standards, and insurance requirements, ensuring comprehensive care.",
          "Contributed to pharmacy operations through medication dispensing, prescription refills, trend analysis, and database management.",
        ]}
      />
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <Card>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold">Master of Science in Health Informatics – Indiana University</h3>
          <span className="text-xs text-muted-foreground">Aug 2021 – May 2023</span>
        </div>
      </Card>
      <Card>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold">Bachelor of Pharmacy – Acharya Nagarjuna University</h3>
          <span className="text-xs text-muted-foreground">Aug 2016 – May 2020</span>
        </div>
      </Card>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title="Research & Projects"
      subtitle="Selected work across clinical research and data systems"
    >
      <Card>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold">Clinical Research Coordinator – Autism Spectrum Disorder Studies</h3>
        </div>
        <ul className="mt-3 ml-4 list-disc space-y-1 text-sm">
          <li>Managed REDCap and Cerner data repositories, chart reviews, and EDC systems.</li>
          <li>Improved data accuracy by 20% and ensured protocol compliance for clinical trials.</li>
        </ul>
      </Card>
    </Section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
      {children}
    </span>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Card>
        <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">Healthcare</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "HIPAA",
            "HL7",
            "ICH",
            "GCP",
            "IRB",
            "EPIC Health Systems",
          ].map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">Technical</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "SQL Server Integration Services",
            "SAP S/4 HANA",
            "SQL",
            "SPSS",
            "R-Studio",
            "Power BI",
            "Python",
            "SAS",
            "RedCap",
            "Qualtrics",
            "Tableau",
            "GitHub",
          ].map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Card>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[ 
          "EPIC – Cogito Fundamentals (COG170)",
          "EPIC – Clarity data model (CLR110)",
          "EPIC – Caboodle data model (CDW110)",
          "EPIC – Clinical Data model (COG240)",
          "Good Clinical Practice (GCP) and Biomedical Researcher",
        ].map((c) => (
          <div key={c} className="rounded-lg border border-border/70 bg-white p-4 text-sm shadow-sm">
            {c}
          </div>
        ))}
      </div>
    </Section>
  );
}
