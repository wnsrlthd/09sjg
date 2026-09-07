import { useState } from 'react'
import Button from '../../components/common/Button'

const weekDays = ['월', '화', '수', '목', '금', '토', '일']

const scheduleData = {
  월: { morning: true, afternoon: true },
  화: { morning: true, afternoon: false },
  수: { morning: false, afternoon: true },
  목: { morning: true, afternoon: true },
  금: { morning: true, afternoon: false },
  토: { morning: false, afternoon: false },
  일: { morning: false, afternoon: false },
}

export default function DoctorSchedule() {
  const [doctor, setDoctor] = useState('김철수 원장')
  const [day, setDay] = useState('월')

  return (
    <div className="page-container">
      <div className="card-section">
        <div className="section-header">
          <h2>의료진 진료일정 관리</h2>
          <Button>저장</Button>
        </div>

        <div className="schedule-controls">
          <label>
            의료진 선택
            <select value={doctor} onChange={(event) => setDoctor(event.target.value)}>
              <option>김철수 원장</option>
              <option>이서윤 과장</option>
              <option>박민준 교수</option>
              <option>오하나 센터장</option>
            </select>
          </label>
          <label>
            날짜 선택
            <input type="date" value="2026-09-07" onChange={() => {}} />
          </label>
        </div>

        <div className="schedule-grid">
          <div className="schedule-table">
            <table>
              <thead>
                <tr>
                  <th>요일</th>
                  <th>오전</th>
                  <th>오후</th>
                  <th>시간</th>
                </tr>
              </thead>
              <tbody>
                {weekDays.map((weekDay) => (
                  <tr key={weekDay}>
                    <td>{weekDay}</td>
                    <td>
                      <input type="checkbox" checked={scheduleData[weekDay].morning} readOnly />
                    </td>
                    <td>
                      <input type="checkbox" checked={scheduleData[weekDay].afternoon} readOnly />
                    </td>
                    <td>
                      {weekDay === day ? '09:00 ~ 12:00 / 13:00 ~ 17:30' : '휴진'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="schedule-detail">
            <h3>{doctor} 일정</h3>
            <div className="info-box">
              <p>선택 날짜: 2026-09-07</p>
              <p>진료 시간: 09:00 ~ 12:00</p>
              <p>오후: 13:00 ~ 17:30</p>
              <p>상태: 진료 가능</p>
            </div>
            <div className="button-group">
              <Button variant="secondary" onClick={() => setDay('화')}>복사</Button>
              <Button>휴진 등록</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
