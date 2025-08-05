export default function ProductLinks() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="#features"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/dashboard"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            Templates
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            Cheat Codes
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-sprintra-blue-400 text-sm text-slate-400 transition-colors"
          >
            API
          </a>
        </li>
      </ul>
    </div>
  );
}
