export default {
	SET_TRANSACTION_HASH: (state, hash) => {
		state.transactionHash = hash
	},
	SET_TRANSACTION_DETAILS: (state, transactionDetails) => {
		state.transactionDetails = transactionDetails
	}
}
