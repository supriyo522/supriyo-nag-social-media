import React, { Component } from "react";
import "./dashboard-card-container.css";
import CardBig from "./dashboard-card";
import CardSmall from "./dashboard-card-small";
import Navbar from "./dashboard-nav";
import facebook from "../images/icon-facebook.svg";
import iconup from "../images/icon-up.svg";
import icondown from "../images/icon-down.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-body">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="section1">
          <CardBig
            imgsrc={facebook}
            username="@snag"
            followernumber="5129"
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar"
            LargeCard="largeCard1"
            LargeCardSocial="#largeCardSocialName1"
          />
          <CardBig
            imgsrc={twitter}
            username="@snag"
            followernumber="1244"
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar"
            LargeCard="largeCard2"
            LargeCardSocial="#largeCardSocialName2"
          />
          <CardBig
            imgsrc={instagram}
            username="@realsnag"
            followernumber="13k"
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar3"
            LargeCard="largeCard3"
            LargeCardSocial="#largeCardSocialName3"
          />
          <CardBig
            imgsrc={youtube}
            username="Bong Supriyo"
            followernumber="8122"
            follower="subscribers"
            imgsrc1={icondown}
            today="144 Today"
            cssClass="color-bar2"
            LargeCard="largeCard4"
            LargeCardSocial="#largeCardSocialName4"
          />
        </div>
        <div className="sub-header">
          <p>Overview - Today</p>
        </div>
        <div className="section1">
          <CardSmall
            imgsrc={facebook}
            smallheader="Page Views"
            countnumber="98"
            percent="3%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard1"
          />
          <CardSmall
            imgsrc={facebook}
            smallheader="Page Views"
            countnumber="76"
            percent="2%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard2"
          />
          <CardSmall
            imgsrc={instagram}
            smallheader="Likes"
            countnumber="7533"
            percent="2257%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard3"
          />
          <CardSmall
            imgsrc={instagram}
            smallheader="Profile Views"
            countnumber="84k"
            percent="1305%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard4"
          />
        </div>
        <div className="section2">
          <CardSmall
            imgsrc={twitter}
            smallheader="Retweets"
            countnumber="117"
            percent="503%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard1"
          />
          <CardSmall
            imgsrc={twitter}
            smallheader="Likes"
            countnumber="809"
            percent="653%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard2"
          />
          <CardSmall
            imgsrc={youtube}
            smallheader="Likes"
            countnumber="507"
            percent="15%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard3"
          />
          <CardSmall
            imgsrc={youtube}
            smallheader="Team Views"
            countnumber="5407"
            percent="14%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard4"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
