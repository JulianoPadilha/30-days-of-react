import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './style.css';

class App extends React.Component {

    render() {
        const style = { color: 'red' }
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header />
                    <Content />
                    <Footer>
                        <button style={style}>
                            <i className="fa fa-refresh" />
                            Refresh
                        </button>
                    </Footer>
                </div>
                <div onMouseMove={(event) => console.log(event) }>
                    Move the mouse over this tex
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));