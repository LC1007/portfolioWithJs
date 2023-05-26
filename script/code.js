// Education Section

let eduSection = [
  {
    id: 1,
    cardDate: "Apr 2023 - Current",
    cardTitle: "Life Choices Coding Academy",
    cardText:
      "I'm currently attending a 12 month coding bootcamp at Life Choices which will prepare me to become a web developer, I'm learning all the necessary skills thrive as a front end developer.",
  },
  {
    id: 2,
    cardDate: "Mar 2022 - Nov 2022",
    cardTitle: "Business Technology",
    cardText:
      "I worked at Business Technology for 9 months as a Systems Engineer and my daily tasks were as following seeing to clients hardware and software issues, doing client visits and setting up PCs for clients. The reason why I left was because I felt like it wasn't what I wanted to do and needed to do something else.",
  },
  {
    id: 3,
    cardDate: "Jun 2019 - Nov 2019",
    cardTitle: "First Technology",
    cardText:
      "I worked at First Technology for 5 months and my daily tasks were creating power apps and power flows for clients, seeing to clients SharePoint Sites, creating custom sharepoint sites. The reason why I left was because I felt like I wasn't ready and needed to studying further.",
  },
  {
    id: 4,
    cardDate: "Jan 2012 - Dec 2016",
    cardTitle: "Rhodes High School",
    cardText:
      "My high school period wasn't the best but I'm proud of the person I become after I graduated.",
  },
];

let eduDetails = document.querySelector(".edu-section");

eduSection.forEach((content) => {
  eduDetails.innerHTML += `
    <div class="card">
        <div class="card-body">
            <div class="card-date">${content.cardDate}</div>
                <div class="card-title">${content.cardTitle}</div>
                <div class="card-text">${content.cardText}</div>
        </div>      
    </div>
    `;
});

// Project Section

let projectSection = [
  {
    id: 1,
    cardImg: "https://i.postimg.cc/SQ345ZwC/project1.png",
    cardTitle: "Project 1",
    cardText: "We created this website to showcase our CSS animation skills",
    gitLink: "https://github.com/LC1007/website-exercise",
    liveLink: "https://class-exercise007.netlify.app/",
  },
  {
    id: 2,
    cardImg: "https://i.postimg.cc/02SvqYs3/project2.png",
    cardTitle: "Project 2",
    cardText:
      "This was our first try at using bootstrap to create a portfolio website.",
    gitLink: "https://github.com/LC1007/website-exercise",
    liveLink: "https://class-exercise007.netlify.app/",
  },
  {
    id: 3,
    cardImg: "https://i.postimg.cc/cLTBLb6r/tempsnip.png",
    cardTitle: "Project 3",
    cardText: "I recreated a website design from pinterest.",
    gitLink: "https://github.com/LC1007/website-exercise",
    liveLink: "https://class-exercise007.netlify.app/",
  },
  {
    id: 4,
    cardImg: "https://i.postimg.cc/02MtHfqM/Capture.png",
    cardTitle: "Project 4",
    cardText: "This is one of my portfolio projects that I've created",
    gitLink: "https://github.com/LC1007/website-exercise",
    liveLink: "https://class-exercise007.netlify.app/",
  },
];

let projectDetails = document.querySelector(".project-section");

projectSection.forEach((details) => {
  projectDetails.innerHTML += `
<div class="card">
    <img src="${details.cardImg}"/>
        <div class="card-body">
            <div class="card-title">${details.cardTitle}</div>
            <div class="card-text">${details.cardText}</div>
            <div class="icons">
              <a href="${details.gitLink}"><i class="bi bi-github"></i></a>
              <a href="${details.liveLink}"><i class="bi bi-box-arrow-up-right"></i></a>
            </div>
    </div>
</div>
    `;
});

// Skills Section

