import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="title1" description="this is card1" />
        <Card title="title2" description="this is card2" />
        <Card title="title3" description="this is card3" />
        <Card title="title4" description="this is card4" />
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
