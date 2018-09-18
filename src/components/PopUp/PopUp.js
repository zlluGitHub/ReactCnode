import React, { Component } from 'react';
import './popUp.css';
class PopUp extends Component {
    state={    
        display:'flex',
        show:false
    }
    onClose=(parameter)=>{   
        if(!parameter){
            this.setState({
                show:true
            });
            const time = setTimeout(()=>{
                this.setState({
                    display:'none'
                });
                clearTimeout(time);
            },250)
        }     
    }
    render() {
        const {show,display}=this.state;    
        const {	content }=this.props;    
        return (
            <div className={show?"box hidden":"box"} style={{display:display}}>
                <div  className="modal">
                    <div className="madal-top">
                        <span>提示！</span>
                        <span onClick={()=>this.onClose(false)}>X</span>
                    </div>
                    <div className="madal-middle">
                        <div>{content}</div>
                    </div>
                    <div className="madal-down">
                        <button type="button" onClick={()=>this.onClose(false)}> 
                            <span>取消</span>
                        </button>
                        <button type="button" className="active" onClick={()=>this.onClose(true)}> 
                            <span>确定</span>
                        </button>             
                    </div>     
                </div>
                <div className="mask"></div>
            </div>
        );
    }
}

export default PopUp;