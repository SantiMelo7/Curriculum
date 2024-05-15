import {
  Axios, CssSvg, Git, GitHubSvg, HTML, Javascript, Jira, MaterialUi, MongoDB,
  Netifly, NextJs, Postman, ReactJs, ReactRouterDom, StyledComponents, Talwind, Vercel, Vite, Typescript
} from "@/IconSvg";

export default function Home() {
  return (
    <div className="container">
      <h1 className="name">Santiago Cano Melo</h1>
      <div className="container-tec">
        <HTML width={28} />
        <CssSvg width={28} />
        <Javascript width={28} />
        <Typescript width={28} />
        <ReactJs width={28} />
        <NextJs width={28} />
        <Talwind width={28} />
        <Git width={28} />
        <GitHubSvg width={28} />
        <MongoDB width={28} />
        <Postman width={28} />
        <Axios width={28} />
        <Vite width={28} />
        <Vercel width={28} />
        <Netifly width={28} />
        <ReactRouterDom width={28} />
        <Jira width={26} />
        <MaterialUi width={28} />
        <StyledComponents width={28} />
      </div>
      <h3 className="carge">Frontend Developer</h3>
      <ul className="container-details">
        <li>+527721114272</li>
        <div className="lineTec responsive-line" />
        <li>santiagocano15cr7@gmail.com</li>
        <div className="lineTec responsive-line" />
        <li>Hidalgo, México</li>
        <div className="lineTec responsive-line" />
        <a href="https://www.linkedin.com/in/santiago-melo-7b25732a5/">Visitita mi Linkedin</a>
        <div className="lineTec responsive-line" />
        <a href="https://github.com/SantiMelo7">Visita mi GitHub</a>
      </ul>
      <h1 className="profile-summary ">Profile Summary</h1>
      <div className="lineTitle margin-line" />
      <div className="content-profile">
        <p className="content">
          I am a Frontend Developer, with 1 year of experience. I use <span>HTML, CSS and JavaScript</span> as the main technologies,
          and I use <span>React and Next.js </span> as frameworks and I take it to the next level with <span>Typescript</span>, I also like to use  <span>Tailwind (CSS framework)</span>,
          in which I consider that the designs go up a level and I consider that it makes it much easier to manage styles and efficiently.
          As for databases, <span>MongoDB</span> will be used, as well as Postman to test the endpoints and in general I have used
          <span> (Material Ui, Boostrap, Exprees, Styled-Componets, Axios, React-Router-Dom)</span>, these as technologies that add a lot to the projects.
          I have experience in managing versions <span>(Git and GitHub)</span> as well as deploying to <span>Vercel and Netifly</span>.
          Currently I am still looking to learn more technologies, to be able to have broader knowledge, although I consider that I handle what I have already learned in a good way and I am always willing to learn more.</p>
      </div>
      <h1 className="profile-summary">Work Experience</h1>
      <div className="lineTitle margin-line" />
      <div className="content-experience lg:gap-x-96">
        <h3 className="tabs-experience text-blue-900">Frontend Developer</h3>
        <h3 className="tabs-experience text-blue-900">Actosoft | 2023 - Present</h3>
      </div>
      <div className="container-parragrafh">
        <p className="content">
          Within this company, I am in a learning process, that is, they have given me the facility to be able to learn the technologies already mentioned,
          initially in a basic way and currently in a professional way, the goal of both the company and personally is that in Based on that,
          I was able to get my first job and be able to accumulate as much experience as possible.
        </p>
      </div>
      <h1 className="profile-summary">EDUCATION</h1>
      <div className="lineTitle margin-line" />
      <div className="content-experience lg:gap-x-96 sm:gap-x-56">
        <h3 className="tabs-experience text-red-900">University</h3>
        <h3 className="tabs-experience text-red-900">2024 | Present</h3>
      </div>
      <div className="container-parragrafh">
        <p className="content">
          I am studying Systems Engineering and I am in my 2nd semester at school (Consorcio Clavijero Institute)
        </p>
      </div>
    </div>
  )
}
