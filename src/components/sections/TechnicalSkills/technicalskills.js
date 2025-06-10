import React from "react";
import "./technicalskills.css";
import javaIcon from "../../Images/java";
import springBootIcon from "../../Images/springBoot";
import htmlIcon from "../../Images/html";
import cssIcon from "../../Images/css";
import jsIcon from "../../Images/javascript";
import reactIcon from "../../Images/react";
import oracleIcon from "../../Images/oracle";
import plsqlIcon from "../../Images/plsql";
import mysqlIcon from "../../Images/mySql";
import awsIcon from "../../Images/aws";

export const TechnicalSkills = () => {
  return (
    <div className="ts-container" id="TechnicalSkills">
      <div className="ts-title">Technical Skills</div>

      
      <div className="row-container">
        <div className="column">
          <h2 className="section-title">Backend</h2>
          <div className="icon-grid">
            <div className="tech-item">
              <img src={javaIcon} alt="Java" className="tech-icon" />
              <p className="icon-label">Java</p>
            </div>
            <div className="tech-item">
              <img src={springBootIcon} alt="Spring Boot" className="tech-icon" />
              <p className="icon-label">Spring Boot</p>
            </div>
          </div>
        </div>

        <div className="column">
          <h2 className="section-title">Frontend</h2>
          <div className="icon-grid">
            <div className="tech-item">
              <img src={htmlIcon} alt="HTML" className="tech-icon" />
              <p className="icon-label">HTML</p>
            </div>
            <div className="tech-item">
              <img src={cssIcon} alt="CSS" className="tech-icon" />
              <p className="icon-label">CSS</p>
            </div>
            <div className="tech-item">
              <img src={jsIcon} alt="JavaScript" className="tech-icon" />
              <p className="icon-label">JavaScript</p>
            </div>
            <div className="tech-item">
              <img src={reactIcon} alt="React" className="tech-icon" />
              <p className="icon-label">React</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-container">
        <div className="column">
          <h2 className="section-title">Database</h2>
          <div className="icon-grid">
            <div className="tech-item">
              <img src={oracleIcon} alt="Oracle" className="tech-icon" />
              <p className="icon-label">Oracle</p>
            </div>
            <div className="tech-item">
              <img src={mysqlIcon} alt="MySQL" className="tech-icon" />
              <p className="icon-label">MySQL</p>
            </div>
            <div className="tech-item">
              <img src={plsqlIcon} alt="PL/SQL" className="tech-icon" />
              <p className="icon-label">PL/SQL</p>
            </div>
          </div>
        </div>

        <div className="column">
          <h2 className="section-title">Cloud</h2>
          <div className="icon-grid">
            <div className="tech-item">
              <img src={awsIcon} alt="AWS" className="tech-icon" />
              <p className="icon-label">AWS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
