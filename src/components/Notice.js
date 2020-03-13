import React, {Component} from "react";
import {connect} from 'react-redux';

import {setNoticeVisibility} from "../actions";
import '../style/component/Notice.css';

class Notice extends Component {
    render() {
        return (
            <div className={`notice-container ${this.props.noticeVisibility?'':'notice-hidden'}`}>
                <div className="notice-message">While searching for everything category is not available!</div>
                <div className="notice-close" onClick={event => {
                    this.props.setNoticeVisibility(false);
                }}>
                    <i className="close icon"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        noticeVisibility: state.noticeVisibility
    };
};

export default connect(mapStateToProps, {setNoticeVisibility})(Notice);