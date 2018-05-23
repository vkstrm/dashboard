/**
 * Created by Butts on 2018-05-21.
 */
import React from 'react';
import {Button, Checkbox, FormControl, FormGroup, OverlayTrigger, Tooltip} from "react-bootstrap";

class SearchDashboardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    handleSearchClicked = (e) => {
        this.props.onSearchClicked(this.state.search);
    };

    render() {
        return(
            <div>
                <FormGroup>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-number">Ange sökord</Tooltip>}>
                        <FormControl
                            type='text'
                            name='search'
                            value={this.state.search}
                            onChange={this.handleInputChange}/>
                    </OverlayTrigger>
                </FormGroup>
                <Button
                    bsStyle='primary'
                    onClick={this.handleSearchClicked}>
                    Sök
                </Button>
            </div>
        );
    }
}

export default SearchDashboardForm;
