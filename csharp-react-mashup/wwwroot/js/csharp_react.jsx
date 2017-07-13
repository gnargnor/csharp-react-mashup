var data = [
    { id: 1, author: "Ben Bizzey", text: "Heyyyyyy what it do pal?"},
    { id: 2, author: "Diggy Wiggler", text: "Hey ya chowdahead, get off my properties!"},
    { id: 3, author: "Winkle Burgleton", text: "Heyyyyyy who ya callin chowdahead ya codfish"},
];


var CommentList = React.createClass({
    render: function() {
        //mapping the data array into a generic comment - grabbed from the rendering of the CommentList in the CommentBox component return
        var commentNodes = this.props.data.map(function(comment) {
	        return (
	            <Comment author={comment.author} key={comment.id}>
	                {comment.text}
	            </Comment>
	        );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Comment Form!
            </div>
        );
    }
});

//grabs the data being passed in the data property of the ReactDOM render of the CommentBox
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Turtles</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

ReactDOM.render(
    //grabs the data from the global variable (to be transferred to database)
    <CommentBox data={data}/>,
    document.getElementById('content')
);


