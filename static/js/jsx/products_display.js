'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return products.map((item, index) => (
      <div class="product">
        <img src={"/media/" + item.fields.img} alt={item.fields.title} />
        <h4>{item.fields.title}</h4>
        {item.fields.title}
        {item.fields.price}

      </div>
    ));
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
