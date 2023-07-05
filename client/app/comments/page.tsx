import Navbar from "../components/Navbar"
import GetComments from "./components/GetComments"

export default function Components() {
  return (
    <main>
      <Navbar />
      <div className="mx-10 pt-20">
        <h2 className="py-10 title-page">This is Comment Page</h2>
        <GetComments />
      </div>
    </main>
  )
}
