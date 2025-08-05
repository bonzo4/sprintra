import BrandSection from "./BrandSection";
import CompanyLinks from "./CompanyLinks";
import ProductLinks from "./ProductLinks";
import ResourceLinks from "./ResourceLinks";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <BrandSection />
      <ProductLinks />
      <ResourceLinks />
      <CompanyLinks />
    </div>
  );
}
