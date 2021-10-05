import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

        this.setState({movies, isLoading: false}); // = movies:movies
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className='container'>
                {isLoading ? (
                    <div className='loader'>
                        <span className='loader__text'>Loading...</span>
                    </div>
                ) : (
                    <div className='movies'>
                        {movies.map((movie) => (
                            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
// react는 자동적으로 class component의 render method를 실행한다
// state 는 바꾸고 싶은 data(obj) 데이터를 넣는다
// react는 자동적으로 주어진 onClick을 가지고 있다

// state의 상태를 변경할 때는 react가 render function을 호출해서 바꿔주길 원한다 (직접 변경 X)
// ★★ setState 호출시 react는 state를 refresh하고 render function을 호출한다

// current는 state를 set할 때 react에서 외부 상태에 의존하지 않는 좋은 방법

// 첫 render시 호출되는 life cycle method는? componentDidMount (component가 mount되자마자 호출)

export default App;
