import Benefits from "./Benefits"
import CultureAndValues from "./CultureAndValues"
import Hero from "./Hero"
import Numbers from "./Numbers"
import Partners from "./Partners"


const Home = () => {
  return (
    <main className='' id="home">
        <Hero />
        <CultureAndValues />
        <Benefits />
        <Numbers />
        <Partners />
    </main>
  )
}

export default Home