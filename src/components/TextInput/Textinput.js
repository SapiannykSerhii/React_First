import slyles from './TextInput.module.scss';

const TextInput = props => {
  return (
    <input className={slyles.input} placeholder={props.placeholder} type="text" />
  )
}

export default TextInput;