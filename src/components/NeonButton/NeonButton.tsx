import { Link } from "react-router-dom";

interface NeonButtonProps {
  text: string;
  href: string;
  hsl?: { h: number; s: string; l: string };
  textHsl?: { h: number; s: string; l: string };
}

const NeonButton: React.FC<NeonButtonProps> = ({
  text,
  href,
  hsl = { h: 0, s: "80%", l: "50%" },
  textHsl = { h: 0, s: "0%", l: "100%" },
}) => {
  const styleVars = {
    ["--h" as any]: hsl.h,
    ["--s" as any]: hsl.s,
    ["--l" as any]: hsl.l,
    ["--th" as any]: textHsl.h,
    ["--ts" as any]: textHsl.s,
    ["--tl" as any]: textHsl.l,
  };

  const isExternal = /^https?:\/\//.test(href);
  const isDownload = /\.(pdf|zip|docx?|xlsx?|pptx?)$/i.test(href);
  const isLink = !isExternal && !isDownload && !href.startsWith("#");

  if (isLink) {
    return (
      <Link to={href} className="btn-neon" style={styleVars}>
        {text}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="btn-neon"
      style={styleVars}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(isDownload ? { download: true } : {})}
    >
      {text}
    </a>
  );
};

export default NeonButton;