import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CardExampleGroupProps from "../../Components/Card/card"
import { Card, Modal, Header, Image } from "semantic-ui-react";
import Quvare from "../../assets/logos/98cd65fb92e6ab981ecd885b2be0537c.png";
import Wanderin from "../../assets/logos/wand.logo.png";
import Ciphermall from "../../assets/logos/download.png";
import CipherAds from "../../assets/logos/download1.jpeg";
import Bizstandards from "../../assets/logos/41866322_1948344631897920_1965008096958873600_o.png";
export default class Responsive extends Component {
  render() {
    const items = [
      {
        header: "Quvare",
        url:"http://quvare-frontend.com360degree.com:3000/",
        Image:  Quvare ,
        description: "ReactJs, JavaScript, NodeJs, MongoDB, HTML, CSS3",
        meta: "ROLE: Full Stack Developer (ReactJS/ NodeJs/ UI-Developer)",
        des:
          "Description: It is a Tourism Website. The Project is to develop a tourism website for the end user in order to check their favorite spots and book their trips in a very few simple steps.",
        responsibility: [
          {
            point:
              "Designed the front end applications, user interactive (UI) web pages using ReactJs and responsiveness using Material UI react.",
          },
          { point: "Developed API’s using NodeJs." },
        ],
      },
      {
        header: "Wanderin",
        url:"https://www.wanderin.in/#/",
        Image:  Wanderin ,
        description: "ReactJs, JavaScript, PHP, MYSQL, HTML, CSS3, SASS.",
        meta: "ROLE: Full Stack Developer (ReactJS/ PHP/ UI-Developer).",
        responsibility: [
          {
            point:
              "Designed the front end applications, user interactive (UI) web pages using HTML , ReactJs and responsiveness using Semantic UI react.",
          },
          {
            point:
              "Developed API’s using PHP and integrated in frontend React.",
          },
          {
            point: "Designed Admin panel (using PHP, jquery, Bootstrap)",
          },
          {
            point: "Experience of working on CSS Preprocessors like SASS.",
          },
          {
            point:
              "Dynamical rendering of events from admin panel, popular spots and various information across the Application.",
          },
          {
            point:
              "Worked on Dynamical rendering of information in Slider and Dimmer card in Homepage. Designed Dynamic Sorting in Events Page.",
          },
          {
            point:
              "Participated in the status meetings and status updating to the management team.",
          },
          {
            point:
              "Responsible for the design of client websites right from the conceptualization stage to its implementation and maintenance",
          },
          {
            point:
              "Involved in all the phases of Project including Requirements Collection, Design & Analysis of the Customer Specifications, Development and Customization of the Application.",
          },
          {
            point: "Experience worked with Google Analytics Project",
          },
        ],
      },
      {
        header: "CipherMall",
       url:"http://uitechies.co.in/Ciphermall",
        Image: Ciphermall ,
        description: "ReactJs, JavaScript, PHP, MYSQL, HTML, CSS3, SASS.",
        meta: "ROLE: Full Stack Developer (ReactJS/ PHP/ UI-Developer)",
        responsibility: [
          {
            point:
              "Designed the front end applications, user interactive (UI) web pages using HTML , ReactJs and responsiveness using Semantic UI react.",
          },
          {
            point:
              "Developed API’s using PHP and integrated in frontend React.",
          },
          {
            point:
              "Worked with Admin Panel where Admin can Add, Update and delete a Particular product, Integrated related information regarding the product Status, User feedback, Delivery status and so on.",
          },
          {
            point:
              "Participated in the status meetings and status updating to the management team.",
          },
          { point: "Experience of working on CSS Preprocessors like SASS." },
          {
            point:
              "Responsible for the design of client websites right from the conceptualization stage to its implementation and maintenance",
          },
          {
            point:
              "Involved in all the phases of Project including Requirements Collection, Design & Analysis of the Customer Specifications, Development and Customization of the Application.",
          },
        ],
      },
      {
        header: " BizStandards",
        url:"www.bizstandards.com",
        Image:  Bizstandards ,
        description: "HTML/HTML5, CSS3, Bootstrap, JavaScript, Jquery.",
        meta: "ROLE: Web/ Front End/UI Developer",
        responsibility: [
          {
            point:
              "Designed the front end applications, user interactive (UI) web pages using web technologies like HTML, CSS, and Bootstrap.",
          },
          {
            point:
              "Developed page layouts, navigation and icons. Applied industry best practices and standards when project requirements were lagging.",
          },
          {
            point:
              "Worked with CSS background, CSS Layouts, CSS positioning, CSS text, CSS border, CSS margin, CSS padding, Pseudo elements and CSS behaviors.",
          },
          {
            point:
              "Participated in making Responsive Web Designs using Media Queries and Twitter Bootstrap.",
          },
          {
            point:
              "Worked with the team of architects and back-end developers to gather requirements and enhance the application functionality.",
          },
        ],
      },
      {
        header: "Cipher Ads",
        url:"AVAILABLE IN PLAY STORE",
        Image:  CipherAds ,
        description: "HTML5, CSS, PHP, JavaScript, Jquery",
        meta: "ROLE: Back End/Admin/ UI Developer",
        responsibility: [
          {
            point:
              "Developed API’s using PHP and integrated in frontend React.",
          },
          {
            point:
              "Worked with Admin Panel where Admin can Add, Update and delete a Particular Add, Integrated related information regarding the video status, User feedback, Wallet Information.",
          },
          {
            point:
              "Display of Ads based on locations and with multiple pin codes.",
          },
          {
            point:
              "Participated in the status meetings and status updating to the management team.",
          },
          {
            point:
              "Worked with the team of architects and back-end developers to gather requirements and enhance the application functionality.",
          },
        ],
      },
    ];
    var settings = {
      //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} style={{ margin: "0rem 1.5rem" }}>
          {items.map((el) => {
            return (
              <Modal
                trigger={
                  <div style={{ margin: "0.5rem" }}>
                    <Card>
                      <Card.Content>
                        <Card.Header content={el.header} />
                        <Card.Meta content={el.meta} />
                        <Card.Description content={el.description} />
                      </Card.Content>
                    </Card>
                  </div>
                }
              >
                <Modal.Header>{el.header}
                <a href={el.url} target="blank"> ({el.url}) </a> 
                 </Modal.Header>
                
                <Modal.Content>
                    <div style={{display:"inline-flex"}}>
                        <div style={{textAlign:"-webkit-center"}}> 
                        <a href={el.url} target="blank"> <Image wrapped size="medium" src={el.Image} /></a> 
                        </div>
            {/* <h4 href={el.url}>URL : {el.url}</h4> */}
                        <div>
                        <Modal.Description>
                    <Header>My Responsibilities in the Project</Header>
                    {el.responsibility.map((point) => {
                      return <p> * {point.point}</p>;
                    })} 
                  </Modal.Description>
                        </div>
                    </div>
                </Modal.Content>
                {/* </div> */}
              </Modal>
            );
          })}
        </Slider>
      </div>
    );
  }
}
