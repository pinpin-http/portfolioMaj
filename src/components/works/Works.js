import React, { useState } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    padding: "0 2em"
  },
}));

Modal.setAppElement('#root');
var ReactDOM = require('react-dom');

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    { 
      id: 1,
      title: 'Portfolio',
      description: `J'ai dev une page portfolio
      avec des animations 3D en three.js pour le
      fond d'écran dynamique. Il permet de me presenter rapidement et de mettre en valeur mes travaux`,
      alter: 'Portfolio',
      images: [Portfolio, Veritru],
    },
    { 
      id: 2,
      title: 'Service d\'authentification',
      description: `Un formulaire de connexion simple permettant l'accès à l'intranet de l'IUT au personnel du corps enseignant enregistré dans la base de données grâce au CAS et se connecter à un service lié.
      Grâce à l'algorithme de cryptographie asymétrique RSA, les données sont entièrement chiffrées de bout en bout.`,
      alter: 'CAS',
      images: [Veritru, Lofo],
    },
    { 
      id: 3,
      title: 'Pinpin OS',
      description: `Le but de ce projet est de faire et de distribuer un systeme d'exploitation open source basé sur debian qui tournerai sur la switch. Le projet est build a partir du projet L4T. Le principal interet etant de faire tourner des jeux steam sur un processeur ARM. Le projet est pour le moment en phase de test .`,
      alter: 'Projet pinpinOS',
      lien:'https://wiki.switchroot.org/wiki/linux/l4t-ubuntu-bionic-installation-guide',

      images: [Lofo, Startup],
    },
    { 
      id: 4,
      title: 'chiffrement RSA', 
      description: `Développement d'un système de chiffrement de mot de passe basé sur l'algorithme RSA en suivant l'approche mathématique du sujet. L'algorithme reste cependant attaquable car la génération des keys est assez faible. Ce projet avait pour but de tester les connaissances cryptographique des eleves. `,
      alter: 'RSA',
      images: [Startup, Lacalle],
    },
    { 
      id: 5,
      title: 'Donut C', 
      description: `Un donut rotatif codé en C`,
      precision:`Réalisation du défi : "make the donut" organisé par des eleves de l'université qui consite a reproduire le donut rotatif developpé en C. Le defi demande des connaissances en mathématiques et des connaissances en C solide. Le but était de mettre en pratique les competences enseigné au deuxieme semestre de la formation.`,
      alter: 'Dooooooooonut',
      images: [Lacalle, Laravel],
    },
    { 
      id: 6,
      title: 'Gestion projet Laravel', 
      description: `Mise a jour d'un projet laravel de la version 6 a la version 8 et integration d'un back office avec des interactions avec la bdd en Laravel. j'ai utilisé beaucoup d'outils web rincipalement axée autour du PHP, du Laravel, de l'HTML, du CSS et du JS.   `,
      alter: 'laravel',
      images: [Laravel, Portfolio],
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id} onClick={() => openModal(project)}>
            <div className="__img_wrapper">
              <img src={project.images[0]} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description" style={{ alignSelf: 'center', width: '100%', textAlign: 'center' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
        {selectedProject && (
          
  <Modal 
  isOpen={modalIsOpen} 
  onRequestClose={closeModal}
  style={{
    content: {
      width: '80%',
      height: '80%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '2em',
      boxSizing: 'border-box',
      background: 'rgba(255, 255, 255, 0.6)', // Légèrement transparent
      backdropFilter: 'blur(10px)', // Ajouter un effet de flou
      borderRadius: '16px', // Ajouter des coins arrondis

    }
  }}
>
  <h2 style={{ alignSelf: 'center', width: '100%', textAlign: 'center' }}>{selectedProject.title}</h2>
  <Carousel showThumbs={false} useKeyboardArrows={true} style={{ alignSelf: 'center', width: '100%' }}>
    {selectedProject.images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`${selectedProject.alter} ${index + 1}`} style={{ maxWidth: '60%', height: 'auto' }} />
      </div>
    ))}
  </Carousel>
  <div style={{ display: 'flex', width: '100%', marginTop: '1em', position: 'relative' }}>
    <div style={{ width: '45%', paddingRight: '2.5%' }}>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Résumé</h3>
      <p style={{ 
        marginLeft: '5%', 
        width: '100%', 
        wordWrap: 'break-word', 
        alignSelf: 'flex-start' 
      }}>
        {selectedProject.precision}
      </p>
    </div>
    <div style={{
      width: '1px', 
      backgroundColor: 'black', 
      height: '100%', 
      position: 'absolute', 
      left: '50%', 
      transform: 'translateX(-50%)' 
    }}></div>
    <div style={{ width: '45%', paddingLeft: '2.5%' }}>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Liens et ressources</h3>
      <p style={{ 
        marginRight: '5%', 
        width: '100%', 
        wordWrap: 'break-word', 
        textAlign: 'right',
        alignSelf: 'flex-start' 
      }}>
        {selectedProject.additionalText}
      </p>
    </div>
  </div>
  <p style={{ alignSelf: 'center', width: '100%', textAlign: 'center' }}>{selectedProject.lien}</p>
  <button style={{ alignSelf: 'center' }} onClick={closeModal}>Fermer le résumé du projet</button>
</Modal>

     
        )}
      </Container>
    </section>
  );
};
