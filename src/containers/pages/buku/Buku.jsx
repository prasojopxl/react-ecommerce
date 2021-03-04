import React, { Component } from 'react'
import DescBuku from "./DescBuku";

export default class Buku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Available",
            jumlahPesan:0            
        };
      }

    handleState = () => {
        this.setState({
            jumlahPesan: this.state.jumlahPesan+1
        });
    };

    componentDidMount() {
        this.setState({
            status:"Buku Siap dipesan"
        })
        document.title=this.state.status
    }

    componentDidUpdate() {
        document.title=this.state.status
    }
    
    render() {
        return (
            <div style={{margin:"50px auto", textAlign:"center"}}>
                <h1 style={{marginBottom:"10px"}}>Pemesanan Buku</h1>
                Ketersediaan: {this.state.status}<br/><br/>
                <DescBuku judulbuku="Javascript ES6" Desc="Buku ini menjelasakna secara detail penggunaan feature Javascript ES6. Cocok untuk pemula dan level medium karena dilengkapi studi kasus dan tugas - tugas untuk mempperdalam pemahaman logika pemprograman"/>
                <button onClick={this.handleState}>+ Jumlah Pesan</button>
                {this.state.jumlahPesan}
                <hr/>
            </div>
        );
    }
}
