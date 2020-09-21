import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Belief's</h2>
            <p>
            Quality and durability are the hallmark of their products as well as corner stone of their belief. They have adopted a stringent quality control system of international standards that is in-built in our production process.
The quality is the strong attraction for their buyers and products which they provide, command good consumer acceptance. Team of quality control experts ensure that quality is maintained at 	each level of manufacturing process, from the procurement of the raw materials to the dispatch of the finished products. 
All the products are also subjected to various tests to monitor and enhance their durability.
            </p>
          </div>
          <div className="section-title">
            <h2>Our Mission</h2>
            <p>
            To be the leading component solution & allied fasteners company in the market. This does not just mean being the largest or the most productive company in the market; rather it is a combination of several things like-
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
