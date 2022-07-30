'use strict';

var products_separate = {}
for (let el in products){
    if (typeof products_separate[products[el].fields.type] === 'undefined'){
        products_separate[products[el].fields.type] = [];
    }
    products_separate[products[el].fields.type].push(products[el]);
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return Object.keys(products_labels).map((key) => (
            <div id={key} key={key} className="products_block">
            <h2>{products_labels[key]}</h2>
            <div  className="products">
                {products_separate[key].map((item, index) => (
                    <div className="product" key={index}>
                        <img src={"/media/" + item.fields.img} alt={item.fields.title}/>
                        <p>{item.fields.title}</p>
                        <p>{item.fields.composition}</p>
                        <p>{item.fields.price}</p>
                    </div>
                ))}
            </div>
            </div>
        ))
    }
}

const domContainer = document.querySelector('#menu');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MenuItem));