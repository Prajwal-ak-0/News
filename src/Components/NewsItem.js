import React, {useEffect,useState} from "react";
import News from "./News";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsItem=(props)=>{
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  //

  const capitalizedFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  const updateNews=async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    
  }, [])

  const fetchMoreData =async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1
          className="text-center "
          style={{ margin: "20px", padding: "40px 0 0 0"}}
        >
          NoBrand-News {capitalizedFirstLetter(props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        {loading && <Spinner/>}
        <div className="container">
        <div className="row">
          {articles.map((Element) => {
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
      </>
    );
}

NewsItem.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

NewsItem.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default NewsItem;