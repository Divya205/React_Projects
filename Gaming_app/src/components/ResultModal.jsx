import {forwardRef,useRef, useImperativeHandle} from 'react';
//forwardref will forward ref from one component to another component
const ResultModal = forwardRef(function ResultModal({result,targetTime}, ref){
    const dialog =useRef();
    useImperativeHandle(ref, ()=>{
        return{
        open(){
      dialog.current.showModal();
        }
    }
    })
    return(
        <dialog ref={dialog} className="result-modal" open>
            <h2> you {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong > X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})
export default ResultModal;