// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michael",
  middleName: "",
  lastName: "Hsu",
  message: " Frontend Web Developer ❤️ ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tpps88206",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sheng-chuan-hsu-a44357167",
    },
    {
      image: "fa-medium",
      url: "https://michael-hsu.medium.com/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/michaelhsu.jpg"),
  imageSize: 375,
  message:
    "My name is Michael Hsu. I’m a senior software engineers with Full-Stack Web Development, create web applications with the highest quality and efficiency.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tpps88206",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/michaelhsu.jpg"),
      label: "First slide label",
      paragraph: ""
    },
    { 
      img: require("../editable-stuff/michaelhsu.jpg"),
      label: "Second slide label",
      paragraph: ""
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "Angular", value: 85 },
    { name: "HTML/CSS", value: 85 },
    { name: "NodeJs", value: 70 },
    { name: "Golang", value: 65 },
    { name: "JAVA", value: 55 },
    { name: "C#", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Frontend Web Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cool96482@hotmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
