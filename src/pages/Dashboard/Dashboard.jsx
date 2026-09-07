import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { reservations } from '../../data/reservations'
import { consultations } from '../../data/consultations'
import { complaintData, contents } from '../../data/contents'
import { doctors } from '../../data/doctors'
import { mediaItems, sports } from '../../data/extended'
import { schedules, socialPosts, visitorStats } from '../../data/final'
import { centerProfile, centerStats, teamVisits, teams, videos } from '../../data/center'
import StatusBadge from '../../components/common/StatusBadge'
import symbol from '../../assets/bonbridge-symbol.svg'
import { nationalWeather } from '../../data/weather'

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [videoIndex, setVideoIndex] = useState(0)

  const filteredReservations = useMemo(() => {
    if (selectedFilter === 'all') return reservations.slice(0, 5)
    return reservations.filter((item) => item.status === selectedFilter).slice(0, 5)
  }, [selectedFilter])

  const recentConsultations = consultations.slice(0, 5)
  const recentComplaints = complaintData.slice(0, 5)
  const recentPosts = contents.slice(0, 5)

  return (
    <div className="page-container">
      <section className="dashboard-hero">
        <div className="hero-copy">
          <div className="hero-brand"><img src={symbol} alt="본브릿지 재활센터 심볼" /></div>
          <p className="eyebrow">REHABILITATION · PREVENTION · PERFORMANCE</p>
          <h2>{centerProfile.name}<br />{centerProfile.tagline}</h2>
          <p>{centerProfile.message}</p>
          <div className="hero-facts"><span><strong>{doctors.length}</strong> 전문 인력</span><span><strong>{centerStats[4].value}</strong> 등록 팀</span><span><strong>{centerStats[5].value}</strong> 등록 선수</span></div>
        </div>
        <div className="hero-video"><video key={videos[videoIndex].id} autoPlay muted playsInline preload="metadata" poster={videos[videoIndex].poster} onEnded={() => setVideoIndex((videoIndex + 1) % videos.length)}><source src={videos[videoIndex].src} type="video/mp4" /></video><button type="button" onClick={(event) => { const video = event.currentTarget.previousElementSibling; if (video.paused) video.play(); else video.pause() }} aria-label="영상 재생 또는 일시정지">재생 / 일시정지</button><div className="hero-video-label"><strong>박지성</strong><span>축구 · 미드필더</span></div></div>
      </section>
      <div className="summary-grid center-dashboard-stats">
        {centerStats.map((card, index) => <Link key={card.label} to={index > 3 ? '/athletes' : '/dashboard'} className="summary-card"><span>{card.label}</span><strong>{card.value}</strong></Link>)}
      </div>

      <div className="dashboard-management-grid">
        <Link to="/membership" className="management-highlight"><span className="symbol-mark small">B</span><div><p className="eyebrow blue-eyebrow">MEMBERSHIP</p><h2>개인/팀별 멤버십</h2><p>선수의 종목과 신체 특성에 맞춘 예방관리 프로그램</p><span>개인: 상담 후 맞춤 프로그램 · 팀: 규모와 관리 범위에 따른 맞춤 견적</span></div></Link>
        <Link to="/team-visits" className="management-highlight team-highlight"><span className="symbol-mark small">T</span><div><p className="eyebrow blue-eyebrow">TEAM RESERVATIONS</p><h2>팀 예약 현황</h2><p>{teams.length}개 팀 · {teamVisits.length}건의 평가 일정</p><span>선수 평가와 예방관리 방문 프로그램</span></div></Link>
      </div>

      <section className="content-section visitor-trend-section"><div className="section-header"><h2>오늘 방문자 추이</h2><span className="info-note">방문 현황 · {visitorStats.today}명</span></div><div className="trend-chart">{[42, 58, 51, 76, 68, 91, 127].map((value, index) => <div className="trend-bar-wrap" key={value}><div className="trend-bar" style={{ height: `${value}%` }}><span>{Math.round(value * 1.1)}</span></div><small>{`${index + 9}:00`}</small></div>)}</div></section>

      <section className="content-section weather-section"><div className="section-header"><h2>오늘의 날씨</h2><span className="info-note">전국 주요 지역</span></div><div className="weather-grid">{nationalWeather.map((weather) => <article className="weather-card" key={weather.region}><div><strong>{weather.region}</strong><span>{weather.icon}</span></div><b>{weather.temperature}°C</b><small>최고 {weather.high}° · 최저 {weather.low}°</small></article>)}</div></section>

      <div className="two-column-grid">
        <section className="content-section"><div className="section-header"><h2>의료진 스케줄</h2><Link to="/schedule" className="text-link">관리하기</Link></div><div className="list-box">{schedules.slice(0, 3).map((item) => <div className="list-item" key={item.doctor}><div><strong>{item.doctor} · {item.department}</strong><p>{item.days} · {item.start} ~ {item.end}</p></div><StatusBadge status={item.available ? '예약 가능' : '마감'} /></div>)}</div></section>
        <section className="content-section"><div className="section-header"><h2>최근 SNS / 홍보</h2><Link to="/social" className="text-link">전체 보기</Link></div><div className="list-box">{socialPosts.slice(0, 3).map((item) => <div className="list-item" key={item.id}><div><strong>{item.title}</strong><p>{item.channel} · {item.category}</p></div><span>{item.date}</span></div>)}</div></section>
      </div>

      <div className="two-column-grid">
        <div className="content-section">
          <div className="section-header"><h2>스포츠 종목별 전문의</h2><Link to="/sports" className="text-link">전체 보기</Link></div>
          <div className="sport-dashboard-list">{sports.map((sport) => <Link to="/sports" className="sport-dashboard-row" key={sport.id}><span>{sport.name}</span><strong>{sport.doctors.length}명</strong></Link>)}</div>
        </div>
        <div className="content-section">
          <div className="section-header"><h2>최근 언론 / 뉴스</h2><Link to="/media" className="text-link">전체 보기</Link></div>
          <div className="list-box">{mediaItems.slice(0, 3).map((item) => <div key={item.id} className="list-item"><div><StatusBadge status={item.type} /><strong>{item.title}</strong><p>{item.outlet}</p></div><span>{item.date}</span></div>)}</div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>최근 예약</h2>
          <select value={selectedFilter} onChange={(event) => setSelectedFilter(event.target.value)}>
            <option value="all">전체</option>
            <option value="예약대기">예약대기</option>
            <option value="예약확정">예약확정</option>
            <option value="진료완료">진료완료</option>
            <option value="취소">취소</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>예약번호</th>
                <th>고객명</th>
                <th>진료과</th>
                <th>담당 의료진</th>
                <th>예약일</th>
                <th>예약시간</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.patient}</td>
                  <td>{item.department}</td>
                  <td>{item.doctor}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td><StatusBadge status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="two-column-grid">
        <div className="content-section">
          <div className="section-header">
            <h2>최근 상담</h2>
          </div>
          <div className="list-box">
            {recentConsultations.map((item) => (
              <div key={item.id} className="list-item">
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.author} · {item.type}</p>
                </div>
                <div className="right-side">
                  <span>{item.date}</span>
                  <StatusBadge status={item.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <div className="section-header">
            <h2>고객의 소리</h2>
          </div>
          <div className="list-box">
            {recentComplaints.map((item) => (
              <div key={item.id} className="list-item">
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.author} · {item.type}</p>
                </div>
                <div className="right-side">
                  <span>{item.date}</span>
                  <StatusBadge status={item.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>최근 게시글</h2>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>카테고리</th>
                <th>작성일</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.createdAt}</td>
                  <td><StatusBadge status={item.visible ? '노출' : '비노출'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
