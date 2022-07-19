'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return products.map((item, index) => (
      <section className="product">
        <img src={"/media/" + item.fields.img} alt={item.fields.title} />
        <h4>{item.fields.title}</h4>
        {item.fields.title}
        <span>{item.fields.price}</span>

      </section>
    ));
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
