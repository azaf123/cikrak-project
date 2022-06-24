import react, {Component} from 'react'
export default class Modal extends Component{
    render(){
        let modalStyle={
            display : 'block',
            backgroundColor:'rgba(0,0,0,0.5)',
        }
        return(
            <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Voucher Details</h5>
                  <button type="button" className="btn-close" onClick={this.props.hide}></button>
                </div>
                <div className="modal-body">
                  <img src={this.props.image} className='card-img-top rounded-xl'/>
                  <div className='mx-2'>
                  <p>{this.props.date}</p>
                  <h5>{this.props.voucher}</h5>
                  <h6 className='text-sky-500'>{this.props.points}</h6>
                  </div>
                  <button type="button" className="btn btn-primary float-right" onClick={this.props.hide} >Redeem</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}