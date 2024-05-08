import type { FC } from "hono/jsx";

const IMG_WIDTH = 100;
const IMG_HEIGHT = 100;

const VID_SIZE = 300;

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
  videoSrc?: string;
  alt: string;
  link?: string;
  color: "yellow" | "blue" | "red" | "purple" | "green" | "gray";
}

const Card: FC<Props> = ({ title, description, src, alt, link, color, videoSrc }) => {
  const className = `card card-${color}`;
  return (
    <section class={color}>
      <div class="section-wrapper">
        <div class="section-title-wrapper">
          <h2>{title}</h2>
          <div>links</div>
        </div>
        {videoSrc ? (
          <video width={VID_SIZE} height={VID_SIZE} autoPlay loop muted src={videoSrc} poster={src} />
        ) : (
          <img width={VID_SIZE} height={VID_SIZE} src={src} alt={alt} />
        )}
        <p class="description">{description}</p>
        {/* <div class={className}>
        {videoSrc ? (
          <video width={VID_SIZE} height={VID_SIZE} autoPlay loop muted src={videoSrc} poster={src} />
        ) : (
          <img width={VID_SIZE} height={VID_SIZE} src={src} alt={alt} />
        )}
        <div class="texts">
          <h3>{title}</h3>
          <p>{description}</p>
          <div class={`link-wrapper link-wrapper-${color}`}>
            <a href={link}>→</a>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Card;