let skillsSectionDetails = [
  {
    id: 1,
    skillsImg: "https://i.postimg.cc/KzYFXCGr/html2.png",
    cardTitle: "HTML5",
    cardText:
      "I've been self studying front end developer for a while now and I've managed to get a very good understanding of HTML5, though I know web development won't stop growing so I won't stop learning.",
    cardLevel: "Skilled",
  },
  {
    id: 2,
    skillsImg: "https://i.postimg.cc/hGsg5KBt/css.png",
    cardTitle: "CSS3",
    cardText:
      "I've managed to get a very good grasp of CSS during over the few months, I am happy with the progress I've made but I'm still learning as much as I can to improve my skills",
    cardLevel: "Skilled",
  },
  {
    id: 3,
    skillsImg: "https://i.postimg.cc/dV8JG8Nd/bootstrap.png",
    cardTitle: "Bootstrap",
    cardText:
      "I've been using bootstrap for a while now so my understanding of it is quite good.",
    cardLevel: "Skilled",
  },
  {
    id: 4,
    skillsImg: "https://i.postimg.cc/4yqXQwTv/github.png",
    cardTitle: "GitHub",
    cardText:
      "During my 6 months at Life Choices, I learned how to use GitHub and now have a good understanding of the command we were taught and I can now use GitHub with my eyes closed",
    cardLevel: "Skilled",
  },
];

let skillsDetail = document.querySelector(".skills-section");

skillsSectionDetails.forEach((details) => {
  skillsDetail.innerHTML += `
    <div class="card">
                <img src="${details.skillsImg}" alt="" class="skills-img">
                <div class="card-body custom-body">
                    <div class="card-title">${details.cardTitle}</div>
                    <div class="card-text">${details.cardText}</div>
                    <div class="card-level level">${details.cardLevel}</div>
                </div>
            </div>
    `;
});

// Testimonial Section

let testimonialSec = [
  {
    id: 1,
    cardImg: "https://i.postimg.cc/Ghs468Mh/20230509-171206.jpg",
    cardTitle: "Summer De Wet",
    cardText:
      'Justin is the most intellectually intelligent person I know, if I could say so my self.He is extremely helpful and is always leaving his work to help anyone in need. He has such a kind spirit. For the past few weeks, Justin has become a really close friend of mine, and his help and presence have greatly benefited me. I appreciate it. Justin does extremely well with his work and pays attention to detail in whatever he does. So I assure you, Justin would be a perfect candidate and make any company prosper! Justin doesn\'t mean "righteous" for nothing.',
  },
  {
    id: 2,
    cardImg: "https://i.postimg.cc/V6DtsxMf/Screenshot-20221111-094743.jpg",
    cardTitle: "Rabia Haucha",
    cardText:
      "Justin is a very considerate and helpful young man who is very pleasant to work with. His energy alone is like a sudden beam of sunlight, illuminating the darkest corners of the room and adding happiness to everyone's day. He is hardworking, never fails to complete any given task, and helps anyone who needs it. Having him in your workplace will be an asset because he is a quick thinker and a very hard worker.",
  },
  {
    id: 3,
    cardImg: "https://i.postimg.cc/L551JxBz/zia.jpg",
    cardTitle: "Zia Khan",
    cardText:
      "I truly admire Justin's amazing work ethic. He is highly skilled at what he does. When I met him, I immediately picked up on the fact that he is an intelligent person. He is great at working with others. He's very good at problem solving and thinking creatively; he is always willing to help others, and he can be super dependable. He can be very organized and shows amazing support for others.",
  },
  {
    id: 4,
    cardImg:
      "https://i.postimg.cc/GhZypJBy/90928282-1613696178782933-8697521963691671552-n.jpg",
    cardTitle: "Jason Viljoen",
    cardText:
      "Justin is a truly promising student showing potential in all areas of this course, being one of his fellow classmates, I could only gain as much knowledge from him as I could. He constantly has new ideas and is very innovative, when in the development sector. He is able to work in both back and front end sectors due to his knack for problem solving and always doing his utmost to solve any problem that arises. Justin is extremely intuitive and a quick thinker, no challenge is too hard for Justin Scholtz.",
  },
];

let testimonialDetails = document.querySelector(".testimonials-section");

testimonialSec.forEach((details) => {
  testimonialDetails.innerHTML += `
    <div class="card">
    <img src="${details.cardImg}" alt="" class="card-img">
    <div class="card-body">
        <div class="card-title">${details.cardTitle}</div>
        <div class="card-text">${details.cardText}</div>
    </div>
</div>
    `;
});

// Navbar Toggle

let btn = document.querySelector("#menu");
let nav = document.querySelector(".nav-links");
btn.addEventListener("click", openNav());

function openNav() {
  nav.classList.toggle("hide");
}


// Pop Up

let openBtn = document.querySelector('#btn')
let popUp = document.querySelector('.pop-up')
btn.addEventListener('click', openMenu())

function openMenu(){
  popUp.classList.toggle('hide')
}