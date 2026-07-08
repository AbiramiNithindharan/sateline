type FooterLinksProps = {
  title: string;
  items: string[];
};

export default function FooterLinks({ title, items }: FooterLinksProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-blue-900">{title}</h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="
              text-muted-foreground
              hover:text-blue-900
              transition-colors
              cursor-pointer
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
