import React, { Component } from 'react'

export default class Buku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judulBuku: "Fundamental ES6",
            jumlahPesan:0            
        };
      }

      handleState = () => {
        this.setState({
            jumlahPesan: this.state.jumlahPesan+1
        });
      };
    
      render() {
        return (
          <div style={{margin:"50px auto", textAlign:"center"}}>
            <h1 style={{marginBottom:"10px"}}>Pemesanan Buku</h1>
            {this.state.judulBuku}<br/><br/>
            <button onClick={this.handleState}>+ Jumlah Pesan</button>
            {this.state.jumlahPesan}
            <hr/>
          </div>
        );
      }
}
