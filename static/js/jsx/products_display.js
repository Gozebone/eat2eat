'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return products.map((item, index) => (
      <div className="product" key={index}>
        <img src={"media/${item.fields.img}"} alt={item.fields.title} />
        {item.fields.price}
        {item.fields.title}
      </div>
    ));
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
