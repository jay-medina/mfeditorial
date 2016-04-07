import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

const Comment = React.createClass({
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

const CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        {this.renderComments()}
      </div>
    );
  },
  renderComments() {
    const data = this.props.data;
    return data.map((comment) => <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>);
  }
});

const CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        Hello World! I am a CommentForm.
      </div>
    );
  }
});

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

const data = [
  {id: 1, author: "Jose Medina", text: "This is one comment"},
  {id: 2, author: "Mercedes Fernandez", text: "This is another comment"}
];

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('app')
);

