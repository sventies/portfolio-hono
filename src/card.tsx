import type { FC } from "hono/jsx";
import GithubIcon from "./githubIcon";

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
  githubLink?: string;
  liveLink?: string;
}

const Card: FC<Props> = ({ githubLink, liveLink, title, description, src, alt, link, color, videoSrc }) => {
  // const className = `card card-${color}`;
  return (
    <section class={color}>
      <div class="section-wrapper">
        <div class="section-title-wrapper">
          <h2>{title}</h2>
          <div>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Link" class="github-link">
                <GithubIcon />
                <div>
                  <Underline />
                </div>
              </a>
            )}
            {/* <div style="width: 30px;overflow:hidden;">
              {githubLink && (

              )}
              <p>link</p>

              <div class="underlines">
                <Underline />
                <Underline />
                <Underline />
                <Underline />
              </div>
            </div> */}
          </div>
        </div>
        {videoSrc ? (
          <video
            width={VID_SIZE}
            height={VID_SIZE}
            autoPlay
            loop
            muted
            src={videoSrc}
            poster={src}
            onloadstart="this.playbackRate = 1.5;"
          />
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

const Underline = () => (
  <svg class="stripe" stroke="black" stroke-width="1px" fill="none" width="300" height="20">
    <line x1="0" y1="10" x2="320" y2="10"></line>
    <path d="M0 10 c 100 3, 100 -5, 300 0"></path>
    <path d="M0 10 c 10 -3, 30 5, 120 0 c 10 -3, 30 2, 100 0 c 40 3, 30 -4, 80 0"></path>
  </svg>
);


export default Card;
