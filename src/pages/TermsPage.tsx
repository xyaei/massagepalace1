import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Welcome to Massage Palace. By using our services, booking an appointment, or visiting our website at massage-palace.com, you agree to the following Terms and Conditions. Please read them carefully.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              SERVICES
            </h2>
            <p>
              Massage Palace provides professional massage therapy and wellness services at our Stamford, CT location. All services are subject to availability and must be booked in advance or as walk-ins based on current availability.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              SMS MESSAGING PROGRAM
            </h2>
            <p><strong>Program name:</strong> Massage Palace Promotions & Updates</p>
            <p><strong>Description:</strong> Promotional offers, anniversary deals, appointment reminders, and service updates.</p>
            <p><strong>Message frequency:</strong> Varies — typically 2–4 messages per month. Message & data rates may apply.</p>
            <p>
              By opting in to our SMS program, you consent to receive text messages from Massage Palace at the number you provided. To opt out at any time, reply STOP to any message. To get help, reply HELP or call us at (203) 524-6553. After texting STOP, you will receive one final confirmation message and no further messages will be sent. Supported carriers are not liable for delayed or undelivered messages.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              APPOINTMENTS & CANCELLATIONS
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We ask that cancellations be made at least 1–2 hours in advance</li>
              <li>Late cancellations or no-shows may be subject to a cancellation fee</li>
              <li>We reserve the right to refuse service at our discretion</li>
            </ul>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              PROMOTIONAL OFFERS
            </h2>
            <p>
              Promotional deals are valid for the stated time period only. Offers cannot be combined unless explicitly stated. Massage Palace reserves the right to modify or discontinue promotions at any time.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              HEALTH & SAFETY
            </h2>
            <p>
              Clients are responsible for disclosing any health conditions, allergies, or injuries prior to receiving services. Massage Palace is not liable for adverse reactions resulting from undisclosed medical conditions. We reserve the right to decline service if a condition presents a risk to the client or therapist.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              PAYMENTS & REFUNDS
            </h2>
            <p>
              Payment is due at the time of service. We accept cash and major credit cards. Refunds are handled on a case-by-case basis. Gift cards and promotional credits are non-refundable and non-transferable.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              WEBSITE USE
            </h2>
            <p>
              All content on massage-palace.com including text, images, and logos is the property of Massage Palace and may not be reproduced without written permission. We are not responsible for any errors or interruptions on our website.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              LIMITATION OF LIABILITY
            </h2>
            <p>
              Massage Palace is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the service in question.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              CHANGES TO TERMS
            </h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page. Continued use of our services after changes constitutes your acceptance.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block mt-10 text-sm text-muted-foreground hover:text-secondary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
