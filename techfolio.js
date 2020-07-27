import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: " Sakshi Portfolio",
  icon: "favicon.ico",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  github: "https://github.com/sakshi8271",
  linkden: "https://www.linkedin.com/in/sakshi-agarwal-9a1370176/",
  facebook: null,
  instagram: null,
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Sakshi Agarwal",
  bannerHeading: "Student.",
  bannerTagLine: emoji(
    "An Aspiring Web Developer 😀 Who loves to learn and grow."
  ),

  bannerAvatar: "sakshi.jpeg",
  resumeLink:
    "https://drive.google.com/file/d/1JV4aYwjBRlEl-3MO8HicNjpual8YVsK1/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "sakshi@sakshi",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "Computer Science Student and Aspiring Full Stack Developer. Passionate about solving problems that will benefit others in the area of IT or in real life from not even thinking about computer science and then picking it as a carrier back in 2016 I have discovered a lot in this system.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Bootstrap.",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like python,java etc.",
  ],

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-java",
    },
    {
      fontAwesomeClassname: "fab fa-git",
    },
    
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "sakshi8271",
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Weather Forecasting",
      projectBio:
        "The system constantly monitors temperature using temperature sensor and also for rain.The system constantly transmits this data to the microcontroller,which keep transmiting it to the online web server.",

      projectUrl: null,
      stackList: ["Iot", "Aurdino", "Sensors"],
    },
    {
    projectName: "Email collection",
    projectBio:
      "In this node.js and mailchimp api was used to collect email of the users and store them.",

    projectUrl: "https://protected-everglades-45454.herokuapp.com/",
    stackList: ["Java Scipt", "Html", "CSS","Bootstrap","Node.js"],
  },
    {
      projectName: "Drum kit",
      projectBio:
        "In this we can play different sounds when clicked on different images",

      projectUrl: "https://sakshi8271.github.io/DrumKit/",
      stackList: ["HTML", "Java Script", "css"],
    },
    {
      projectName: "Covid-19 Live Data",
      projectBio:
        "Covid-19 is an real-time web application which give real-time update about the corono-virus cases in the world build on javascript",

      projectUrl: "https://sakshi8271.github.io/Covid19-Live-Update/",
      stackList: ["Java Sript", "Bootstrap", "Html"],
    },

    {
      projectName: "Dice game",
      projectBio:
        "In this game there are two dice which shows random number everytime,the player who has dice with greater number wins.",

      projectUrl: "https://sakshi8271.github.io/Dice-game/",
      stackList: ["Java Scipt", "Html", "CSS"],
    },
    
     
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: null,
      experienceDesc:null,
  
      experienceDuration:null,
      experienceTags: null,
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, You all can reach me.",
  contactList: ["7717785296", "agarwalsakshi368@gmail.com"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
