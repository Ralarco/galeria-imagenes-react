import "./App.css";
import CardComponent from "./components/CardComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes React" img="logo192.png" />
      <div className="row">
        <CardComponent
          img="https://placedog.net/201/200?r"
          title="Slinky"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

        <CardComponent
          img="https://placedog.net/200/201?r1"
          title="Snoopy"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

        <CardComponent
          img="https://placedog.net/201/201?a"
          title="Toto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

        <CardComponent
          img="https://placedog.net/200/200?a"
          title="Marley"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

          <CardComponent
          img="https://placedog.net/201/202?a"
          title="Scooby"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

          <CardComponent
          img="https://placedog.net/202/201?a"
          title="Astro"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

          <CardComponent
          img="https://placedog.net/202/202?a"
          title="Truman"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />

          <CardComponent
          img="https://placedog.net/202/200?a"
          title="Krypto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis non tortor varius fermentum id eget ante."
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
