import react, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
export default class Modal extends Component{
    render(){
        let modalStyle={
            display : 'block',
            backgroundColor:'rgba(0,0,0,0.5)',
        }
        
        function success(){
          Swal.fire({
            title: 'Are you sure',
            text: "exchange with this voucher?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'succsess!',
                'Voucher Redeemed.',
                'success'
                
              ).then(function(){
                window.location=""
              })
            }
          })
      }
    
        return(
            <div className="modal show fade " style={modalStyle}>
            <div className="modal-dialog ">
              <div className="modal-content rounded-2xl">
                <div className="modal-header">
                  <h5 className="modal-title text-2xl">Voucher Details</h5>
                  <button type="button" onClick={this.props.hide}><FontAwesomeIcon icon={faX} className="back cursor-pointer text-black fa-2x  float-left "/></button>
                </div>
                <div className="modal-body">
                  <img src={this.props.image} className='card-img-top rounded-xl'/>
                  <div className='modal-text mx-2 text-xm'>
                  <p>{this.props.date}</p>
                  <h5 className='text-xl font-bold'>{this.props.voucher}</h5>
                  <h6 className='text-sky-500'>{this.props.points}</h6>
                  </div>
                  <a  onClick={success} className="btn bg-blue-400 text-cyan-50 float-right">Reedem</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}