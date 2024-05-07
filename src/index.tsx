import { Hono } from 'hono'
import { renderer } from './renderer'
import Card from "./card";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <main>
      <div>
        <h1>Hi there. It's me, Sven.</h1>
        <div>
          <h2>
            And you are
            <select title="role" onchange={`console.log("HELLO", this.value)`}>
              <option value="manager">a manager</option>
              <option value="developer">a developer</option>
              <option value="recruiter">a recruiter</option>
              <option value="mom">my mom</option>
              <option value="cat">a cat</option>
            </select>
          </h2>
        </div>
        <p>
          I'm a software consultant with an engineering background. I worked on several applications for engineering and
          financial companies. I'm currently building <a href="https://sitopie.com">Sitopie</a> on the side.
        </p>

        <h2>Selected work:</h2>
        <Card
          color="yellow"
          title="Icon Generator"
          description="A way to quickly generate SVG icons on mobile."
          src="https://utfs.io/f/64e12e70-8861-44bb-8f2c-0d3d5d3aa4a3-eecii3.28.27.png"
          alt="Icont Generator"
          link="https://icon-creator.pages.dev"
        />

        {/* <div class="card">
          <details>
            <summary>Icon Generator</summary>
            <div>
              <p>A way to quickly generate SVG icons on mobile.</p>

              <div class="underlines">
                <Underline />
                <Underline />
                <Underline />
                <Underline />
              </div>
            </div>
          </details>
        </div> */}

        {/* <ul>
          <li>
            Icon Generator <Underline />
          </li>
          <li>
            Sitopie <Underline />
          </li>
          <li>
            IVO Finance <Underline />
          </li>
          <li>
            Windfarm Analysis <Underline />
          </li>
          <li>
            DPG App <Underline />
          </li>
          <li>
            Envelope <Underline />
          </li>
          <li>
            Packhunt <Underline />
          </li>
          <li>
            Ampelmann <Underline />
          </li>
        </ul>
        <details>
          <summary>Click to toggle content</summary>
          <p>This is the full content that is revealed when a user clicks on the summary</p>
        </details>
        <details>
          <summary>Click to toggle content</summary>
          <p>This is the full content that is revealed when a user clicks on the summary</p>
        </details> */}
      </div>
      <p>
        If you work with me, I'll build you a proof of concept in a couple of days or weeks and we take it from there.
        This means no big upfront costs.
      </p>
      <p>If you want to learn more, reach out.</p>
    </main>,
    { title: "Hi there, it's me" }
  );
});

const Underline = () => (
  <svg class="stripe" stroke="black" stroke-width="1px" fill="none" width="500" height="20">
    <line x1="0" y1="10" x2="320" y2="10"></line>
    <path d="M0 10 c 100 3, 100 -5, 300 0"></path>
    <path d="M0 10 c 10 -3, 30 5, 120 0 c 10 -3, 30 2, 100 0 c 40 3, 30 -4, 80 0"></path>
  </svg>
);

export default app
