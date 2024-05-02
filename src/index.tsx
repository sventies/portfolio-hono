import { Hono } from 'hono'
import { renderer } from './renderer'


const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <main>
      <div>
        <h1>
          Hi, I'm Sven. And you are
          <select title="role" onchange={`console.log("HELLO", this.value)`}>
            <option value="manager">a manager</option>
            <option value="developer">a developer</option>
            <option value="recruiter">a recruiter</option>
            <option value="mom">my mom</option>
            <option value="cat">a cat</option>
          </select>
        </h1>
        <p>
          I'm a software developer with an engineering background. I worked on several applications for engineering and
          financial companies. I'm currently building <a href="https://sitopie.com">Sitopie</a> on the side.
        </p>
        <p>
          If you work with me, I'll build you a proof of concept in a couple of days or weeks and we take it from there.
          This means no big upfront costs.
        </p>
        <p>If you want to learn more, reach out.</p>
        <h2>Selected work:</h2>
        <ul>
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
        </details>
      </div>
    </main>,
    { title: "Hi there" }
  );
});

const Underline = () => (
  <svg class="stripe" stroke="black" stroke-width="1px" fill="none" width="500" height="20">
    <line x1="0" y1="10" x2="320" y2="10"></line>
    <path d="M0 10 c 100 3, 100 -5, 300 0"></path>
    <path d="M0 10 c 10 -3, 30 5, 120 0 c 10 -3, 30 2, 100 0 c 40 3, 30 -4, 80 0"></path>
  </svg>
);

// const Animate = () => <animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />;

export default app
