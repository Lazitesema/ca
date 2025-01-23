import { TransactionsList } from '../components/transactions-list'
import { PageHeader } from '../components/page-header'
import { motion } from 'framer-motion'

export default function TransactionsPage() {
  return (
    <motion.div className="space-y-6">
      <PageHeader
        title="Transactions"
        description="View and manage all transactions in the system"
      />
      <TransactionsList />
    </motion.div>
  )
}

