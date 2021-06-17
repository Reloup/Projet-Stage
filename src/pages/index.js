import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./styles.scss"

// Composant de classe (avec etat)

export default class IndexPage extends React.Component {
  state = {
    nom: "",
    email: "",
    nbrFenetre: "",
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

// Actualise les données rentrer dans le champ a chaque changement
  handleInputChange = event => {
    const target = event.target
    console.log(target.value)
    const value = target.value
    const name = target.name
    // Affiche la valeur du champ modifié
    this.setState({
      [name]: value,
    })

  }

    handleSubmit = event => {
      event.preventDefault()
      console.log(this.state);
      //  alert(`Welcome ${this.state.nom} ${this.state.email}!`)
    }
// Affiche message console formulaire step by step
    handleSubmitStepByStep = event => {
      console.log(this.state);
      //  alert(`Vous avez choisi ${this.state.nbrFenetre} ${this.state.value} !`)
      event.preventDefault();
    }

     handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {  
    return  <Layout>
    <Seo title="Home" /> 
    <div>
    <h1 id="test">Hi people 147</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>branch develop test modification</p>
    <form action="" method="post" onSubmit={this.handleSubmit}>
      <label htmlFor="nom">Nom : 
      <input 
      type="text" 
      name="nom"
      value={this.state.nom}
      onChange={this.handleInputChange}
       />
    </label> <br></br>
      <label htmlFor="email">Email : 
      <input 
      type="text" 
      name="email" 
      // Maintient l'etat de l'entree a jour
      value={this.state.email}
      // Change l'etat 
      onChange={this.handleInputChange}
      />
      </label> <br></br>
      <input type="submit"></input>
    </form>
    <select>
      <option>--menu--</option>
      <option>porte</option>
      <option>chaise</option>
      <option>table</option>
    </select>
    </div> 
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2 id="titreFormulaire">Formulaire de demande de devis :  </h2> 
    <div id="bloc1">
    <h3 id="expliquerVotreProjet">Expliquer nous votre Projet</h3>
    <form  action="" method="post" onSubmit={this.handleSubmitStepByStep}>
      <br/>
      <select id="typeFenetre" value={this.state.value} onBlur={this.handleChange}>
        <option value="Fenêtre fixe">Fenêtre fixe</option>
        <option value="Fenêtre à soufflet">Fenêtre à soufflet</option>
        <option value="Fenêtre Battante">Fenêtre Battante</option>
      </select>
       <br/> <br/>
    <label  htmlFor="nbrFnetre">
    <input id="nbrFenetre"
    type="text" 
    name="nbrFenetre" 
    placeholder="Nombre de fenêtre"
     // Maintient l'etat de l'entree a jour
     value={this.state.nbrFenetre}
     // Change l'etat 
     onChange={this.handleInputChange}
     ></input> <br></br> <br></br>
    <input id="submitFenetre" type="submit" value="Envoyer"></input>
     </label>
    </form>
    </div>
    <p>
      <Link to="/app/">Lien vers composant app</Link> <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  
}
}

