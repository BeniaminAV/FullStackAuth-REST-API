import Navbar from "../components/Navbar"
import GetPosts from "./components/GetPosts"

export default async function Posts() {
  return (
    <main>
      <Navbar />
      <div className="mx-10 pt-20">
        <h2 className="py-10 title-page">This is Post Page</h2>
        <GetPosts />
      </div>
    </main>
  )
}
