import {
  Axios, CssSvg, Git, GitHubSvg, HTML, Javascript, Jira, MaterialUi, MongoDB,
  Netifly, NextJs, Postman, ReactJs, ReactRouterDom, StyledComponents, Talwind, Vercel, Vite, Typescript,
  AntdDesign,
  NextAuth
} from "@/IconSvg";
import MeImg from "../../public/me.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="flex gap-10">
        <h1 className="name">Santiago Cano Melo</h1>
        <Image src={MeImg.src} width={140} height={140} className="rounded-lg shadow-lg shadow-blue-200" />
      </div>
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
        <AntdDesign width={28} />
        <MaterialUi width={28} />
        <NextAuth width={28} />
        <MongoDB width={28} />
        <Postman width={28} />
        <Axios width={28} />
        <Vite width={28} />
        <Vercel width={28} />
        <Netifly width={28} />
        <ReactRouterDom width={28} />
        <Jira width={26} />
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
        <a href="https://www.linkedin.com/in/santiago-melo-7b25732a5/">Visit my Linkedin</a>
        <div className="lineTec responsive-line" />
        <a href="https://github.com/SantiMelo7">Visit my GitHub</a>
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
        <h3 className="tabs-experience text-blue-900">First steps</h3>
        <h3 className="tabs-experience text-blue-900">June 2023</h3>
      </div>
      <div className="container-parragrafh">
        <p className="content">
          I started in the world of programming after finishing high school. She begins to learn self-taught (Yotube videos, courses on Udemy and more) learning basic HTML, CSS and Javascript and over time expanding to other technologies.
        </p>
      </div>
      <div className="lineTitle margin-line" />
      <div className="content-experience lg:gap-x-96">
        <h3 className="tabs-experience text-blue-900">First jobs</h3>
        <h3 className="tabs-experience text-blue-900">January 2024</h3>
      </div>
      <div className="container-parragrafh">
        <p className="content">
          I worked on my first project being part of a team of 2, being in charge of the entire Frontend side professionally and doing some mini-projects that people asked me for as a student.
        </p>
      </div>
      <div className="lineTitle margin-line" />
      <div className="content-experience lg:gap-x-96">
        <h3 className="tabs-experience text-blue-900">Applying what we learned</h3>
        <h3 className="tabs-experience text-blue-900">February 2024 | April 2024</h3>
      </div>
      <div className="container-parragrafh">
        <p className="content">
          I am showing my work to the world, carrying out mini-projects in a non-professional way, learning new technologies, improving my skills in search of my first job as a web developer, in addition to studying a degree in Systems Engineering.
        </p>
      </div>
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
