import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1 className= "text-4xl">Der Wegweiser zu Premium-Immobilien in Frankfurt.</h1>
        <button>Los Geht's</button>
      </section>

      <section className="featured-properties">
        {/* Immobilienanzeigen hier */}
      </section>
    </main>
  )
}
