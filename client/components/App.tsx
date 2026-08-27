import AddComic from './AddComic'
import ComicList from './ComicList'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <AddComic />
        <ComicList />
      </section>
    </>
  )
}

export default App
