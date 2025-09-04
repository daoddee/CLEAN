"use client";
import "../../styles/globals.css";

export default function HomePage() {
  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    alert(json.ok ? "Thanks! We'll be in touch within 1 business day." : `Submission failed: ${json.error || "Unknown error"}`);
    if (json.ok) form.reset();
  }

  return (
    <>
      <header>
        <div className="container navbar">
          <a className="brand" href="/">
            <img src="/logo.jpg" alt="CleanHomes logo" />
            <span>CleanHomes</span>
          </a>
          <nav>
            <a className="btn" href="#contact">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container">
            <div className="card" style={{ marginBottom: "1rem" }}>
              <strong>Call us:</strong> <a href="tel:+447365155414">+44 7365 155414</a>
            </div>
            <h1>Spotless Homes. Seamless Service.</h1>
            <p>
              We deliver high-velocity residential and end-of-tenancy cleaning across the UK.
              Book in minutes. Enjoy a pristine space, every time.
            </p>
            <a className="btn" href="#contact">Book a clean</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Why CleanHomes</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <div className="card">
                <h3>Trusted & Insured</h3>
                <p>Vetted pros with full liability cover. Zero operational surprises.</p>
              </div>
              <div className="card">
                <h3>Quality-First</h3>
                <p>Rigorous checklists, QA spot checks, and service SLAs you can bank on.</p>
              </div>
              <div className="card">
                <h3>Flexible Scheduling</h3>
                <p>One-off deep cleans or recurring packages aligned to your cadence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section" style={{ background: "var(--brand-blue)" }}>
          <div className="container">
            <h2 className="section-title">Request a Quote</h2>
            <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
              <form className="form card" onSubmit={submitForm}>
                <input className="input" name="name" placeholder="Full name" required />
                <input className="input" type="email" name="email" placeholder="Email address" required />
                <input className="input" type="tel" name="phone" placeholder="Phone number" required />
                <input className="input" name="postcode" placeholder="Postcode" />
                <textarea className="textarea" name="message" placeholder="Tell us about your property and preferred date…" />
                <button className="btn" type="submit">Send</button>
                <p style={{ fontSize: ".9rem", color: "var(--text-secondary)" }}>
                  Or email us directly at <a href="mailto:info@cleanhomes.online">info@cleanhomes.online</a>
                </p>
              </form>

              <div className="card">
                <h3>Contact</h3>
                <p><strong>Email:</strong> <a href="mailto:info@cleanhomes.online">info@cleanhomes.online</a></p>
                <p><strong>Phone:</strong> <a href="tel:+447365155414">+44 7365 155414</a></p>
                <p>Operating hours: Mon–Sat, 8:00–18:00</p>
                <hr style={{ margin: "1rem 0" }} />
                <p>We typically respond within one business day.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} CleanHomes. All rights reserved.
        </div>
      </footer>
    </>
  );
}
