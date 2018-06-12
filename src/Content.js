import React from 'react';
import ActivityItem from './ActivityItem';
import data from "./data.json";

const activities = [
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: "Nate",
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
            {
                from: "Ari",
                text: "Me too"
            }
        ]
    },
    {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
];


class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activities: data,
            filtered: data
        }
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState(
                {loading: true},
                this.updateData
            );
        }
    };

    handleSearch(txt) {
        if(txt === '') {
            this.setState({
                filtered: this.state.activities
            })
        } else {
            const { activities } = this.state;
            const filtered = activities.filter(a => a.actor && a.actor.login.match(txt));
            this.setState({
                filtered
            })
        }
    };

    updateData() {
        this.setState(
            {
                loading: false,
                activities: data
            }, 
            this.props.onComponentRefresh
        );
    };

    // componentWillMount() {            
    //     this.setState({
    //         activities: data
    //     });
    // }

    render() {
        const { loading, filtered } = this.state;

        return (
            <div className="content">
                <div className="line"></div>

                {/*Timeline item*/}
                { this.state.activities.map((activity) => {
                    return (
                        <ActivityItem key={activity.id} activity={ activity } />
                    )
                })}
            </div>
        )
    }
}

export default Content;