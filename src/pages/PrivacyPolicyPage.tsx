import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Massage Palace (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at massage-palace.com, contact us, or use our services.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              INFORMATION WE COLLECT
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, phone number, and email address provided when booking an appointment, completing an intake form, or signing up for our membership program</li>
              <li>Service preferences and health information relevant to massage therapy</li>
              <li>SMS opt-in consent when you agree to receive promotional text messages</li>
              <li>Device and browser information when you visit our website</li>
            </ul>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Schedule and confirm appointments</li>
              <li>Send promotional offers, anniversary deals, and service updates via SMS (only with your consent)</li>
              <li>Respond to inquiries and customer service requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              SMS MESSAGING
            </h2>
            <p>
              By opting in to SMS communications at the time of booking or via our website, you consent to receive promotional and informational text messages from Massage Palace at the phone number provided. Message and data rates may apply. Message frequency varies. You may opt out at any time by replying STOP to any message. For help, reply HELP or contact us at (203) 524-6553. We do not sell or share your phone number or personal information with third parties for their marketing purposes.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              SHARING OF INFORMATION
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information only with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers who assist us in operating our business (e.g., appointment and messaging platforms), under strict confidentiality agreements</li>
              <li>Law enforcement or legal authorities if required by law</li>
            </ul>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              DATA SECURITY
            </h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              YOUR RIGHTS
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of SMS communications at any time by replying STOP</li>
              <li>Contact us with any privacy concerns</li>
            </ul>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              COOKIES
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.
            </p>

            <h2 className="font-display text-lg font-semibold text-foreground mt-8 mb-2">
              CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.
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

export default PrivacyPolicyPage;
