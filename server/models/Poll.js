const { Schema, model } = require('mongoose');

const PollSchema = new Schema({
    pollQuestion: {
        type: String,
        required: true,
        trim: true
    },
    pollOptions: {
        type: Array,
        required: true,
        trim: true
    },
    pollVotes: {
        type: Array,
        required: true,
        trim: true
    },
});

const Poll = model('Poll', PollSchema);

module.exports = Poll;




                


    