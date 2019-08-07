import React, {Component,Fragment} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Booking.css';
import jsonData from '../../products.js'


class Booking extends Component {
  state={
    error:true,
    loading:true,
    featured:[],
    carousel:[]
  };


  componentDidMount() {

    console.log(jsonData.featured);
    console.log(jsonData.carousel.items);
    this.setState({featured:jsonData.featured,carousel:jsonData.carousel.items, error:false, loading:false})

  }

  render(){
    let featured =  this.state.error ? <p>Posts can't be loaded!</p> : <Spinner />;
    let carousel =  this.state.error ? <p>Posts can't be loaded!</p> : <Spinner />;
    console.log(this.state.error);
    if (this.state.featured || this.state.carousel){
      featured =  this.state.featured.map(post =>(
        <div key={post.id} >
        <img
        alt={post.title}
        src={post.media.large.url}
        width={post.media.large.width}
        height={post.media.large.height}></img>
        </div>

      ));
      carousel=this.state.carousel.map(post =>(
    <div key={post.id}  >
    <img
    alt={post.title}
    src={post.media.small.url}
    width={post.media.small.width}
    height={post.media.small.height}
    ></img>
    </div>
  ))
    }

    return(
      <Fragment>
      <div>
      {featured}
      </div>
      <div className={classes.Carousel} >
      {carousel}
      </div>
      </Fragment>
    )
  }
}


export default Booking;
