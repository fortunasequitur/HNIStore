const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "#" },
      { id: 2, text: "Partner Sobat", href: "#" },
      { id: 3, text: "Contact Us", href: "#" },
      { id: 4, text: "Partnership", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "Data Policy", href: "#" },
      { id: 10, text: "Cookie Policy", href: "#" },
      { id: 11, text: "Legal", href: "#" },
      { id: 12, text: "Sitemap", href: "#" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
