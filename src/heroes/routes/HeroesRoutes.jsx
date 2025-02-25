import { Navigate, Route, Routes } from "react-router"
import { Navbar } from '../../ui/components/NavBar'
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />

              <Route path="dc" element={<DCPage />} />

              <Route path="search" element={<SearchPage />} />
              <Route path="hero/:id" element={<HeroPage />} />
              {/* Search, Hero by id */}

              <Route path="/" element={<Navigate to='/marvel' />} />
          </Routes>
        </div>

    </>
  )
}
