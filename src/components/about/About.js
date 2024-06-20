/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Bonjour!";
  const aboutme = 'Mon nom est Bouazzaoui Soheib et je suis un étudiant en informatique passionné par la cybersécuritée et le web en general. Je suis constamment à la recherche de nouveaux défis, ce qui me pousse à m\'intéresser à un large éventail de sujets variés! Travailler sur de gros projets web en fullstack est quelque choseque j\'apprécie particulièrement et que j\'ai pu mettre en oeuvre ces dernieres années.Je suis actuellementen 2ème année de BUT informatique à l IUT de Villetaneuse et a la recherche d\'une alternance dans le domaine .  ' ;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`Bonjour !`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Envoyez moi un message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
