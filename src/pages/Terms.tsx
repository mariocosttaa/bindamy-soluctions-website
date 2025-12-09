import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: December 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Bindamy Solutions' services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bindamy Solutions provides web development, automation, and digital transformation services. 
              The specific deliverables, timelines, and costs will be outlined in individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon full payment, clients receive ownership of custom-developed code and designs. 
              Third-party tools, libraries, and pre-existing frameworks remain subject to their respective licenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment schedules are defined in individual project contracts. Late payments may result in 
              project delays or suspension of services until outstanding balances are resolved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality of all client information, business data, and project details. 
              Non-disclosure agreements are available upon request for sensitive projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bindamy Solutions shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our services beyond the total amount paid for the specific project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, please contact us at legal@bindamy.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;