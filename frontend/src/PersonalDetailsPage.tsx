type PersonalDetailsPageProps = {
  onBackHref: string
}

function PersonalDetailsPage({ onBackHref }: PersonalDetailsPageProps) {
  return (
    <main className="details-page">
      <section className="section details-page__hero">
        <p className="details-page__eyebrow">Personal Details</p>
        <h1 className="details-page__title">A bit more about Vivek</h1>
        <p className="details-page__intro">
          I enjoy systems work because it forces clarity: interfaces matter, failure modes matter,
          and operational simplicity matters. My background spans C++, Go, Rust, cloud-native
          services, networking, observability, and developer productivity.
        </p>
        <a className="hero__cta" href={onBackHref}>
          Back to home
        </a>
      </section>

      <section className="section details-grid">
        <article className="details-card">
          <h2>What I like building</h2>
          <p>
            Backend services, infrastructure-facing tools, internal platforms, and software that
            reduces complexity for both users and engineers.
          </p>
        </article>
        <article className="details-card">
          <h2>How I work</h2>
          <p>
            I prefer small, verifiable changes, strong local feedback loops, and designs that are
            straightforward to operate in production.
          </p>
        </article>
        <article className="details-card">
          <h2>Areas of interest</h2>
          <p>
            Systems programming, distributed systems, networking, observability, Linux, and
            practical uses of AI to accelerate engineering work.
          </p>
        </article>
        <article className="details-card">
          <h2>Outside of work</h2>
          <p>
            I like tooling, clean workflows, writing things down clearly, and understanding how
            systems behave under real-world constraints.
          </p>
        </article>
      </section>
    </main>
  )
}

export default PersonalDetailsPage
