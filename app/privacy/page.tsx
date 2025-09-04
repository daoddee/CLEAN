import "../../styles/globals.css";

export const metadata = { title: "Privacy Policy | CleanHomes" };

export default function Privacy() {
  return (
    <main className="section">
      <div className="container card" style={{ maxWidth: 900 }}>
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          CleanHomes (“we”, “us”) collects the minimum personal data necessary to provide quotes
          and cleaning services. This includes contact details and service preferences submitted via our
          contact form or by phone/email.
        </p>
        <h2>Data Use</h2>
        <p>We use your data to respond to enquiries, provide quotes, schedule services, and improve operations.</p>
        <h2>Data Sharing</h2>
        <p>We do not sell your data. We may share limited data with service partners solely to deliver the service.</p>
        <h2>Retention</h2>
        <p>Enquiry data is retained for up to 24 months unless a longer period is required by law or ongoing services.</p>
        <h2>Your Rights</h2>
        <p>You can request access, correction, or deletion at any time: <a href="mailto:info@cleanhomes.online">info@cleanhomes.online</a>.</p>
        <h2>Cookies</h2>
        <p>We use minimal analytics cookies to understand website usage. You can block cookies in your browser settings.</p>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:info@cleanhomes.online">info@cleanhomes.online</a></p>
      </div>
    </main>
  );
}
