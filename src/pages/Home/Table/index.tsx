import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Table.module.scss';



export default function TableRoom(){

    const [allRooms, setAllRooms] = useState([{
        id: '',
        room: '',
        link: ''
    }]);

    const API = 'http://localhost:4004/salas';

    const navigate = useNavigate();

    async function getLinkVideo() {

        
        
        
    
        await fetch(`${API}`).then((response) => {
            return response.json();
        })
            .then((data) => {
            
    
            
    
                setAllRooms(data);
    
        
    
            
    
            });
    
    }

    useEffect(() => {
        getLinkVideo();
    }, []);

    return(
        <>
        
            <div className={styles.table}>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sala</th>
                            <th>Link</th>
                            <th></th>
                        </tr>
                    </thead>
        
                    {allRooms.map((item) => (
                        <>
                
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.room}</td>
                                    <td style={{color: item.link == '' ? 'lightblue' : '#f2f2f2'}}>{item.link == '' ? 'Nenhum video compartilhado.' : item.link}</td>
                                    <td><button onClick={() => navigate(`sala/${item.id}`)}>Entrar</button></td>
                                </tr>
                    
                            </tbody>
                        </>
                    ))}
        
      
                </Table>
            </div>
        </>
            
        
    );
}


