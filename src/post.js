import './App.css';
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Post(props) {
  const [modalShow, setModalShow] = useState(false);
  var sno=0
  var tit=null
  var desc=null
  const initial=[{
    id:sno,
    title:tit,
    description:desc
  }
    
  ]
  const [object, setobject] = useState(initial)
  const handleChange=(e)=>{
    tit=e.target.value
    // setobject({...object,[e.target.name]:e.target.value})
  }
  
  const handleChange2=(e)=>{
    desc=e.target.value
    // setobject({...object,[e.target.name]:e.target.value})
  }


const handleSubmit=(e)=>{
    e.preventDefault();
    setobject(current=>[...current,{id:sno+1,title:tit,description:desc}])
    setModalShow(true)
    document.getElementById("title").value=""
    document.getElementById("description").value=""
}

  return (
    
    <>
    
    <body>
    <div className='text'>

    </div>
    <div className='bgimage' id='bg2'>
    </div>
    <div className='signup'>
    <div className="center">

         <div className="cont">
            <label for="show" className="close-btn fas fa-times" title="close"></label>
            <div className="text">
               Fill in the details
            </div>
            <form onSubmit={handleSubmit}>
               <div className="data">
                  <label>Title</label>
                  <input name='title' onChange={handleChange} value={object.title} id='title' type="text" required/>
               </div>
               <div className="data">
                  <label>Description</label>
                  <input name='description' onChange={handleChange2} value={object.description} id='description' required/>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button type="submit">Submit</button>
               </div>
            </form>
         </div>
      </div>
    </div>
    </body>
    <Modal show={modalShow}
    onHide={() => setModalShow(false)}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover>
      <thead>
        <tr>
        <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {object.map((item,index)=>{
            if(index>0){
                sno+=1;
            return (
                <tr value={sno}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td><Button variant="primary">Update</Button>{' '}</td>
                    <td><Button value={sno} variant="danger">Delete</Button>{' '}</td>
                </tr>
            );
            }
        })}
      </tbody>
    </Table>
      </Modal.Body>

    </Modal>
    </>
  );
}

export default Post;
