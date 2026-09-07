import { useMemo, useState } from 'react'
import { contents } from '../../data/contents'
import SearchBar from '../../components/common/SearchBar'
import Button from '../../components/common/Button'
import StatusBadge from '../../components/common/StatusBadge'

export default function MedicalContent() {
  const [items, setItems] = useState(contents)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  }, [items, search])

  const toggleVisible = (id) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, visible: !item.visible } : item))
  }

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>치료/수술/질환 콘텐츠 관리</h2>
          <Button>콘텐츠 등록</Button>
        </div>

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} placeholder="콘텐츠 검색" />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>카테고리</th>
                <th>작성자</th>
                <th>등록일</th>
                <th>수정일</th>
                <th>노출 여부</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.author}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td><StatusBadge status={item.visible ? '노출' : '비노출'} /></td>
                  <td className="actions-cell">
                    <Button variant="secondary" onClick={() => toggleVisible(item.id)}>
                      {item.visible ? '비노출' : '노출'}
                    </Button>
                    <Button variant="secondary">수정</Button>
                    <Button variant="danger" onClick={() => deleteItem(item.id)}>삭제</Button>
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
