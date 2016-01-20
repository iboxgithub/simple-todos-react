
// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    getInitialState() {
        return {

        }
    },

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        let query = {};

        return {
            anegdots: Anegdots.find(query).fetch(),
            currentUser: Meteor.user()
        }
    },

    renderAnegdots() {
        return this.data.anegdots.map((anegdot) => {
            const lang = 'FR';
            const currentUserId = this.data.currentUser && this.data.currentUser._id;
            const showPrivateButton_Translate = currentUserId ? true : false;
    console.log(JSON.stringify(anegdot,null,4));

            return <Anegdot
                key={anegdot._id['_str']}
                anegdot={anegdot}
                text={anegdot.content[lang].text} />;
        });
    },

    /*renderDropDown() {
        return <DropDownMenu  />;
    },

    renderReactToggle() {
        return <ReactToggle  />;
    },*/

    handleSubmit(event) {
        event.preventDefault();

        alert('Hello');
    },

    render() {

        return (
            <div className="container">
                <header>

                    <div className="header-left">
                        <a className="left-item">left-item1</a>

                        <div className="nav-items">
                            <a className="right-item">right-item1</a>
                        </div>

                    </div>

                    <div className="header-center">LOGO</div>

                    <div className="header-right">

                        <div className="nav-items">
                            <a className="left-item">left-item2</a>
                        </div>

                        <div className="right-item">
                            <a className="login"><AccountsUIWrapper /></a>

                        </div>
                    </div>

                </header>

                {/* this.data.currentUser ?
                    <form className="new-task" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type to add new tasks"/>
                    </form> : ''
                */}

                <ul>
                    {this.renderAnegdots()}
                </ul>
            </div>
        );
    }
});