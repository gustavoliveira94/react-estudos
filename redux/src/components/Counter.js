import React, { Component } from 'react'
import {connect} from 'react-redux';

class Counter extends Component {
    
    render() {
        return (
            <div>
                <b>Quantidade de Itens: {this.props.values.length}</b>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    values : state.clickState
})

export default connect(mapStateToProps,null)(Counter)