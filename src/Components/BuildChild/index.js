/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    BuildChildCont,
    SplitDiv,
    ChildDiv,
    NavDiv,
    TriDiv
} from '../editor/styles';
import { SettingsButton, SettingsPopup, Edit, Delete } from './styles';

class BuildChild extends React.Component {
    constructor() {
        super();

        this.state = { active: false };

        this.buildNode = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick)
    }

    handleClick = e => {
        if (this.state.active) {
            if (!this.buildNode.current.contains(e.target)) {
                this.setState({ active: false });
            }
        }
    };

    render() {
        const { name } = this.props;
        return (
            <BuildChildCont
                className={this.state.active && 'activeParent'}
                // onClick={() => this.setState({ active: !this.state.active })}
            >
                <SettingsButton onClick={() => this.setState({ active: !this.state.active })}/>

                {this.state.active && (
                    <SettingsPopup ref={this.buildNode}>
                        <Edit>
                            <p>Edit</p>
                        </Edit>
                        <Delete>
                            <p>Delete</p>
                        </Delete>
                    </SettingsPopup>
                )}
                {name === 'split-div' && (
                    <>
                        <SplitDiv className={this.state.active && 'active'}>
                            {name}
                        </SplitDiv>
                        <SplitDiv className={this.state.active && 'active'}>
                            {name}
                        </SplitDiv>
                    </>
                )}

                {name === 'nav' && (
                    <>
                        <NavDiv className={this.state.active && 'active'}>
                            {name}
                        </NavDiv>
                    </>
                )}

                {name === 'tri-div' && (
                    <>
                        <TriDiv className={this.state.active && 'active'}>
                            {name}
                        </TriDiv>
                        <TriDiv className={this.state.active && 'active'}>
                            {name}
                        </TriDiv>
                        <TriDiv className={this.state.active && 'active'}>
                            {name}
                        </TriDiv>
                    </>
                )}
                {name === 'div' && (
                    <ChildDiv className={this.state.active && 'active'}>
                        {name}
                    </ChildDiv>
                )}
            </BuildChildCont>
        );
    }
}

export default BuildChild;