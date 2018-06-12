import React from 'react';

class ActivityItem extends React.Component {
    render() {
        const { activity } = this.props;
        return (
            <div className="item">
                <div className="avatar">
                    <img alt={ activity.actor.display_login } src={ activity.actor.avatar_url } />{ activity.actor.login }
                </div>

                <span className="time">{ activity.created_at }</span>
                <p>{activity.actor.display_login }</p>
            </div>
        );
    }
}

export default ActivityItem;