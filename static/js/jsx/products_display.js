'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      console.log(products.title);
      return products.title;
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        {products.title}
      </button>
    );
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);