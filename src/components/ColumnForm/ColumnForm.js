import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/Textinput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../Redux/store';


const ColumnForm = props=> {
  // console.log(props);
  const dispatch = useDispatch();


  const [title,setTitle] =  useState(''); /*стан*/
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e =>{ 
    e.preventDefault();
    dispatch( addColumn ({title, icon }))
    // props.action({ title: title, icon: icon})
    setTitle('');/** вичищення імпуту після натискання */
    setIcon('');
  }
 
  return (
    <div className={styles.columnForm}>
      <form onSubmit={handleSubmit} >
        Title:<TextInput type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        Icon:<TextInput type='text' value={icon} onChange={e => setIcon(e.target.value)}/>
        <Button>Add column</Button>
      </form>
    </div>
  )
}

export default ColumnForm;