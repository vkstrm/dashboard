import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

/**
 * Shows information about a specific cell. Author, date and description.
 * TODO: Make it look good.
 */
class CellInfo extends Component {
    generateElements() {
        const {creator, created, description} = this.props.cell;
        if(!creator && !created && !description) {
            return (
                <p>Cellen är inte publicerad och saknar information</p>
            );
        } else {
            return (
                <div className="cellInfo">
                    <h4><b>Beskrivning:</b></h4><p>{description}</p>
                    <Row>
                        <Col lg={6}>
                            <h4><b>Skapad av:</b> {creator}</h4>
                        </Col>
                        <Col lg={6}>
                            <h4><b>Skapad:</b> {created}</h4>
                        </Col>
                    </Row>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.generateElements()}
            </div>
        )
    }
}

export default CellInfo;