import React, { Component } from 'react';

class DescBuku extends Component {
    render() {
        return (
            <div>
                JUDUL BUKU: {this.props.judulbuku}
                <p>Deskripsi Buku: {this.props.Desc}</p>
            </div>
        );
    }
}

export default DescBuku;