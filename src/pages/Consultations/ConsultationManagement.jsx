import { useMemo, useState } from 'react'
import { consultations } from '../../data/consultations'
import SearchBar from '../../components/common/SearchBar'
import StatusBadge from '../../components/common/StatusBadge'
import Button from '../../components/common/Button'

export default function ConsultationManagement() {
  const [items, setItems] = useState(consultations)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return items.filter((consultation) =>
      consultation.title.toLowerCase().includes(search.toLowerCase()) ||
      consultation.author.toLowerCase().includes(search.toLowerCase()),
    )
  }, [items, search])

  const setAnswered = (id) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, status: '답변완료' } : item))
  }

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>온라인 상담 관리</h2>
        </div>

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} placeholder="제목/작성자 검색" />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>상담 유형</th>
                <th>등록일</th>
                <th>상태</th>
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
                  <td>
                    <Button variant="secondary" onClick={() => setAnswered(item.id)}>
                      답변완료
                    </Button>
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
