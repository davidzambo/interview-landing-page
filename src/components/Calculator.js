import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      area: '',
      boxes: {
        land: false,
        fee: false,
        complex: false
      },
      checked : 0,
      price: 0
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleChange(e){
    this.setState({
      area: e.target.value,
      price: 0
    })
  }

  handleCheck(e){
    let boxes = Object.assign({}, this.state.boxes);
    let checked = 0;
    boxes[e.target.value] = !this.state.boxes[e.target.value];
    if (this.state.boxes.land) checked++;
    if (this.state.boxes.fee) checked++;
    if (this.state.boxes.complex) checked++; 
    this.setState({
      boxes: boxes,
      checked: checked
    });
  }

  handleCalculate(){
    let price = this.state.area * (10000 + (this.state.checked * 1000));
    this.setState({
      price: price
    })
  }

  render(){
    return (
      <section className="calculator">
        <h3 className="text-uppercase text-center text-underline">Szolgáltatási díj Kalkulátor</h3>
        <div className="third">
          <p>A terület mérete:</p>
          <input type="number"min="0" value={this.state.area} onChange={this.handleChange}/> Ha
        </div>
        <div className="third">
          <p className="text-center">Válasszon szolgáltatást</p>
          <label>
            <input type="checkbox" value="land" checked={this.state.boxes.land} onChange={this.handleCheck}/>
            Termőföld érték meghatározás
            </label>
          <label>
            <input type="checkbox" value="fee" checked={this.state.boxes.fee} onChange={this.handleCheck} />
            Haszonbérleti díj meghatározás
          </label>
          <label>
            <input type="checkbox" value="complex" checked={this.state.boxes.complex} onChange={this.handleCheck} />
            Komplex elemzést kérek
          </label>
        </div>
        <div className="third text-right">
          <p>Szolgáltatás díja:</p>
          <p>Alapdíj</p>
          <p>Értékbecslési díj</p>
          <p>Áfa</p>
          <p><strong>{this.state.price}</strong></p>
        </div>
        <div className="text-center">
          <button className="text-uppercase" onClick={this.handleCalculate}>Érékbecslés indítása</button>
        </div>
      </section>
    );
  }
}