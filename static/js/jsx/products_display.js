'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return products.map((item, index) => (
      <div className="product" key={index}>
        <img src={"/media/" + item.fields.img} alt={item.fields.title} />
        <p>{item.fields.title}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum!
        </p>
        {item.fields.price}

      </div>
    ));
  }
}

const domContainer = document.querySelector('#menu');
ReactDOM.render(<LikeButton />, domContainer);
