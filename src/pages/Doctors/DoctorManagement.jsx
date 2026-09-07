import { useMemo, useState } from 'react'
import { doctors } from '../../data/doctors'
import SearchBar from '../../components/common/SearchBar'
import Button from '../../components/common/Button'
import StatusBadge from '../../components/common/StatusBadge'

export default function DoctorManagement() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(doctors)

  const filtered = useMemo(() => {
    return items.filter((doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.department.toLowerCase().includes(search.toLowerCase()),
    )
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
          <h2>의료진 관리</h2>
          <Button>의료진 추가</Button>
        </div>

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} placeholder="의료진 검색" />
        </div>

        <div className="doctor-grid">
          {filtered.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-card-body">
                <div className="doctor-header-row">
                  <div>
                    <strong>{doctor.name}</strong>
                    <small>{doctor.title}</small>
                  </div>
                  <StatusBadge status={doctor.visible ? '노출' : '비노출'} />
                </div>
                <p>{doctor.department}</p>
                <p>{doctor.specialty}</p>
                <p>{doctor.schedule}</p>
                <div className="button-group compact">
                  <Button variant="secondary">수정</Button>
                  <Button variant="secondary" onClick={() => toggleVisible(doctor.id)}>
                    {doctor.visible ? '비노출' : '노출'}
                  </Button>
                  <Button variant="danger" onClick={() => deleteItem(doctor.id)}>삭제</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
