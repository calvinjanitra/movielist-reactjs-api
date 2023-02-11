import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getMovieList, searchMovie } from './api'
import NavigationBar from './components/navbar'
import { useEffect, useState } from 'react'

const App = () => {
    const [nowMovies, setNowMovies] = useState([])

    useEffect(() => {
        getMovieList().then((result) => {
            setNowMovies(result)
        })
    }, [])

    const NowMoviesList = () => {
        return nowMovies.map((movie, i) => {
            return (
                <div className='Movie-wrapper' key={i}>
                    <img className='Movie-image' alt='' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                    <div className='Movie-title'>{movie.title}</div>
                    <div className='Movie-date'>{movie.release_date}</div>
                    <div className='Movie-rate'>{movie.vote_average}</div>
                </div>
            )
        })
    }

    // console.log({ nowMovies: nowMovies })
    const search = async (q) => {
        const query = await searchMovie(q)
        // setNowMovies(query.result)
        console.log({ query: query })
    }

    return (
        <div className='App'>
            <NavigationBar />

            <div className='App-header'>
                <div className='intro text-white '>
                    <input placeholder='Search Movies...' className='Movie-search' onChange={({ target }) => search(target.value)} />
                </div>
                <div className='Movie-container'>
                    <NowMoviesList />
                </div>
            </div>
        </div>
    )
}

export default App
