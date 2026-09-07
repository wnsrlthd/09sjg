import { useState } from 'react'
import Button from '../../components/common/Button'
import StatusBadge from '../../components/common/StatusBadge'
import { membershipBenefits, membershipMembers, schedules, socialPosts, transportGuide } from '../../data/final'

function PageHeader({ title, description, action }) {
  return <div className="page-heading"><div><p className="eyebrow blue-eyebrow">REHABILITATION PLATFORM</p><h2>{title}</h2><p>{description}</p></div>{action}</div>
}

export function MembershipPage() {
  const [items, setItems] = useState(membershipMembers)
  return <div className="page-container"><PageHeader title="멤버십 관리" description="개인과 단체의 평가, 예방, 컨디셔닝 프로그램을 상담 후 맞춤형으로 안내합니다." action={<Button>회원 등록</Button>} /><section className="membership-banner"><div><p className="eyebrow">PERSONAL MEMBERSHIP</p><h3>개인 프로그램</h3><p>상담 후 맞춤형 프로그램 및 비용 안내</p></div><StatusBadge status="상담 안내" /></section><section className="membership-banner team-membership-banner"><div><p className="eyebrow">TEAM MEMBERSHIP</p><h3>단체 프로그램</h3><p>팀 규모와 프로그램에 따라 상담 후 맞춤 견적</p></div><StatusBadge status="맞춤 견적" /></section><section className="content-section"><div className="section-header"><h3>혜택 비교</h3><span className="info-note">서비스 범위는 상담 후 센터 정책에 따라 안내합니다.</span></div><div className="table-wrapper"><table><thead><tr><th>혜택</th><th>일반 회원</th><th>개인 프로그램</th></tr></thead><tbody>{membershipBenefits.map(([benefit, normal, member]) => <tr key={benefit}><td>{benefit}</td><td>{normal}</td><td>{member}</td></tr>)}</tbody></table></div></section><section className="content-section"><div className="section-header"><h3>멤버십 회원</h3></div><div className="table-wrapper"><table><thead><tr><th>회원번호</th><th>이름</th><th>가입일</th><th>상태</th><th>결제일</th><th>다음 결제일</th><th>이용 횟수</th><th>관리</th></tr></thead><tbody>{items.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.joinedAt}</td><td><StatusBadge status={item.status} /></td><td>{item.paidAt}</td><td>{item.nextPayment}</td><td>{item.visits}</td><td><Button variant="danger" onClick={() => setItems((current) => current.filter((row) => row.id !== item.id))}>삭제</Button></td></tr>)}</tbody></table></div></section></div>
}

export function SocialPage() {
  const [items, setItems] = useState(socialPosts)
  return <div className="page-container"><PageHeader title="SNS / 홍보관리" description="Instagram, YouTube, Facebook, Naver Blog와 병원 홍보 콘텐츠를 관리합니다." action={<Button>콘텐츠 등록</Button>} /><section className="content-section"><div className="promo-grid">{items.map((item) => <article className="promo-card" key={item.id}><img src={item.thumbnail} alt="홍보 콘텐츠 썸네일" /><div className="promo-card-body"><div className="promo-meta"><StatusBadge status={item.status} /><span>{item.channel}</span></div><h3>{item.title}</h3><p>{item.category} · {item.date}</p><div className="button-group"><Button variant="secondary">수정</Button><Button variant="danger" onClick={() => setItems((current) => current.filter((row) => row.id !== item.id))}>삭제</Button></div></div></article>)}</div></section></div>
}

export function TransportPage() {
  return <div className="page-container"><PageHeader title="교통안내" description="수원역을 중심으로 정리한 이동 안내입니다." /><section className="transport-map"><div className="map-pin">수원역</div><div className="map-label">지도 API 연결 영역<br /><small>센터 위치 확정 후 Kakao Map 또는 Naver Map을 연결합니다.</small></div></section><div className="transport-grid">{[['지하철', transportGuide.subway], ['버스', transportGuide.bus], ['자가용 · 주차', transportGuide.car]].map(([title, text]) => <section className="content-section" key={title}><h3>{title}</h3><p>{text}</p></section>)}</div></div>
}

export function SchedulePage() {
  const [view, setView] = useState('주간')
  return <div className="page-container"><PageHeader title="의료진 스케줄" description="의료진의 근무 요일, 진료시간, 휴진 및 예약 가능 여부를 관리합니다." action={<Button>스케줄 저장</Button>} /><div className="schedule-tabs">{['오늘', '주간', '월간'].map((item) => <button type="button" className={view === item ? 'active' : ''} key={item} onClick={() => setView(item)}>{item} 스케줄</button>)}</div><section className="content-section"><div className="table-wrapper"><table><thead><tr><th>의료진</th><th>진료과</th><th>전문 분야</th><th>근무 요일</th><th>진료 시간</th><th>휴진 여부</th><th>예약 가능</th></tr></thead><tbody>{schedules.map((item) => <tr key={item.doctor}><td><strong>{item.doctor}</strong></td><td>{item.department}</td><td>{item.specialty}</td><td>{item.days}</td><td>{item.start} ~ {item.end}</td><td><StatusBadge status={item.off ? '휴진' : '진료'} /></td><td><StatusBadge status={item.available ? '예약 가능' : '마감'} /></td></tr>)}</tbody></table></div></section><section className="content-section"><h3>{view} 달력 UI</h3><div className="calendar-grid">{['월', '화', '수', '목', '금', '토', '일'].map((day) => <div key={day} className="calendar-day"><strong>{day}</strong><span>09:00 - 17:30</span><small>진료 가능</small></div>)}</div></section></div>
}

