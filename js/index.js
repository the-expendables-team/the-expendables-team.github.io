var team = [
    {
        "name": "Ido Ofir",
        "role": "Front-End Developer",
        "img": "ido.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/ido-ofir-5181b2a6/"
            }
        ]
    },
    {
        "name": "Nadav Shaar",
        "role": "Front-End Developer",
        "img": "nadav.jpg",
        "description": "User Interface - oriented Front-End Developer, dedicated to creating and optimizing interactive and user-friendly applications.",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/nadav-shaar-551771139/"
            }
        ]
    },
    {
        "name": "Ilay Ofir",
        "role": "Full-Stack Developer",
        "img": "ilay.jpg",
        "description": "Architecture, UI & data management. My friends for the last 4.5 years - React, Nodejs, MongoDB",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/ilay-ofir-a9485bb0/"
            }
        ]
    },
    {
        "name": "Yoav Leshem",
        "role": "Front-End Developer",
        "img": "yoav.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/yoav-leshem-65ab1373/"
            }
        ]
    },
    {
        "name": "Ziv Zerr",
        "role": "Full-Stack Developer",
        "img": "ziv.jpg",
        "description": "Started as a Front-End Javascript / React.Js developer, continued as Node.js developer and currently operating as a Front-End team leader @ dooble.",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/ziv-zerr-95464924/"
            }
        ]
    },
    {
        "name": "Yakov Rakhamimov",
        "role": "Front-End Developer",
        "img": "yakov.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        "socialLinks": [
            {
                "src": "linkedin.svg",
                "href": "https://www.linkedin.com/in/rakhamimov/"
            }
        ]
    }
]

function displayMember(memberName) {
    let memberIndex = team.findIndex(m => m.name === memberName);
    let member = team[memberIndex];
    document.querySelector('.about_selected_member_container .about_selected_member_avatar').src = "./assets/team/" + member.img;
    document.querySelector('.about_selected_member_container .text_block_main_title').innerHTML = member.name;
    document.querySelector('.about_selected_member_container .text_block_sub_title').innerHTML = member.role;
    document.querySelector('.about_selected_member_container .para').innerHTML = member.description;
    document.querySelector(`.about_team_img.about_team_img_bounce`).classList.remove('about_team_img_bounce');
    document.querySelector(`.about_team_img.about_team_img_${memberIndex + 1}`).classList.add('about_team_img_bounce');
    document.querySelector(`.about_selected_member_social`).innerHTML = '';
    let linkImg = document.createElement('img');
    linkImg.setAttribute('src', `./assets/social-icons/${member.socialLinks[0].src}`);
    let newlink = document.createElement('a');
    newlink.setAttribute('class', 'about_social_icon');
    newlink.setAttribute('target', '_blank');
    newlink.setAttribute('href', member.socialLinks[0].href);
    newlink.append(linkImg);
    document.querySelector(`.about_selected_member_social`).appendChild(newlink);
    // document.querySelector('.about_selected_member_container .about_selected_member_social').innerHTML = (
    //     <div class="flex_row about_selected_member_social">
    //         <a herf="#" target="_blank" class="about_social_icon">
    //             <img src="./assets/social-icons/facebook.svg" />
    //         </a>
    //         <a herf="#" target="_blank" class="about_social_icon">
    //             <img src="./assets/social-icons/pinterest.svg" />
    //         </a>
    //         <a herf="#" target="_blank" class="about_social_icon">
    //             <img src="./assets/social-icons/linkedin.svg" />
    //         </a>
    //     </div>
    // );
}

window.onload = () => {
    let sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                console.log(entry.target.id)
            } else {
                // console.log('out of view');
            }
        });
    })

    sections.forEach(section => {
        observer.observe(section);
    });
};