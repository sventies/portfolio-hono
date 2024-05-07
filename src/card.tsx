import type { FC } from "hono/jsx";

const IMG_WIDTH = 100;
const IMG_HEIGHT = 100;

const DOT_SIZE = 10;

const COLORS = ["tomato", "#5566FF", "#34d399", "yellow"];
interface Props {
  title: string;
  description: string;
}

const Card: FC<Props> = ({ title, description }) => {
  return (
    <div style="border-radius: 4px; border: 1px solid black; padding: 10px; display: flex; flex-direction: column;">
      <div style="display:flex; flex-direction: row; gap: 10px;">
        <img
          style="object-fit: contain;"
          width={IMG_WIDTH}
          height={IMG_HEIGHT}
          src="https://utfs.io/f/64e12e70-8861-44bb-8f2c-0d3d5d3aa4a3-eecii3.28.27.png"
          alt="placeholder"
        />
        <div style="display: flex; flex-direction:column;">
          <h3 style="font-size: 18px; margin:0; font-weight: 500; margin-bottom:4px;">{title}</h3>
          <p style="font-size: 14px; margin:0; flex:1;">{description}</p>
          <div style={`display:flex; flex-direction:row; gap: ${DOT_SIZE}px; padding: 5px 0; align-items: center;`}>
            {COLORS.map((color) => (
              <div
                style={`width: ${DOT_SIZE}px; height: ${DOT_SIZE}px; border-radius: 50%; background: ${color}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div style="border: 3px solid blue; display:flex; flex-direction:row; ">
    //   <div>
    //     <img
    //       width={IMG_WIDTH}
    //       src="https://utfs.io/f/64e12e70-8861-44bb-8f2c-0d3d5d3aa4a3-eecii3.28.27.png"
    //       alt="placeholder"
    //     />
    //   </div>
    //   <div style="flex:1">
    //     <details>
    //       <summary>{title}</summary>
    //       <div>{description}</div>
    //     </details>
    //   </div>
    //   <div>RIGHT</div>
    // </div>
  );
};

export default Card;
