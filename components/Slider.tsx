"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SliderCard from "./SliderCard";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="semiheader lg:px-[100px] md:px-[50px] px-[15px] text-university-yellow">
        Discover the Yearly routines of our LC
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Local Conference",
    title: "ULDS",
    src: "/calender/outerPictures/ulds.png",
    content: <SliderCard
      desc1="ULDS stands for 'University Leadership Development Seminar,' and it is our LC's first local conference of the term, typically held in February. The conference is primarily focused on integrating the new members recruited in February. It also serves as the occasion for the EB to present their goals for the first semester. "
      pic1="/calender/insidePictures/ulds1.png"
      pic2="/calender/insidePictures/ulds2.png"
      desc2="ULDS is the oldest local conference in our LC, with over 15 years since its first edition. Over the years, it has become a key tradition, deeply embedded in the rituals and culture of our LC. ULDS has long been recognized as a major factor in energizing our membership, boosting morale and productivity. There's no better way to start the term than with a local conference that brings everyone together and fosters connections with our newest members."
      desc3="ULDS is the first of many internal opportunities in our LC for self-development. It is typically organized by an Organizing Committee, offering a chance to develop a wide range of skills, from sales and content creation to money and budget management. Like any AIESEC conference, it also provides an opportunity for our members to connect, bond, and network with new people. " 
      pic3="/calender/insidePictures/ulds3.png"
      />,
  },
  {
    category: "National Conference",
    title: "TULDS",
    src: "/calender/outerPictures/tulds.png",
    content: <SliderCard
      desc1=""
      pic1="/calender/insidePictures/tulds1.png"
      pic2="/calender/insidePictures/tulds2.png"
      desc2=""
      desc3=""
      pic3="/calender/insidePictures/tulds3.png"
    />,
  },
  {
    category: "EwA Initiative",
    title: "Youth Speak Forum",
    src: "/calender/outerPictures/ysf.png",
    content: <SliderCard
      desc1="Youth Speak is an open forum organized by AIESEC that brings together young people to debate various topics related to the Sustainable Development Goals (SDGs). It provides a platform where participants can exchange ideas, share their views, and explore potential solutions to global challenges. The topics are selected before the event, with speakers chosen accordingly to guide discussions. The event spans over two days, with the second day featuring a hackathon that allows participants to compete by creating innovative solutions tied to the topics discussed. The winners of the hackathon receive a prize, making it an exciting and competitive aspect of the event."
      pic1='this is parag'
      pic2=""
      desc2="Youth Speak has a rich history, with the most recent edition being Youth Speak 4.0, marking the fourth consecutive year of its execution at LC University. Over the years, it has become a highly anticipated event within the LC, growing in scale and impact. It reflects AIESEC's commitment to empowering youth and fostering leadership by giving them a voice to express their perspectives on SDGs. The consistent success and positive feedback from participants have made it a signature event for LC University, strengthening its reputation as a leader in youth engagement on global issues."
      desc3="Youth Speak presents a unique opportunity for young individuals to engage deeply with global issues and develop skills that extend beyond the forum. The event’s combination of power talks, workshops, and a hackathon encourages participants to think critically, collaborate with others, and apply their knowledge in innovative ways. It also provides networking opportunities, allowing youth to connect with like-minded peers, experts, and mentors. For LC University, Youth Speak serves as a platform to further its impact by nurturing the next generation of leaders who are passionate about contributing to the SDGs."
      pic3="" />,
  },

  {
    category: "iGV Project",
    title: "HAVANA",
    src: "/calender/outerPictures/havana.png",
    content: <SliderCard
      desc1="hello"
      pic1='this is parag'
      pic2=""
      desc2=""
      desc3=""
      pic3="" />,
  },
  {
    category: "iGV Project",
    title: "IMPACT",
    src: "/calender/outerPictures/impact.png",
    content: <SliderCard
      desc1="hello"
      pic1="/calender/insidePictures/impact1.gif"
      pic2="/calender/insidePictures/impact2.gif"
      desc2=""
      desc3=""
      pic3="/calender/insidePictures/impact3.gif" />,
  },

  {
    category: "National Conference",
    title: "Lead & Lead",
    src: "/calender/outerPictures/lnl.png",
    content: <SliderCard
      desc1="hello"
      pic1='this is parag'
      pic2=""
      desc2=""
      desc3=""
      pic3="" />,
  },
  {
    category: "Local Conference",
    title: "LMS",
    src: "/calender/outerPictures/lms.png",
    content: <SliderCard
      desc1="LMS stands for 'Local Motivational Seminar,' and it is the second local conference of the term, typically held in the middle of the semester. Like ULDS, LMS is centered around keeping our members engaged and motivated by revisiting our goals for the term and celebrating the progress made so far. It’s an opportunity for members to recharge their energy and reconnect with each other after the early term rush."
      pic1="/calender/insidePictures/lms1.png"
      pic2="/calender/insidePictures/lms2.png"
      desc2="While LMS is relatively newer than ULDS, it has quickly established itself as an important tradition in our LC. Introduced about a decade ago, LMS serves as a mid-term check-in, allowing the entire LC to come together and reflect on its progress. It’s become a key moment for teams to reignite their passion and focus for the rest of the term."
      desc3="LMS, like ULDS, offers our members a range of development opportunities. Organized by an Organizing Committee, LMS allows the team to develop project management, communication, and problem-solving skills. It also provides a setting for members to refine their networking abilities, connect with fellow AIESECers, and gain fresh motivation for the second half of the term. The seminar’s workshops and sessions focus on professional and personal development, which helps members reflect on their growth since ULDS."
      pic3="/calender/insidePictures/lms3.png" />,
  },
  {
    category: "BD Project",
    title: "Cypher Out",
    src: "/calender/outerPictures/cypherout.png",
    content: <SliderCard
      desc1="Cypher Out is a Hackathon that brings together various stakeholders, including students, digital professionals, and entrepreneurs, all united in the goal of finding innovative and effective solutions to pressing challenges. The event serves as a platform for discussing technological alternatives and adapting innovative projects to the Tunisian entrepreneurial ecosystem. It’s an educational opportunity that combines a two-day hackathon with workshops and learning spaces, where participants can develop their ideas. The hackathon topic is revealed on the day of execution, and winners are announced during the second part of the event, the Job Fair, which brings together well-known and influential companies to connect with young talent."
      pic1="/calender/insidePictures/cypherout1.png"
      pic2="/calender/insidePictures/cypherout2.png"
      desc2="Cypher Out has become a key event for LC University, with this year marking the fifth edition of the initiative. It is set to take place simultaneously across three 'Go My Code' locations, reflecting the growth and expansion of the event. In previous years, Cypher Out was held in prestigious venues such as the UIT premises last year and the Central Bank of Tunisia the year before. Its success over the years has solidified its importance within AIESEC and the broader entrepreneurial community, making it a hub for innovation, collaboration, and career development."
      desc3="Cypher Out presents an incredible opportunity for participants to engage in hands-on learning and problem-solving through the hackathon and educational workshops. It allows them to connect with peers, mentors, and industry leaders, facilitating both personal and professional growth. The Job Fair portion of the event provides an invaluable chance for young participants to meet and network with leading companies, opening doors to potential employment opportunities. For LC University, Cypher Out is not only a significant event but a chance to contribute meaningfully to Tunisia’s entrepreneurial and digital ecosystem by fostering a new generation of innovators."
      pic3="/calender/insidePictures/cypherout3.png" />,
  },
  {
    category: "National Conference",
    title: "Nat'Co",
    src: "/calender/outerPictures/natco.png",
    content: <SliderCard
      desc1="hello"
      pic1="/calender/insidePictures/natco1.png"
      pic2="/calender/insidePictures/natco2.png"
      desc2=""
      desc3=""
      pic3="/calender/insidePictures/natco3.png" />,
  },
  {
    category: "Local Conference",
    title: "ULC",
    src: "/calender/outerPictures/ulc.png",
    content: <SliderCard
      desc1="ULC stands for 'UNIVERSITY Legacy Conference,' and it is the third and final local conference of the term. ULC shares the same objectives as LMS and ULDS but has a special emotional aspect as it serves as a farewell to the outgoing Executive Board (EB) and members who are leaving AIESEC. It’s a time of reflection, celebration, and transition as the LC looks back on the achievements of the term and prepares for the future."
      pic1='this is parag'
      pic2=""
      desc2="ULC is one of the most significant conferences in our LC’s history, dating back over a decade. Over the years, it has evolved into a deeply emotional and reflective moment for all members. ULC is the place where the EB's term comes full circle, allowing them to hand over the torch to the incoming leadership. Its legacy aspect is rooted in the tradition of recognizing those who have contributed significantly to the LC, making it a moment of pride and honor for outgoing members."
      desc3="ULC offers a unique blend of professional and emotional opportunities. While members can still take advantage of workshops and team activities like in ULDS and LMS, ULC’s emotional component provides a space for reflection and closure. For the Organizing Committee, it's an opportunity to learn how to plan and execute an event that is both professionally engaging and personally meaningful. ULC also fosters a deep sense of connection and continuity, as current members prepare to carry on the legacy of the outgoing EB and older members."
      pic3="" />,
  },


];
