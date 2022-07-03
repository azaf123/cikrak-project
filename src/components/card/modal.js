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
              <div className="modal-content rounded-2xl w-96">
                <div className="modal-header">
                  <h5 className="modal-title text-2xl">Voucher Details</h5>
                  <button type="button" onClick={this.props.hide}><FontAwesomeIcon icon={faX} className="back cursor-pointer text-black fa-2x  float-left "/></button>
                </div>
                <div className="modal-body m-2">
                  <img src={this.props.image} className='card-img-top rounded-xl'/>
                  <div className='modal-text  text-xm'>
                  <p>{this.props.date}</p>
                  <h5 className='text-xl font-bold'>{this.props.voucher}</h5>
                  <h6 className='text-sky-700'>{this.props.points}</h6>
                  </div>
                  <a  onClick={success} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right cursor-pointer">Reedem</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}