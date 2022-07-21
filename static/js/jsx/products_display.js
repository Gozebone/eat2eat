'use strict';

var products_separate = {}
for (let el in products){
    if (typeof products_separate[el.type] === 'undefined'){
        products_separate[el.type] = [];
    }
     products_separate[el.type].push(el);
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return products_separate['SA'].map((item, index) => (
      <div className="product" key={index}>
        <img src={"/media/" + item.fields.img} alt={item.fields.title} />
        <p>{item.fields.title}</p>
        <p>{item.fields.composition}</p>
        <p>{item.fields.price}</p>
      </div>
    ));
  }
}

const domContainer = document.querySelector('#menu');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MenuItem));