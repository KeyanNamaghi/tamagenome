export const Blob = ({ genome, label, onClick }) => {
  const { r, g, b } = genome[0]
  const fill = `rgb(${r},${g},${b})`
  return (
    <div onClick={onClick}>
      <div className="blob">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={fill}>
          <circle cx="50" cy="50" r="50" />
        </svg>
        <div className="blob__label">
          <span>{label}</span>
          <span>{`(${r},${g},${b})`}</span>
        </div>
      </div>
    </div>
  )
}
