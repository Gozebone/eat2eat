'use strict';

var products_separate = {}
for (let el in products){
    if (typeof products_separate[products[el].fields.type] === 'undefined'){
        products_separate[products[el].fields.type] = [];
    }
    products_separate[products[el].fields.type].push(products[el]);
    console.log(products_labels)
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return products_labels.map((products_label) => {
            <React.Fragment id={products_label}>
            {
                products_separate['SA'].map((item, index) => (
                    <React.Fragment className="product" key={index}>
                        <img src={"/media/" + item.fields.img} alt={item.fields.title}/>
                        <p>{item.fields.title}</p>
                        <p>{item.fields.composition}</p>
                        <p>{item.fields.price}</p>
                    </React.Fragment>
                ))
            }
            </React.Fragment>
        });
    }
}

const domContainer = document.querySelector('#menu');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MenuItem));