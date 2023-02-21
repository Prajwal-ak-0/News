import React, { Component } from "react";
import News from "./News";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsItem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    console.log("Prve Click");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c084ee68265f4e35ab3019fdbae1ffc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData =async () => {
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c084ee68265f4e35ab3019fdbae1ffc0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2
          className="text-center "
          style={{ margin: "20px", padding: "40px 0 0 0" }}
        >
          Top-headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        {this.state.loading && <Spinner/>}
        <div className="container">
        <div className="row">
          {this.state.articles.map((Element) => {
            return (
              <div className="col-md-4" key={Element.url}>
                <News
                  title={Element.title}
                  desc={Element.description}
                  imageUrl={Element.urlToImage}
                  newsUrl={Element.url}
                  source={Element.source.name}
                  author={Element.author}
                  publishedAt={Element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>

        <div className="container my-4 d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button "
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default NewsItem;

//1 Did Mount
// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c084ee68265f4e35ab3019fdbae1ffc0&page=1&pageSize=${this.props.pageSize}`;
// let data=await fetch(url);
// let parsedData=await data.json();
// this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
// console.log(parsedData);

//2Prev Click
// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c084ee68265f4e35ab3019fdbae1ffc0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
// this.setState({loading:true});
// let data=await fetch(url);
// let parsedData=await data.json();
// this.setState({
//   page:this.state.page-1,
//   articles: parsedData.articles,
//   loading:false
// })

//3Next Click
// if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)))
// {
//   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c084ee68265f4e35ab3019fdbae1ffc0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//   // this.setState({loading:true});
//   // let data=await fetch(url);
//   // let parsedData=await data.json();
//   // this.setState({
//   //   articles: parsedData.articles,
//   //   page:this.state.page+1,
//   //   loading:false
//   // })

// }
