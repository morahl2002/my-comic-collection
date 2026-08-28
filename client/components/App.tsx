import { useState } from 'react'
import AddComic from './AddComic'
import ComicList from './ComicList'
import Modal from './Modal'

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false)
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <button className="add-comic-btn" onClick={() => setIsAddOpen(true)}>
          <span aria-hidden="true">+</span> Add Comic
        </button>

        {isAddOpen && (
          <Modal title="Add Comic" onClose={() => setIsAddOpen(false)}>
            <AddComic onSuccess={() => setIsAddOpen(false)} />
          </Modal>
        )}
        <ComicList />
      </section>
    </>
  )
}

export default App
