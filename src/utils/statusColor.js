const getStatusBgColorClass = (status) => {
  switch (status) {
    case 'paid':
      return 'bg-[#33D69F]'
    case 'pending':
      return 'bg-[#FF8F00]'
    case 'draft':
      return 'bg-[#373B53]'
    default:
      return ''
  }
}
const getStatusTextColorClass = (status) => {
  switch (status) {
    case 'paid':
      return 'text-[#33D69F] bg-[#33d69f0f]'
    case 'pending':
      return 'text-[#FF8F00] bg-[#ff8f000f]'
    case 'draft':
      // return 'text-[#373B53] bg-[rgb(223, 227, 250)]'
      return 'text-[rgb(223, 227, 250)] bg-[rgba(223, 227, 250,0.06)] dark:text-[#373B53]'
    default:
      return ''
  }
}

export { getStatusBgColorClass, getStatusTextColorClass }
