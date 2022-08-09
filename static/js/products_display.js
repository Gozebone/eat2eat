'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var products_separate = {};
for (var el in products) {
    if (typeof products_separate[products[el].fields.type] === 'undefined') {
        products_separate[products[el].fields.type] = [];
    }
    products_separate[products[el].fields.type].push(products[el]);
}

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            return Object.keys(products_labels).map(function (key) {
                return React.createElement(
                    'div',
                    { id: key, key: key, className: 'products_block' },
                    React.createElement(
                        'h1',
                        null,
                        products_labels[key]
                    ),
                    React.createElement(
                        'div',
                        { className: 'products' },
                        products_separate[key].map(function (item, index) {
                            return React.createElement(
                                'div',
                                { className: 'product', key: index },
                                React.createElement('img', { src: "/media/" + item.fields.img, alt: item.fields.title }),
                                React.createElement(
                                    'h4',
                                    null,
                                    item.fields.title
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    item.fields.composition
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    item.fields.price
                                )
                            );
                        })
                    )
                );
            });
        }
    }]);

    return MenuItem;
}(React.Component);

var domContainer = document.querySelector('#menu');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MenuItem));