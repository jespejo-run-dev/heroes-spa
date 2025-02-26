import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"


export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation(); 

  const {q = ''} = queryString.parse(location.search);  

  const {searchText, onInputChange} = useForm({
    searchText: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>

      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search hero..." 
              name="searchText" 
              autoComplete="off"
              value={searchText} 
              onChange={onInputChange} 
            />
          </form>

          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with <b> { q }</b>
          </div>

          {/* <HeroCard {...hero} /> */}

        </div>
      </div>

    </>
  )
}
