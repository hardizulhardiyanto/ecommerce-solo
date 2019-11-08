import React, { Component } from 'react';

class DetailProduct extends Component {
    render() {

        return (
            <div className="container">
                <div classNameName="col-md-12">
                    <div className="imageFloat">
                        <img id="item-display" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvGbj3ioyE-yrlrwHGY39F83hBtbdyiuW4Z1YMUGj0cwAGEWu&s" alt=""
                            className="img-thumbnail" width="400" height="600" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="product-title">Samsung Galacy Gacor I660</div>
                    <div className="product-desc">LTE, Ram 1200GB </div>
                    <div className="product-desc">
                        <div>
                        <h6 style={{color: 'blue', textAlign: 'left'}}> 
                        Brand Samsung . (12000 votes)
                        </h6>
                        </div>
                    </div>
                    <hr />
                    <div className="product-desc">Price</div>
                    <div className="product-price">Rp 1234.00</div>
                    <h4>Color</h4>

                    <div className="btn-group" data-toggle="buttons">

                        <div>
                        <label className="btn btn-info active" style={{backgroundColor: 'chartreuse'}}>
                            <input type="radio" name="options" id="option2" autocomplete="off" chacked />
                            <span className="glyphicon glyphicon-ok"></span>
                        </label>
                        </div>

                    </div>
                    <br />
                    <div className="form">
                        <h4>Capacity</h4>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" id="inputZip" placeholder="16 GB" readonly />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="container">
                        <h4>Quantity</h4>
                        <span className="col-sm-1">
                            <button type="button" className="btn btn-danger btn-number glyphicon glyphicon-minus "
                                data-type="minus" data-field="quant[2]">
                            </button>
                        </span>


                        <input type="text" style={{textAlign: 'center'}} name="quant[2]" className="col-md-2" value="10" min="1" max="100" />


                        <span className="col">
                            <button type="button" className="btn btn-success btn-number glyphicon glyphicon-plus"
                                data-type="plus" data-field="quant[2]">
                            </button>
                        </span>
                    </div>

                    <br />
                    <br />
                    <hr />
                    <div>
                        <h6 href="#" className="btn btn-block btn-success">
                            <p className="glyphicon glyphicon-shopping-cart"></p>
                            <b>Buy</b>
                        </h6>
                        <br />
                        <a href="#" className="glyphicon glyphicon-heart"> Like</a>
                    </div>

                </div>
            </div>


        )

    }
}

export default DetailProduct;