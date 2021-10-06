import React from 'react';
import './Detail.css';

// function Detail({location}) {
//     console.log(location);
//     return <span>hello</span>;
// }

class Detail extends React.Component {
    render() {
        const {location} = this.props;

        if (location.state) {
            // return <span>{location.state.title}</span>;
            return (
                <div className='detail__container'>
                    <h1>Detail</h1>
                    <div className='detail'>
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                        <div className='detail__data'>
                            <h3 className='detail__title'>{location.state.title}</h3>
                            <h5 className='detail__year'>{location.state.year}</h5>
                            <ul className='detail__genres'>
                                {location.state.genres.map((genre, index) => (
                                    <li key={index} className='genres__genre'>
                                        {genre}
                                    </li>
                                ))}
                            </ul>
                            <p className='detail__summary'>{location.state.summary}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
    componentDidMount() {
        const {location, history} = this.props;

        // 클릭을 통해서만 이동 가능, 직접 url을 입력해도 리다이렉트 시킴
        if (location.state === undefined) {
            history.push('/');
        }
    }
}

export default Detail;
