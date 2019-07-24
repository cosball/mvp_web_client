export default {
	getRecordsPerPage() {
		return [10, 30, 50]
	},
	getPageList(totalRecords, numberOfRecordsPerPage) {
		let pageList = []
		if (totalRecords > 0) {
			for (let x = 0; x < Math.ceil(totalRecords / numberOfRecordsPerPage); x++) {
				pageList.push(x + 1)
			}
		} else {
			pageList.push(1)
		}
		return pageList
	},
	getEntriesText(currentPage, numberOfRecordsPerPage, totalRecords) {
		var y = 0
		let currentEntries = 0
		let remainingEntries = 0
		if (totalRecords > 0) {
			do {
				currentEntries += currentEntries === 0 ? 1 : numberOfRecordsPerPage
				remainingEntries = remainingEntries + numberOfRecordsPerPage > totalRecords ? totalRecords : currentEntries + numberOfRecordsPerPage - 1
				y++
			} while (y < currentPage)
		}
		return `Showing ${currentEntries} to ${remainingEntries} of ${totalRecords}`
	}
}
