var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello World, I am Confusing!
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
