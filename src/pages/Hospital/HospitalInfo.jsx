import { useState } from 'react'
import { hospitalInfo } from '../../data/hospital'
import Button from '../../components/common/Button'

export default function HospitalInfo() {
  const [form, setForm] = useState(hospitalInfo)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    alert('병원 기본정보가 저장되었습니다.')
  }

  return (
    <div className="page-container">
      <section className="hospital-visual">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80" alt="스포츠 의학 의료진 상담" />
        <div><p className="eyebrow blue-eyebrow">SUWON BONEBRIDGE REHABILITATION CENTER</p><h2>스포츠 손상부터 회복까지,<br />신뢰할 수 있는 재활 운영</h2><p>평가와 재활, 예방과 컨디셔닝을 연결하는 종합재활센터입니다.</p></div>
      </section>
      <div className="card-section">
        <div className="section-header">
          <h2>기본정보</h2>
          <div className="button-group">
            <Button variant="secondary" onClick={() => setForm(hospitalInfo)}>취소</Button>
            <Button onClick={handleSave}>저장</Button>
          </div>
        </div>

        <div className="form-grid">
          <label>
            병원명
            <input name="hospitalName" value={form.hospitalName} onChange={handleChange} />
          </label>
          <label>
            대표전화
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label className="full-width">
            주소
            <input name="address" value={form.address} onChange={handleChange} />
          </label>
          <label>
            위치 안내
            <input name="location" value={form.location} onChange={handleChange} />
          </label>
          <label>
            주요 진료 분야
            <input name="mainServices" value={form.mainServices} onChange={handleChange} />
          </label>
          <label className="full-width">
            스포츠 전문 진료
            <textarea name="sportsMedicine" value={form.sportsMedicine} onChange={handleChange} rows={2} />
          </label>
          <label>
            의료진
            <input name="medicalStaff" value={form.medicalStaff} onChange={handleChange} />
          </label>
          <label>
            이메일
            <input name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            홈페이지 URL
            <input name="homepage" value={form.homepage} onChange={handleChange} />
          </label>
          <label>
            운영시간
            <input name="operatingHours" value={form.operatingHours} onChange={handleChange} />
          </label>
          <label>
            점심시간
            <input name="lunchHour" value={form.lunchHour} onChange={handleChange} />
          </label>
          <label>
            휴진일
            <input name="closedDay" value={form.closedDay} onChange={handleChange} />
          </label>
          <label>
            대표원장
            <input name="director" value={form.director} onChange={handleChange} />
          </label>
          <label className="full-width">
            병원 소개
            <textarea name="introduction" value={form.introduction} onChange={handleChange} rows={4} />
          </label>
          <label className="full-width">
            주차 안내
            <textarea name="parkingInfo" value={form.parkingInfo} onChange={handleChange} rows={3} />
          </label>
          <label className="full-width">
            교통 안내
            <textarea name="trafficInfo" value={form.trafficInfo} onChange={handleChange} rows={3} />
          </label>
          <label className="full-width">
            지하철 안내
            <textarea name="subwayGuide" value={form.subwayGuide} onChange={handleChange} rows={2} />
          </label>
          <label className="full-width">
            버스 안내
            <textarea name="busGuide" value={form.busGuide} onChange={handleChange} rows={2} />
          </label>
          <label className="full-width">
            주차 안내
            <textarea name="parkingGuide" value={form.parkingGuide} onChange={handleChange} rows={2} />
          </label>
          <label>
            SNS
            <input name="sns" value={form.sns} onChange={handleChange} />
          </label>
          <label>
            병원 홍보 콘텐츠
            <input name="promotion" value={form.promotion} onChange={handleChange} />
          </label>
        </div>
      </div>
    </div>
  )
}
