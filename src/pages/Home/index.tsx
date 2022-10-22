import Modal from 'react-modal';

import Button from 'react-bootstrap/Button';

import styles from './Home.module.scss';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TableRoom from './Table';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#242536',
        padding: '3rem',
        borderRadius: '5px'
    },
};

  

export default function Home (){
  
    const navigate = useNavigate();

    let subtitle:any;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [room, setRoom] = useState('');
    
    const [link, setLink] = useState('');

    const API = 'http://localhost:4004';
  
    function openModal() {
        setIsOpen(true);
    }
  
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'white';
    }
  
    function closeModal() {
        setIsOpen(false);
    }

    

    async function handleSubmit (e: any)  {
        e.preventDefault();

        const newRoom = {
            id: Math.random() * 100,
            room,
            link
        };

        await fetch(API + '/salas', {
            method: 'POST',
            body: JSON.stringify(newRoom),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate(`/sala/${newRoom.id}`);

        setLink('');
        setRoom('');
    }
   
    

    return (
      
        <div className={styles.container}>
            
            <Button onClick={openModal} className={styles.button} variant="warning">Criar sala</Button>
            <div>

                <TableRoom/>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <div className={styles.modalRow}>
                        <Button onClick={closeModal} aria-label="fechar" className={styles.closeModal} variant="danger">X</Button>
          
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Qual é o nome sua sala?</h2>
                    </div>
        
        
                    <label htmlFor='nomeSala'>Sala:</label> 
        
                    <form onSubmit={handleSubmit}>
            


                        <input 
                            type='text' 
                            id='nomeSala' 
                            onChange={(e) => setRoom(e.target.value)} 
                            placeholder='Digite o nome da sua sala'
                            value={room || ''}
                            required
                            className={styles.modalInput}
                        />
          
          
          
                        <Button type='submit' variant="info">Criar</Button>
          
                    </form>
          
        
                </Modal>
            </div>


        </div>
    );
}