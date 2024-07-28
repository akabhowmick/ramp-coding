import { useState } from "react"
import { InputCheckbox } from "../InputCheckbox"
import { SetTransactionApprovalFunction, TransactionPaneComponent } from "./types"
import { Transaction } from "src/utils/types"

export const TransactionPane: TransactionPaneComponent = ({
  transaction,
  loading,
  setTransactionApproval,
}: {
  transaction: Transaction
  loading: boolean
  setTransactionApproval: SetTransactionApprovalFunction
}) => {
  const [approved, setApproved] = useState(transaction.approved)
  const handleInputChange = async (transactionId: string, newValue: boolean) => {
    setApproved(newValue)
    await setTransactionApproval({
      transactionId,
      newValue,
    })
  }

  return (
    <div className="RampPane">
      <div className="RampPane--content">
        <p className="RampText">{transaction.merchant} </p>
        <b>{moneyFormatter.format(transaction.amount)}</b>
        <p className="RampText--hushed RampText--s">
          {transaction.employee.firstName} {transaction.employee.lastName} - {transaction.date}
        </p>
      </div>
      <InputCheckbox
        id={transaction.id}
        checked={approved}
        disabled={loading}
        onChange={(newValue) => {
          handleInputChange(transaction.id, newValue)
        }}
      />
    </div>
  )
}

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
