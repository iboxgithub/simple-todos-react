/*
 INFOS
 l'object this.props.task vient de App
 */

// Task component - represents a single item
Anegdot = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        anegdot: React.PropTypes.object.isRequired
    },

render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const anegdotClassName = "anegdotClassNamee";

    return (

        <li className={anegdotClassName}>

            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                        fefefe / {this.props.anegdot.category} / {this.props.key}
                    </h4>
                </div>
                <div id="{{random this.estimation.date}}" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        rrrr / {this.props.text}
                    </div>
                </div>
            </div>

        </li>
        );
}
});