import BottomBar from "./BottomBar";
import FooterLinks from "./FooterLinks";
import NewsletterSignup from "./NewsletterSignup";

export default function LandingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <FooterLinks />
        <NewsletterSignup />
        <BottomBar />
      </div>
    </footer>
  );
}
