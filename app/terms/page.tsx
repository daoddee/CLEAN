import "../../styles/globals.css";

export const metadata = { title: "Terms & Conditions | CleanHomes" };

export default function Terms() {
  return (
    <main className="section">
      <div className="container card" style={{ maxWidth: 900 }}>
        <h1>Terms & Conditions</h1>
        <p>These Terms govern your use of the CleanHomes website and services.</p>
        <h2>Services</h2>
        <p>We provide residential and end-of-tenancy cleaning. Quotes are estimates and subject to property condition.</p>
        <h2>Bookings & Cancellations</h2>
        <p>24-hour notice required for cancellations or rescheduling. Late cancellations may incur a fee.</p>
        <h2>Liability</h2>
        <p>We are insured. Liability is limited to the value of the service provided unless required by law.</p>
        <h2>Contact</h2>
        <p><a href="mailto:info@cleanhomes.online">info@cleanhomes.online</a> | <a href="tel:+447365155414">+44 7365 155414</a></p>
      </div>
    </main>
  );
}
