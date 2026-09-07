import { useMemo, useState } from 'react'
import { departments } from '../../data/departments'
import Button from '../../components/common/Button'
import SearchBar from '../../components/common/SearchBar'
import StatusBadge from '../../components/common/StatusBadge'

export default function DepartmentManagement() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(departments)

  const filtered = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  }, [items, search])

  const toggleVisible = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item,
      ),
    )
  }

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>진료과/클리닉 관리</h2>
          <div className="button-group">
            <Button>추가</Button>
          </div>
        </div>

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} placeholder="진료과명 검색" />
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>진료과명</th>
                <th>유형</th>
                <th>설명</th>
                <th>담당 의료진</th>
                <th>노출 여부</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>{item.doctor}</td>
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
