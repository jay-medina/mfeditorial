import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  {id: 1, author: "Jose Medina", text: "This is one comment"},
  {id: 2, author: "Mercedes Fernandez", text: "This is another comment"}
];

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
    return this.props.data.map(comment => (
                <Comment key={comment.id} author={comment.author}>
                  {comment.text}
                </Comment>
            ));
  }
});

const CommentForm = React.createClass({
  getInitialState() {
    return {
      author: '',
      text: ''
    };
  },
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange} />

        <input type="text" placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleCommentChange} />

        <input type="submit" value="Post"/>
      </form>
    );
  },
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  },
  handleCommentChange(e){
    this.setState({text: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    let {author, text} = this.state;
    author = author.trim();
    text = text.trim();

    if(text && author) {
      this.props.onCommentSubmit({author, text});
      this.setState({author: '', text: ''});
    }
  }
});

const CommentBox = React.createClass({
  getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount() {
    const retrieveDataPromise = new Promise(resolve => {
      setTimeout(function() {
        resolve(data);
      }, 2000);
    });

    retrieveDataPromise.then(result => this.setState({data: result}));
  },
  render() {
    if(this.isDataFulfilled()){
      return this.renderComments();
    }
    else {
      return this.renderLoading();
    }
  },
  isDataFulfilled() {
    return this.state.data.length > 0;
  },
  renderLoading() {
    return <h3>Loading</h3>;
  },
  renderComments() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  },
  handleCommentSubmit: function(comment) {
    //refresh the list
    const oldData = this.state.data;
    const highestId = oldData.map(x => x.id)
                             .reduce((total, next) => (total > next)? total : next, 0);

    const newData = oldData.concat([
                      {id: highestId + 1,
                       author: comment.author,
                       text: comment.text}
                     ]);
    this.setState({data: newData});
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
);

