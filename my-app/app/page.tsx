//Makes the page client side, lets us use some libraries like animated-backgrounds
"use client";

import { AnimatedBackground } from 'animated-backgrounds';
import ProjectRow from './components/ProjectRow'; 
import { Typewriter } from 'react-simple-typewriter'
import { themeManager } from 'animated-backgrounds';
import Footer from './components/footer';
//Project Images
import EnactusImage from '../public/images/Enactus_events_page.png';
import ElectusImage from '../public/images/Electus_voting.png';
import FruitFocusImage from '../public/images/FruitFocus_state_page.png';
import InterWeatherImage from '../public/images/InterWeather_Paris.png';

themeManager.createCustomTheme('myCustomTheme', {
  name: 'myCustomTheme',
  colorScheme: {
    name: 'Custom Colors',
    colors: ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#CAF0F8'],
    gradients: {
      primary: ['#03045E', '#00B4D8'],
      secondary: ['#0077B6', '#90E0EF'],
      accent: ['#00B4D8', '#CAF0F8']
    },
    effects: {
      glow: '#00B4D8',
      highlight: '#CAF0F8',
      shadow: '#03045E'
    }
  },
});



const projects = [
  {
    id: 1,
    title: "Enactus",
    description: "Role: IT Director \nLed a small team responsible for the development and maintenance of the official UNSW Enactus society website. Oversaw project planning, delegated tasks, and ensured smooth continuous deployment of the site.  to support society activities and initiatives.",
    tech: ["React", "Vite", "Tailwind"],
    image: EnactusImage,
    demo: "https://enactusunsw.org/", 
    github: "https://github.com/enactus-unsw/EnactusUNSWWeb",
  },
  {
    id: 2,
    title: "Electus",
    description: "Role: Project Lead \nCo-Leading the development of a university-focused web application designed to streamline voting, specifically with AGM/Student society elections in mind. The app integrates university ID verification and login",
    tech: ["React", "Vite", "Node.js", "Express"],
    image: ElectusImage,
    github: "https://github.com/ElectusProject/electusproject.github.io",
  },
    {
    id: 3,
    title: "FruitFocus",
    description: "Role: Project Lead \nA web project that helps users find fruits tailored to their dietary and seasonal needs. Combines nutritional data and seasonal availability with pricing calcaulted from local COLES prices using an API to allow user to search for cost-effective and healthy options.",
    tech: ["React", "Mantine UI","Axios", "Express", "Python", "Firebase Database"],
    image: FruitFocusImage,
    demo: "https://fruit-focus-frontend.vercel.app/", 
    github: "https://github.com/devsoc-unsw/trainee-bard-24t2", 
  },
  {
    id: 4,
    title: "InterWeather",
    description: "Role: Solo Developer \n A lightweight weather app built with Expo (React Native). Displays current weather data and forecasts using open APIs, focusing on clean design and responsive performance across mobile devices.",
    tech: ["FirebaseAuth", "ReactNative","Expo"],
    image: InterWeatherImage,
    demo: "https://inter-weather.expo.app/",
    github: "https://github.com/IrisEcole/inter-weather?tab=readme-ov-file"
  },
];






export default function Home() {
  return (
    <div > 
      <AnimatedBackground animationName="gradientWave" theme="myCustomTheme" />
        <h1 className="pt-20 text-center font-normal text-[8rem] font-sans">
          Iris&apos; {' '}
          <span className="italic" >
            <Typewriter
              words={['Projects']}
              cursor
              cursorStyle='_'
              typeSpeed={100}
            />
          </span>
        </h1>
          <div className="min-h-[300px] flex items-center justify-center bg-cover bg-center relative">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl p-10 my-30 w-2/4 text-center shadow-lg border border-white/30">
              <p className="text-4xl text-white mb-6">
                I&apos;m currently in my third studying Computer Engineering and Physics at UNSW. 
              </p>
              <p className="text-4xl text-white mb-6">
                My journey into web development began through DevSoc&apos;s training program, where I discovered a passion for learning and working in a team. Since then, I&apos;ve expanded my skills through solo projects and leading development teams within DevSoc&apos;s training program and as Enactus&apos; IT director.
              </p>
              <p className="text-4xl text-white">
                On this page, you&apos;ll find a collection of projects that highlight my exploration of diverse tech stacks and innovative ideas   
              </p>
            </div>
          </div>
        {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
        ))}
        <Footer></Footer>
      </div>
  );
}
