import { useContext } from 'react'
import { GlobalState } from '../../context/GlobalState'
export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const { deleteTransaction } = useContext(GlobalState)
    return (
        <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {/* our expense amount is coming as -100 but we don't wanna show $-100 we wanna show - $100 so to
               remove after $ we are using maths.abs which converts any negative value into positive value */}
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
