import { useState } from 'react'
import Button from '../../components/common/Button'
import StatusBadge from '../../components/common/StatusBadge'
import { membershipSports } from '../../data/center'
import { membershipMembers } from '../../data/final'

const individualBenefits = ['기본 신체 상태 평가', '움직임·좌우 밸런스·근력·유연성 평가', '관절 가동범위와 부상 위험 확인', '종목별 예방 운동과 컨디셔닝', '정기 상태 확인과 재활 연계', '운동 전후 회복 관리']
const teamBenefits = ['선수 전체 등록과 개별 평가', '팀 전체 평가 및 부상 위험 분석', '종목별 예방 프로그램과 팀 컨디셔닝', '출장 평가와 센터 방문 평가', '선수별 리포트와 팀 전체 리포트', '팀 예약 현황과 담당 전문가 배정']

function PageHeader() { return <div className="page-heading"><div><p className="eyebrow blue-eyebrow">INDIVIDUAL · TEAM MEMBERSHIP</p><h2>개인/팀별 멤버십</h2><p>선수의 종목과 신체 특성을 분석하여 맞춤형 예방관리 프로그램을 제공합니다.</p></div><Button>상담 등록</Button></div> }
function BenefitList({ title, description, benefits, status }) { return <section className="membership-panel"><div className="membership-panel-heading"><div><p className="eyebrow blue-eyebrow">{title === '개인 멤버십' ? 'INDIVIDUAL' : 'TEAM'}</p><h3>{title}</h3><p>{description}</p></div><StatusBadge status={status} /></div><ul>{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></section> }

export default function MembershipManagement() {
  const [members, setMembers] = useState(membershipMembers)
  return <div className="page-container"><PageHeader /><div className="membership-panels"><BenefitList title="개인 멤버십" description="상담 후 맞춤형 비용 안내" benefits={individualBenefits} status="상담 안내" /><BenefitList title="팀 멤버십" description="팀 규모와 관리 범위에 따라 상담 후 맞춤 견적" benefits={teamBenefits} status="맞춤 견적" /></div><section className="membership-message"><h3>모든 선수에게 같은 재활을 적용하지 않습니다.</h3><p>같은 하체 운동을 하더라도 축구 선수와 태권도 선수는 요구되는 움직임과 근육 사용 패턴, 부상 위험 요소가 다를 수 있습니다. 종목, 포지션, 신체 상태, 운동량과 과거 이력을 평가해 필요한 예방관리 프로그램을 구성합니다.</p><strong>부상 위험을 미리 확인하고 선수의 몸을 지속적으로 관리합니다.</strong></section><section className="content-section"><div className="section-header"><h3>종목별 맞춤 예방관리</h3><span className="info-note">축구 · 태권도 · 농구 · 골프 · 배드민턴</span></div><div className="sport-membership-grid">{membershipSports.map((sport) => <article key={sport.name}><h4>{sport.name}</h4><p><strong>중점 관리</strong><br />{sport.focus}</p><p><strong>주요 움직임</strong><br />{sport.movement}</p></article>)}</div></section><section className="content-section"><div className="section-header"><h3>가입 현황</h3><span className="info-note">상태와 이용 현황을 관리합니다.</span></div><div className="table-wrapper"><table><thead><tr><th>회원번호</th><th>이름</th><th>가입일</th><th>상태</th><th>이용 횟수</th><th>관리</th></tr></thead><tbody>{members.map((member) => <tr key={member.id}><td>{member.id}</td><td>{member.name}</td><td>{member.joinedAt}</td><td><StatusBadge status={member.status} /></td><td>{member.visits}</td><td><Button variant="danger" onClick={() => setMembers((current) => current.filter((item) => item.id !== member.id))}>삭제</Button></td></tr>)}</tbody></table></div></section><section className="membership-process"><h3>지속 관리 프로세스</h3><div>{['선수 등록', '신체 평가', '움직임 분석', '위험 요소 확인', '종목별 관리', '컨디셔닝', '정기 재평가', '필요 시 재활'].map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div></section></div>
}
