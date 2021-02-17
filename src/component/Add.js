import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Add.css'

const ModalExample =(props) => {
  const {
    buttonLabel,
    className,
    addMovie
  } = props;
  const [name,setName]= useState ('');
  const [rating,setRate]= useState ('');
  const [date,setDate]= useState ('');
  const [image,setImage]= useState ('');
  const [description,setDescription]= useState ('');

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleAdd=()=>{
    let newmovie={
      name,
      rating,
      date,
      image,
      description,
    };
    addMovie(newmovie);
    toggle()
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}><h4>+</h4>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Movie </ModalHeader>
        <ModalBody>
  <form className="add">
<label>Name</label>
    <input type=""
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <label>Rating</label>
    <input type="number"
    value={rating}
    min={1}
    max={5}
    onChange={(e)=>setRate(e.target.value)}/>
    <label>Date</label>
    <input type=""
    value={date}
    onChange={(e)=>setDate(e.target.value)}/>
    <label>Image</label>
    <input type=""
    value={image}
    onChange={(e)=>setImage(e.target.value)}/>
    <label>Description</label>
    <input type=""
    value={description}
    onChange={(e)=>setDescription(e.target.value)}/>
  </form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;