import React, {Component} from 'react';
import CodePane from './codePane.js'
import FeedbackPane from './feedbackPane.js'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import Loader from './loader.js';

class RightPane extends Component {
	componentWillMount = () => {
		this.setState({
				feedback:"",
				code:"",
                grades:0
		})
	}

	componentWillReceiveProps = (nextProps) => {
	    if(nextProps.loadDataError == true) {
            toast.error(nextProps.loadDataErrorMessage, {
                position: toast.POSITION.TOP_CENTER
            })
            this.setState({
                feedback:"Write feedback...",
                code:"Upload code"
            })
        } else {
            if (nextProps.cfReceived == true) {
                this.setState({
                    feedback: nextProps.feedback,
                    code: nextProps.code,
                    grades:nextProps.grades
                })
            }
        }
	}

	render = () => {
		return(
			<div id = 'rightPane'>
				<CodePane codeData = {this.state.code}/>
				<FeedbackPane feedback = {this.state.feedback} grades = {this.state.grades}/>
                <ToastContainer
                    type="error"
                    autoClose={3000}
                    closeOnClick
                    hideProgressBar
                />
		    </div>
			)
	}
}

const mapStateToProps = (store) => {
	return {
		cfReceived:store.codeAndFeedbackReducer.cfReceived,
        grades:store.codeAndFeedbackReducer.loadGrades,
		code:store.codeAndFeedbackReducer.loadCode,
        loadDataError:store.codeAndFeedbackReducer.loadDataError,
        loadDataErrorMessage:store.codeAndFeedbackReducer.loadDataErrorMessage
	}
}

export default connect(mapStateToProps)(RightPane);