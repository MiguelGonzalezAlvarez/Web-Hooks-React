
export const LoadingQuote = () => {
  return (
    <div className="flex justify-center items-center py-8">
        <div className="animate-spin" style={{ 
            width: '30px', 
            height: '30px', 
            border: '3px solid var(--color-primary-light)', 
            borderTopColor: 'var(--color-primary)', 
            borderRadius: '50%' 
        }}></div>
        <span className="ml-3 text-muted">Loading quote...</span>
    </div>
  )
}
