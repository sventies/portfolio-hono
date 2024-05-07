import type { FC } from "hono/jsx";

const IMG_WIDTH = 100;
const IMG_HEIGHT = 100;
interface Props {
  title: string;
  description: string;
}

const Card: FC<Props> = ({ title, description }) => {
  return (
    <div style=" background: white; border: 1px solid lightgray; padding: 10px; display: flex; gap: 10px;">
      <img
        width={IMG_WIDTH}
        height={IMG_HEIGHT}
        src="https://utfs.io/f/64e12e70-8861-44bb-8f2c-0d3d5d3aa4a3-eecii3.28.27.png"
        alt="placeholder"
      />
      <div>
        <h3 style="font-size: 18px; margin:0; font-weight: 500; margin-bottom:4px;">{title}</h3>
        <p style="font-size: 14px; margin:0;">{description}</p>
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
