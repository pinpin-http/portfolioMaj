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
import auth2 from '../../assets/recentprojects/auth2.png';
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
      description: `Un site personnel en ReactJS et threeJS`,
      precision:'J\'ai dev une page portfolio avec des animations 3D en three.js pour le fond d\'écran donnant un aspect dynamique et sobre. Il permet de me presenter rapidement et de mettre en valeur les travaux et projets que j\'ai pu accomplir ces dernieres année',
      competences:'NodeJS / ReactJS / threeJS / JS / CSS / npm',
      complementCompetence:'J\' ai pu monter en competence dans le developpement en NodeJS ce qui m\'a permis d\'enchainer avec d\'autres projets du meme genre. Je suis passé du status de novice au status intermediaire en maitrisant les bases de cette technologie. ',
      accomplir : 'Pour pouvoir progresser dans ce domaine, je devrais me concentrer sur les nouvelles technologies du Web en accomplissant plus de projets et en ameliorant celui-ci en le rendant plus modulaire et potentiellement ajouter une interface d\'administration pour ajouter des projets sans passer par le code .',
      nomDuLien:'Lien vers mon portfolio',
      liens:'https://www.bouazzaouisoheib.site/',
      alter: 'Portfolio',
      images: [Portfolio],
    },
    { 
      id: 2,
      title: 'Projet: connexion CAS et analyse visuelle de données',
      description: `Un projet universitaire en PHP`,
      precision:'Un projet en php visant à developper un formulaire de connexion simple permettant l\'accès à l\'intranet de l\'IUT au personnel du corps enseignant enregistré dans la base de données grâce au CAS et se connecter à un service lié.Grâce à l\'algorithme de cryptographie asymétrique RSA, les données sont entièrement chiffrées de bout en bout. Le site derriere ce portail est une interface d\'administration qui permet au role administrateur de visualiser les données presente dans la BDD',
      competences:'RSA / Figma / HTTP / TailwindCSS / PHP / OpenSSL / PostgreSQL / JS',
      complementCompetence:' Ce projet a été un atout en terme d\'autoformation dans le domaine de la représentation de large base de données sous forme de graphiques. Il m\'a aussi Une meilleur compréhension du système d’authentification ; Une approche du design en cohérence avec le site a implémenter ; Etablir un projet from scratch en equipe',
      accomplir:'J\'aimperai completer ce projet en utilisant un framework PHP comme Laravel ou Symfony plutot que du PHP natif ce qui me permettrai de prendre en competence dans un domaine recherché sur le marché du developpement web',
      nomDuLien:'GitLab du projet',
      liens:'https://gitlab.sorbonne-paris-nord.fr/12200893/app-web-hkmt',
      alter: 'CAS',
      images: [Veritru, auth2],
    },
    { 
      id: 3,
      title: 'Pinpin OS',
      description: `Un custom OS pour la switch `,
      precision: 'Le but de ce projet est de faire et de distribuer un systeme d\'exploitation open source basé sur debian qui tournerai sur la switch. Le projet est build a partir du projet L4T. Le principal interet etant de faire tourner des jeux steam sur un processeur ARM. Le projet est pour le moment en phase de test et en privé, il sera posté sur github sous peu.',
      competences:"Linux / Tegra / C / Bash / ",
      complementCompetence:"Ce projet m'a permis de monter en compétence dans le domaine du bas niveau à travers la customisation du kernel et le développement de features en C. J'ai aussi pu m'améliorer en lecture de documentation lors de mes recherches sur les technologies à mettre en œuvre. ",
      accomplir:"J'aimerai pousser le projet plus loin en le rendant public afin de collaborer, mais je dois valider mes bases solides avant. Mon objectif sur les prochains mois et de rendre le demmarage avec le custom kernel stable et avoir un systeme plus léger. ",
      nomDuLien:"Page du projet d'origine",
      liens:'https://wiki.switchroot.org/wiki/linux/l4t-ubuntu-bionic-installation-guide',

      images: [Lofo],
    },
    { 
      id: 4,
      title: 'chiffrement RSA', 
      description: `Un projet de cryptographie avec des outils mathématiques et du PHP`,
      precision:"Développement d'un système de chiffrement de mot de passe basé sur l'algorithme RSA en suivant l'approche mathématique du sujet en etudiant les nombres premiers. L'algorithme reste cependant attaquable car la génération des keys est assez faible. Ce projet avait pour but de tester et pousser mes connaissances en cryptographie en abordant un protocole repandue. ",
      competences:"PHP / PostgreSQL / RSA ",
      complementCompetence:"À travers ce projet, j'ai pu découvrir les bases de la cryptographie en mathématique en appliquant des propriétés telles que le théorème de Fermat ou encore l'exponentiation modulaire. J'ai pu aussi pousser mes connaissances en PHP en utilisant un module de cryptographie deja implementé.",
      alter: 'RSA',
      accomplir:"J'aimerai faire le meme type de projet avec un outil de chiffrement different, ou alors pousser ce projet la en generant les bases de mon algo aléatoirement pour avoir des clées plus solide ",
      nomDuLien:"GitHub du projet RSA",
      liens:"https://github.com/ryujin8sama/RSA/tree/main",
      images: [Startup],
      plus:"(voir github pour le code source)",
    },
    { 
      id: 5,
      title: 'Donut C', 
      precision:`Réalisation du défi : "make the donut" organisé par des eleves de l'université qui consite a reproduire le donut rotatif developpé en C. Le defi demande des connaissances en mathématiques et des connaissances en C solide. Le but était de mettre en pratique les competences enseigné au deuxieme semestre de la formation.`,
      alter: 'Dooooooooonut',
      nomDuLien:"Explication du fonctionnement",
      competences:"C / asccii rendering / Maths",
      complementCompetence:"J'ai pu m'améliorer en mathématiques et en C. La gestion de l'affichage en ASCII m'a fait comprendre des concepts innovants que je n'avais jamais utilisés auparavant.",
      accomplir:"Le projet est clos et j'aimerai m'amuser un peu plus à développer des petits programmes du genre pour m'améliorer en bas niveau et en logique mathématique.",
      liens:"https://www.a1k0n.net/2011/07/20/donut-math.html",
      images: [Lacalle],
    },
    { 
      id: 6,
      title: 'Gestion projet Laravel', 
      description: `Mise à jour d'un projet Laravel et développement de features`,
      precision: `Mise à jour d'un projet Laravel de la version 6 à la version 10 et intégration d'un back office avec des interactions avec la bdd en utilisant l'orm Eloquent. J'ai pu développer beaucoup de nouvelles features basées principalement sur du Laravel, de l'HTML, du SASS et du JS.`,
      competences:"PHP / Laravel / Eloquent / VueJS / SASS / composer / BUN",
      complementCompetence:"J'ai appris le fonctionnement de Laravel et de son système d'ORM. J'ai pu pour la première fois entreprendre un projet PHP à taille réelle avec un enjeu. Ce projet m'a permis de découvrir l'approche framework de PHP et les facilités qui viennent avec, étant donné que je m'étais habitué à du PHP brut.",
      accomplir:"J'aimerai pousser ce projet plus loin afin de donner un vrai sens à mon travail et de faire valoriser mes compétences en ajoutant, entre autres, un système de forum et un outil de chatbotting intégré à la main page.",
      nomDuLien:"(Bientot disponible)",
      liens:'',
      alter: 'laravel',
      images: [Laravel],
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
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Résumé du projet</h3>
      <p style={{ 
        marginLeft: '5%', 
        width: '100%', 
        wordWrap: 'break-word', 
        alignSelf: 'flex-start' 
      }}>
        {selectedProject.precision}
        <br></br>
        <br></br>
        Voici les competences que j'ai pu developper lors de ce projet : <strong>{selectedProject.competences}</strong>
        <br></br>
        <br></br>
        <strong>Ce qu'il m'a apporté : </strong>{selectedProject.complementCompetence}
        <br></br>
        <br></br>
        <strong>Angle de progression : </strong>{selectedProject.accomplir}

        <br></br>
        <br></br>
        {selectedProject.plus}


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
        marginRight: '50%', 
        width: '100%', 
        wordWrap: 'break-word', 
        textAlign: 'center',
        alignSelf: 'flex-start' 
      }}>
        <a href= {selectedProject.liens}>{selectedProject.nomDuLien}</a>
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
