    import { HookContext } from "../contexe/Context";
    import "../styles/phones.css";
    import {IoIosArrowDown} from "react-icons/io"
    import {IoIosArrowUp} from "react-icons/io"
    import {useNavigate} from "react-router-dom"

    const Phones = () => {

        const navigate = useNavigate()

        const {state: {allDatas}, dispatch} = HookContext();

        const  solde = allDatas.reduce((curr, acc) => {

            return curr += acc.price * acc.amount

        }, 0) 
        

        console.log(allDatas)


        
    return (
        <>

            
                <div className="container">

                <div className="first-title"> {
                
                allDatas.length === 0  ? <> <h4>Your card is empty</h4> <button className="refrech-btn" onClick={() => {
                    window.location.reload();
                }}>Refrech</button></>
                : <h4>Your Phones</h4>
            
                
                } </div>

                    {
                        allDatas.map((item, index) => {
                            const {title, price, amount, img} = item

                            return <div key={index} className="main-container">
                                    <img className="imgs" src={img} alt={title}/>
                                    <div className="phone-details">
                                        <h3 className="title"> {title} </h3>
                                        <h4 className="price"> {(price * amount).toFixed(2)} $ </h4>
                                        <button className="btn-remove" onClick={() => {
                                            
                                            dispatch({
                                                type: "REMOVE-ITEM",
                                                payload: item,
                                            })
                                            
                                        }}> remove </button>
                                    </div>
                                    <div className="arrow-btns">
                                        <button className="btn" onClick={() => {
                                            dispatch({
                                                type: "INCRISS-AMOUNT",
                                                payload: item
                                            })
                                        }}> <IoIosArrowUp/> </button>
                                        <h2 className={amount > 1 && "bleu"}> {amount} </h2>
                                        <button onClick={() => {
                                            amount > 1 && dispatch({
                                                type: "INCRISS-DECRISS",
                                                payload: item
                                            })
                                        }} className="btn" > <IoIosArrowDown/> </button>
                                    </div>
                            </div>
                        })
                        
                    }
                        <div className="underline"></div>
                            <h3 className="totla"> Total : {solde.toFixed(2)}  $ </h3>
                            <button className="remove-all" onClick={() => {
                                    
                                        dispatch({
                                            type: "REMOVE-ALL"
                                        })
                                        
                            }}>Remove All</button>

                            
                </div>
            

        
        </>
    )
    }

    export default Phones