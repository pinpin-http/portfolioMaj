/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import Laravel from '../../assets/recentprojects/laravel.png';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Portfolio',
      description: `J'ai dev une page portfolio
      avec des animations 3D en three.js pour le
      fond d'écran dynamique. Il permet de me presenter rapidement et de mettre en valeur mes travaux`,
      alter: ' Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Service d\'authentification',
      description: `Un formulaire de connexion simple permettant l'accès à l'intranet de l'IUT au personnel du corps enseignant enregistré dans la base de données grâce au CAS et se connecter à un service lié.
      Grâce à l'algorithme de cryptographie asymétrique RSA, les données sont entièrement chiffrées de bout en bout.`,
      alter: 'CAS',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Pinpin OS',
      description: `Le but de ce projet est de faire et de distribuer un systeme d'exploitation open source basé sur debian qui tournerai sur la switch. Le projet est build a partir du projet L4T. Le principal interet etant de faire tourner des jeux steam sur un processeur ARM. Le projet est pour le moment en phase de test .`,
      alter: 'Projet pinpinOS',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'chiffrement RSA', 
      description: `Développement d'un système de chiffrement de mot de passe basé sur l'algorithme RSA en suivant l'approche mathématique du sujet. L'algorithme reste cependant attaquable car la génération des keys est assez faible. Ce projet avait pour but de tester les connaissances cryptographique des eleves. `,
      alter: 'RSA',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Donut C', 
      description: `Réalisation du défi : "make the donut" organisé par des eleves de l'université qui consite a reproduire le donut rotatif developpé en C. Le defi demande des connaissances en mathématiques et des connaissances en C solide. Le but était de mettre en pratique les competences enseigné au deuxieme semestre de la formation.`,
      alter: 'Dooooooooonut',
      image: `${Lacalle}`,
    }, { 
      id: 6,
      title: 'Gestion projet Laravel', 
      description: `Mise a jour d'un projet laravel de la version 6 a la version 8 et integration d'un back office avec des interactions avec la bdd en Laravel. j'ai utilisé beaucoup d'outils web rincipalement axée autour du PHP, du Laravel, de l'HTML, du CSS et du JS.   `,
      alter: 'laravel',
      image: `${Laravel}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
