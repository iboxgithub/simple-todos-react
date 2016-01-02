
// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    getInitialState() {
        return {
            hideCompleted: false
        }
    },

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        let query = {};

        if (this.state.hideCompleted) {
            // If hide completed is checked, filter tasks
            query = {checked: {$ne: true}};
        }
        return {
            tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
            incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
            currentUser: Meteor.user()
        }
    },

    renderTasks() {
        return this.data.tasks.map((task) => {
            const currentUserId = this.data.currentUser && this.data.currentUser._id;
            const showPrivateButton = task.owner === currentUserId;

            return <Task
                key={task._id}
                task={task}
                showPrivateButton={showPrivateButton} />;
        });
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var text = React.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call("addTask", text);

        // Clear form
        React.findDOMNode(this.refs.textInput).value = "";
    },

    toggleHideCompleted() {
        this.setState({
            hideCompleted: ! this.state.hideCompleted
        });
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
                            <a className="login">right-item2</a>
                        </div>
                    </div>


                    {/*

                     <h1>Evo ({this.data.incompleteCount})</h1>

                    <label className="hide-completed">
                        <input
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.hideCompleted}
                            onClick={this.toggleHideCompleted} />
                        Hide Completed Tasks
                    </label>

                     <AccountsUIWrapper />

                     */}



                </header>

                { this.data.currentUser ?
                    <form className="new-task" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type to add new tasks"/>
                    </form> : ''
                }

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
});