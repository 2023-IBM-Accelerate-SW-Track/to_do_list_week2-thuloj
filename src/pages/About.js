import React, { Component } from "react";
import "./About.css";
import profile_pic_aaryaman from "../assets/profile_pic_aaryaman.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile_pic_aaryaman}
                alt="Profile Pic - Aaryaman Thuloj"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Aaryaman Thuloj</div>
              <div className="brief_description">
                Hey guys! I'm a rising junior at Rensselaer Polytechnic
                Institute studying Computer Science! I'm passionate about
                software development and have interests in the following areas:{" "}
                <ul>
                  <li>Full Stack Web Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Machine Learning</li>
                  <li>Computational Finance</li>
                </ul>
                Excited to work with you all!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
