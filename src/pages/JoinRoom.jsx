import React ,{useState} from 'react'
import { useNavigate } from 'react-router'
import { nanoid } from 'nanoid';


const JoinRoom = () => {

    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const handleJoinRoom = () => {
        if(roomId.trim()=== '' || roomId.length < 5) {
            alert('Please enter a valid room ID');
            return;
        }
        navigate(`/realtime-mode/${roomId}`);
    }

    const handleCreateRoom = () => {
        const id = nanoid(6);
        setRoomId(id);
        navigate(`/realtime-mode/${id}`);
    }


  return (
     <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Join a Drawing Room</h1>
        <div style={styles.inputGroup}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Room ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <button style={styles.button} onClick={handleJoinRoom}>
            Join Room
          </button>
          <button style={{ ...styles.button, backgroundColor: '#10B981' }} onClick={handleCreateRoom}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  card: {
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1F2937',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    outline: 'none',
  },
  button: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3B82F6',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
}

export default JoinRoom