export default function SearchBar({ value, onChange, placeholder = '검색어를 입력하세요' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
