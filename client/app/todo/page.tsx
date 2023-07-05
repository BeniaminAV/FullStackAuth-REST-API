import Navbar from "../components/Navbar"
import GetTodos from "./components/GetTodos"

export default function Todo() {
  return (
    <main>
      <Navbar />
      <div className="mx-10 pt-20">
        <h2 className="py-10 title-page">This is Todo Page</h2>
        <GetTodos />
      </div>
    </main>
  )
}
