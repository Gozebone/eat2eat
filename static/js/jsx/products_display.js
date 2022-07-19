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

    return products.map((item, index) => (
      <div className="product" key={index}>
        {item.fields.title}
      </div>
    ));
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
