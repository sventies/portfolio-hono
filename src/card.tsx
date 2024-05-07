import type { FC } from "hono/jsx";

const IMG_WIDTH = 100;
const IMG_HEIGHT = 100;

const DOT_SIZE = 7;

const COLORS = [
  "gray",
  "gray",
  "gray",
  //   "tomato",
  //   "#5566FF",
  //   "#34d399",
  // "yellow"
];
interface Props {
  title: string;
  description: string;
  src: string;
  alt: string;
  link?: string;
  color: "yellow" | "blue" | "red" | "purple" | "green" | "gray";
}

const Card: FC<Props> = ({ title, description, src, alt, link, color }) => {
  const className = `card card-${color}`;
  return (
    <div class={className}>
      <img width={IMG_WIDTH} height={IMG_HEIGHT} src={src} alt={alt} />
      <div class="texts">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class={`link-wrapper link-wrapper-${color}`}>
          <a href={link}>→</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
