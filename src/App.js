import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getMovieList, searchMovie } from './api'
import NavigationBar from './components/navbar'
import Intro from './components/intro'
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
                    <div className='Movie-title'>{movie.title}</div>
                    <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                    <div className='Movie-date'>{movie.release_date}</div>
                    <div className='Movie-rate'>{movie.vote_average}</div>
                </div>
            )
        })
    }

    console.log({ nowMovies: nowMovies })
    return (
        <div className='App'>
            <NavigationBar />

            <div className='App-header'>
                <Intro />
                <div className='Movie-container'>
                    <NowMoviesList />
                </div>
            </div>
        </div>
    )
}

export default App
