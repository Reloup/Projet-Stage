import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




// Composant de classe (avec etat)
export default class IndexPage extends React.Component {
  state = {
    nom: "",
    email: "",
  }
// Actualise les données rentrer dans le champ a chaque changement
  handleInputChange = event => {
    const target = event.target
    console.log(target.value)
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })

  }

    handleSubmit = event => {
      event.preventDefault()
      alert(`Welcome ${this.state.nom} ${this.state.email}!`)
    }

  render() {  
    return  <Layout>
    <Seo title="Home" /> 
    
    <h1>Hi people 147</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>branch develop</p>
    <form action="" method="post" onSubmit={this.handleSubmit}>
      <label htmlFor="nom">Nom : <input 
      type="text" 
      name="nom"
      value={this.state.nom}
      onChange={this.handleInputChange}
       />
    </label> <br></br>
      <label htmlFor="email">Email : <input 
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

    <div>
      
    </div>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
}
}

