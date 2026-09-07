import { useMemo, useState } from 'react'
import { reservations } from '../../data/reservations'
import SearchBar from '../../components/common/SearchBar'
import StatusBadge from '../../components/common/StatusBadge'
import Button from '../../components/common/Button'

export default function ReservationManagement() {
  const [items, setItems] = useState(reservations)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('전체')

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = !search || item.patient.includes(search) || item.phone.includes(search)
      const matchesStatus = statusFilter === '전체' || item.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [items, search, statusFilter])

  const updateStatus = (id, status) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, status } : item))
  }

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>온라인 예약 관리</h2>
        </div>

        <div className="toolbar two-column">
          <SearchBar value={search} onChange={setSearch} placeholder="예약자/연락처 검색" />
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option>전체</option>
            <option>예약대기</option>
            <option>예약확정</option>
            <option>진료완료</option>
            <option>취소</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>예약번호</th>
                <th>예약자</th>
                <th>연락처</th>
                <th>진료과</th>
                <th>의료진</th>
                <th>예약일</th>
                <th>예약시간</th>
                <th>상태</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.patient}</td>
                  <td>{item.phone}</td>
                  <td>{item.department}</td>
                  <td>{item.doctor}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td><StatusBadge status={item.status} /></td>
                  <td className="actions-cell">
                    <Button variant="secondary" onClick={() => updateStatus(item.id, '예약확정')}>확정</Button>
                    <Button variant="secondary" onClick={() => updateStatus(item.id, '진료완료')}>완료</Button>
                    <Button variant="danger" onClick={() => updateStatus(item.id, '취소')}>취소</Button>
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
