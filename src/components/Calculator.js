import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      area: 0,
      checkedOptions: [],
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
    let checkedOptions = [...this.state.checkedOptions];
    if (e.target.checked){
      checkedOptions.push(e.target.name);
      this.setState({
        checkedOptions: checkedOptions
      });
    } else {
      let removedCheckedOption = checkedOptions.filter((el) => el !== e.target.name);
      this.setState({
        checkedOptions: removedCheckedOption
      });

    }
  }

  handleCalculate(){
    let price = this.state.area * (10000 + (this.state.checkedOptions.length * 1000));
    this.setState({
      price: price
    })
  }

  render(){
    return (
      <section className="calculator">
        <h3 className="text-uppercase text-center text-underline">Szolgáltatási díj Kalkulátor</h3>
        <div className="calculator-fields">
          <div className="third">
            <p>A terület mérete:</p>
            <input type="number"min="0" value={this.state.area} onChange={this.handleChange}/> Ha
          </div>
          <div className="third">
            <p className="text-center">Válasszon szolgáltatást</p>
            <label>
              <input type="checkbox" name="land" onChange={this.handleCheck}/>
              Termőföld érték meghatározás
              </label>
            <label>
              <input type="checkbox" name="fee" onChange={this.handleCheck} />
              Haszonbérleti díj meghatározás
            </label>
            <label>
              <input type="checkbox" name="complex" onChange={this.handleCheck} />
              Komplex elemzést kérek
            </label>
          </div>
          <div className="third text-right">
            <p>Szolgáltatás díja:</p>
            <p><strong>{this.state.price}</strong>ft Alapdíj</p>
            <p>Értékbecslési díj</p>
            <p>Áfa</p>
          </div>
        </div>
        <div className="text-center">
          <button className="text-uppercase" onClick={this.handleCalculate}>Érékbecslés indítása</button>
        </div>
      </section>
    );
  }
}