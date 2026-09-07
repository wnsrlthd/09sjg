import { useMemo, useState } from 'react'
import { complaintData } from '../../data/contents'
import SearchBar from '../../components/common/SearchBar'
import StatusBadge from '../../components/common/StatusBadge'
import Button from '../../components/common/Button'

export default function CustomerVoice() {
  const [items, setItems] = useState(complaintData)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('전체')

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = !search || item.title.includes(search) || item.author.includes(search)
      const matchesType = typeFilter === '전체' || item.type === typeFilter
      return matchesSearch && matchesType
    })
  }, [items, search, typeFilter])

  const updateStatus = (id, status) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, status } : item))
  }

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>고객의 소리</h2>
        </div>

        <div className="toolbar two-column">
          <SearchBar value={search} onChange={setSearch} placeholder="제목/작성자 검색" />
          <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
            <option>전체</option>
            <option>칭찬</option>
            <option>불만</option>
            <option>건의</option>
            <option>문의</option>
            <option>기타</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>유형</th>
                <th>등록일</th>
                <th>처리상태</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                  <td><StatusBadge status={item.status} /></td>
                  <td className="actions-cell">
                    <Button variant="secondary" onClick={() => updateStatus(item.id, '처리중')}>처리중</Button>
                    <Button variant="secondary" onClick={() => updateStatus(item.id, '처리완료')}>완료</Button>
                    <Button variant="danger">삭제</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
