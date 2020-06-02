import React from 'react';
import {connect} from "react-redux";
import Dialog from "./Dialog";
import {getChakMessage, getDialog, sendNewMessage, updateMessageText} from "../../Redux/dialogs-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";

class DialogContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id) return <p>There no such user</p>;
        this.props.getDialog(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id){
            let id = this.props.match.params.id;
            this.props.getDialog(id);
        }
    }

    render() {

        return (
            <Dialog {...this.props}/>
        )

    }
}

const mapStateToProps = (state) => ({
    dialog: state.dialogs.dialog,
    newMessageText: state.dialogs.newMessageText
});

export default compose(
    connect(mapStateToProps, {sendNewMessage, getChakMessage, updateMessageText, getDialog}),
    withRouter
)(DialogContainer)