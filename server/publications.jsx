if (Meteor.isServer) {

    Meteor.publish("tasks", function () {
        return Tasks.find({
            $or: [
                { private: {$ne: true} },
                { owner: this.userId }
            ]
        });
    });

    Meteor.publish("anegdots", function () {
        return Anegdots.find({}, {limit:3});
    });

}