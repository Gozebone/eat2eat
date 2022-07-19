'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      console.log(products);
      return products;
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        {products[0].fields.title}
      </button>
    );
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
