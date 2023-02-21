import React, { Component } from 'react'

export class News extends Component {
  render() {

    let {title,desc,imageUrl,newsUrl,author,source,publishedAt}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right: '0'
          
          }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src={!imageUrl?"https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM=":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                
                <p className="card-text"><small className="text-muted">By {!author?"Unkown":author}</small></p>
                <p className="card-text"><small className="text-muted"> On {new Date(publishedAt).toISOString()}</small></p>
      
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a> 
            </div>
            
            </div>
      </div>
    )
  }
}

export default News


/*
  A="2023-01-25T14:00:39Z"
  d=new Date (A);
  d.getDAte
  and so on....
*/