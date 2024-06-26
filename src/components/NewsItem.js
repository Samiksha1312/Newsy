import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props;
    let date = new Date(publishedAt);

    return (
      <div className='my-3'>
        <div className="card">
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        color: 'white',
                        right: '0'
                    }} >
        <span className="badge rounded-pill bg-danger">
        {source}
        </span>
        </div>
          <img className="card-img-top" 
          src={!imageUrl?"https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg":imageUrl}
           alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {date.toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
