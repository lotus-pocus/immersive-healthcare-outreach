import "../styles/anchor-nav.css";

const links = [
  { href: "#overview", label: "01 Overview" },
  { href: "#origins", label: "02 Origins" },
  { href: "#experience", label: "03 VR Experience" },
  { href: "#impact", label: "04 Impact" },
  { href: "#deployment", label: "05 Deployment" },
  { href: "#related", label: "06 Related Work" },
  { href: "#contact", label: "07 Contact" },
];

export default function AnchorNav() {
  return (
    <nav className="anchor-nav" aria-label="Page sections">
      <div className="anchor-nav-inner">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
