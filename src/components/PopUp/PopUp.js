import React, { Component } from 'react';
import './popUp.css';
class PopUp extends Component {
    state={    
        classBox:'box',
        show:false
    }
    onClose=(parameter)=>{
        console.log("sdd");
        
        if(!parameter){
            this.setState({
                show:true
            })
        }
              
    }

    render() {
        const {show}=this.state;      
        return (
            <div className={show?"box hidden":"box"} >
                <div className="modal">
                    <div className="madal-top">
                        <span>提示！</span>
                        <span onClick={()=>(this.onClose(false))}>X</span>
                    </div>
                    <div className="madal-middle">
                        <div>内容</div>
                    </div>
                    <div className="madal-down">
                        <button type="button" onClick={()=>(this.onClose(false))}> 
                            <span>取消</span>
                        </button>
                        <button type="button" className="active" onClick={()=>(this.onClose(true))}> 
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