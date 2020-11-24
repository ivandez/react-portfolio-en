import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import AboutMe from "./components/about/AboutMe";
import WorkExperience from "./components/work/WorkExperience";
import Education from "./components/education/Education";
import Project from "./components/project/Project";
import Abilities from "./components/abilities/Abilities";
import Diplomas from "./components/diplomas/Diplomas";
import Contact from "./components/contact/Contact";
import { FormspreeProvider } from "@formspree/react";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Container title="About me" id="about">
        <AboutMe></AboutMe>
      </Container>
      <Container title="Work experience" id="work-experience">
        <WorkExperience
          date="Oct 2019 – Mar 2020"
          company="Founduss"
          job="Backend developer with laravel"
          jobDescription="Develop an automated business service reservation system, create a SQL DB, create a rest API for a mobile app."
        ></WorkExperience>
        <WorkExperience
          date="Nov 2020 – Nov 2020"
          company="Traductoridiomasmayas"
          job="Data base"
          jobDescription="Develop a sql DB to store translations made by users."
        ></WorkExperience>
      </Container>
      <Container title="Education" id="education">
        <Education
          institution="U.E.P María Francia"
          date="2012-2017"
          degree="Bachelor of Science"
        ></Education>
        <Education
          institution="Instituto Universitario Antonio Jose de Sucre"
          date="2018 - present"
          degree="Superior Technician in Computer Science"
        />
      </Container>
      <Container title="Projects" id="project">
        <Project
          title="React portfolio"
          description="Portfolio developed in React.js along with other npm modules to show my work in the tec industry."
          repository="https://github.com/ivandez/portafolio-react"
          img="https://user-images.githubusercontent.com/38108288/99752497-d160d580-2aba-11eb-9bd3-5d9475203793.png"
        ></Project>
        <Project
          title="To do Angular"
          description="To Do application that I developed in angular to practice my knowledge."
          repository="https://github.com/ivandez/angular-to-do-app"
          img="https://user-images.githubusercontent.com/38108288/99752694-2bfa3180-2abb-11eb-9a47-ff6267654536.png"
        ></Project>
        <Project
          title="Expense management app"
          description="Application that allows you to manage your expenses that I develop to practice my knowledge."
          repository="https://github.com/ivandez/expense-reports"
          img="https://user-images.githubusercontent.com/38108288/99753193-2e10c000-2abc-11eb-9bde-99f37ee9a1e6.png"
        ></Project>
        <Project
          title="COVID dashboard in Express.js"
          description="Application that consults an API to show COVID cases worldwide."
          repository="https://github.com/ivandez/covid-dashboard-expressjs"
          img="https://user-images.githubusercontent.com/38108288/99753671-138b1680-2abd-11eb-8451-e84fc904759f.png"
        ></Project>
        <Project
          title="Conference website"
          description="Web page that simulates a conference developed in bootstrap 4."
          repository="https://github.com/ivandez/PlatziConfHawaii"
          img="https://user-images.githubusercontent.com/38108288/99753502-b0997f80-2abc-11eb-8b5f-bd4a8ab1222d.png"
          link="https://ivandez.github.io/PlatziConfHawaii/"
        ></Project>
      </Container>
      <Container title="Abilities" id="abilities">
        <Abilities
          abilities={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Boostrap 4",
            "React.js",
            "Angular.js",
            "PHP",
            "Laravel",
            "SQL/MySQL Workbench",
            "Git/Github",
            "Inglés",
            "Ubuntu",
            "Vagrant/VirtualBox",
            "MVC",
            "Object-oriented programming",
          ]}
        ></Abilities>
      </Container>
      <Container title="Diplomas" id="diplomas">
        <Diplomas
          date="2019"
          title="Backend Development with PHP"
          link="https://platzi.com/@ivan-mendez/carrera/57-desarrollo-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Fundamentals of Software Engineering"
          link="https://platzi.com/@ivan-mendez/curso/1098-ingenieria/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Database Fundamentals"
          link="https://platzi.com/@ivan-mendez/curso/1566-bd/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2018"
          title="English B1"
          link="https://user-images.githubusercontent.com/38108288/99884956-029aec00-2c08-11eb-8685-4cf2bff141af.jpg"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="ONLINE WEB development"
          link="https://platzi.com/@ivan-mendez/curso/1350-html5-css3/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Git and Github course"
          link="https://platzi.com/@ivan-mendez/curso/1170-git-github-2017/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Object-oriented programming"
          link="https://platzi.com/@ivan-mendez/curso/1474-oop/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introduction to Terminal and Command Line"
          link="https://platzi.com/@ivan-mendez/curso/1276-terminal/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Course of Bootstrap 4"
          link="https://platzi.com/@ivan-mendez/curso/1331-bootstrap/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Course of API REST"
          link="https://platzi.com/@ivan-mendez/curso/1638-api-rest/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introduction to PHP"
          link="https://platzi.com/@ivan-mendez/curso/1338-php/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2018"
          title="Basic programming"
          link="https://platzi.com/@ivan-mendez/curso/1050-programacion-basica/diploma/detalle/"
        ></Diplomas>
        <Diplomas
          date="2019"
          title="Introduction to Java SE"
          link="https://platzi.com/@ivan-mendez/curso/1631-java-basico/diploma/detalle/"
        ></Diplomas>
      </Container>
      <Container title="Contact me :)" id="contact">
        <FormspreeProvider project="1545787927554949020">
          <Contact></Contact>
        </FormspreeProvider>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;

// <\                     __
//  \\                 .~~  ~~.
//   \\               /|~|     |
//    \\             /======\  |
//   //\\           |>/_\_<_=' |
//   ~\  \          `-`__  \\__|    _
//  <<\ \ \    ___    \..'  `--'   / ~-.
// <<\\' )_) .+++++ _ (___.--'| _ /~-.  ~-.
// \_\' /   x||||||| `-._    _.' /~-. ~-.  `.
//  |   |  |X++++++|     \  /   /~-. ~-. ~-./
//  |   `. .||||||||      []   /~-. ~-. ~-./
//  |    |'  ++++++| :::  [] : `-. ~-. ~-.'
//  |    `.        '  ::: []:: _.-:-. ~-/ |
//  (_   /|     _.        []  |____~|`-'  |
//  ||`-'| |_.-' |        |\\/|JUDGE|     `.
//  `.___.-'     `.       ||`' \~~~/ >.    l
//                |   ::  ||    `-' / /`---'\
//                |    :  ||       ( [(_)[_](]
//                |       ||       | [       ]
//               .'       ||       |  \.---./
//             __|________||_______|=.|____|_
//            |: o | o |~\|%/~ o |_ o||-----|
//            |:--'|`-'||X\/X|`-'| `-|`.  .-|
//            `--------'  ll `-------' |  |o|
//               |                  |  `. |_|
//               |               :: `.  |   |
//               |               ::  |  |  .'
//               |         |\    ::  | .'  |
//               |         ||     :  | |.  |
//               `.       .'|     :  | ||..'
//                |       | `.    :  | |'//
//                |       |  |    : .' `='
//                |       |  |   :: |
//                `.      |  |   :: |
//                 |      |  |   :: |
//                 |_____ |  .-------.
//                / _     `./.-- :::  \
//               | | `----' ||        |
//               | |        |        ||
//                \         \.-------./
//                 |-------||.-------.|
//                 /-.____.||         |       I   A M   T H E   L A W
//                  |      ||         /
//                  `.     `:.       /
//                   |       |      |
//                   `,      |      |
//                    |      |      /
//                    `.     |     |
//                     |     |     |  Judge Dredd
//                     |     |     |
//                __/  |     <     >  \
//                 /   /     /     \
//                /   :.___.|.'""`. |      \
//             LS     `----//      \\    ___\
//         /               `---------'       \
//       _/          /
//             /__            |________\
