export const visitorStats = {
  today: 127,
  newVisitors: 24,
  returningVisitors: 103,
  appointments: 98,
  completed: 76,
  waiting: 21,
  cancelled: 4,
  newMembers: 8,
  membershipMembers: 42,
}

export const hospitalVideo = {
  title: '수원 본브릿지 종합재활센터 소개 영상',
  duration: '00:10',
  uploadedAt: '2026.09.07',
  poster: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  description: '센터 외관, 스포츠 재활, 의료진 진료 장면을 담은 영상 영역입니다.',
}

export const socialPosts = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: ['운동 전 반드시 체크해야 할 움직임', '선수의 발목은 왜 반복해서 다칠까?', '경기 후 회복을 위한 컨디셔닝', '수원 고등학교 축구부 찾아가는 팀 평가', '수원대학교 재활학과 현장실습 프로그램', '스포츠 재활 전문가 인터뷰', '팀 단위 선수 예방관리 프로그램', '재활에서 경기 복귀까지', '코어 안정성을 높이는 기본 운동', '운동 후 회복을 위한 스트레칭'][index % 10],
  category: ['재활 이야기', '부상 예방', '선수 관리', '팀 방문', '대학 협력', '전문가 칼럼', '스포츠 재활', '센터 소식', '건강정보', '연구 소식'][index % 10],
  channel: ['Instagram', 'YouTube', 'Naver Blog', 'Facebook'][index % 4],
  date: `2026.09.${String((index % 20) + 1).padStart(2, '0')}`,
  views: 120 + index * 31,
  likes: 18 + index * 4,
  status: index === 6 ? '비공개' : '게시',
  link: 'https://bonebridge.example.com/content',
  thumbnail: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c'][index % 3] + '?auto=format&fit=crop&w=600&q=80',
}))

export const membershipBenefits = [
  ['일반 진료', '정상가', '일부 혜택'],
  ['재활 프로그램', '정상가', '회원 혜택'],
  ['스포츠 재활', '정상가', '회원 혜택'],
  ['보조기', '정상가', '회원 혜택'],
  ['제휴 장비', '정상가', '제휴 혜택'],
  ['건강 상담', '별도', '회원 혜택'],
  ['이벤트', '일반 회원', '회원 우선 안내'],
]

export const membershipMembers = [
  { id: 'MS-001', name: '김하늘', joinedAt: '2026.06.01', status: '활성', paidAt: '2026.09.01', nextPayment: '2026.10.01', visits: 5, expiresAt: '2027.06.01' },
  { id: 'MS-002', name: '이도윤', joinedAt: '2026.07.12', status: '활성', paidAt: '2026.09.02', nextPayment: '2026.10.02', visits: 3, expiresAt: '2027.07.12' },
  { id: 'MS-003', name: '박서준', joinedAt: '2026.04.20', status: '정지', paidAt: '2026.08.20', nextPayment: '-', visits: 8, expiresAt: '2027.04.20' },
]

export const schedules = [
  { doctor: '김철수', department: '무릎 클리닉', specialty: '무릎 관절 · 스포츠 손상', days: '월 · 화 · 수', start: '09:00', end: '17:30', off: false, available: true },
  { doctor: '이서윤', department: '어깨 클리닉', specialty: '회전근개 · 재활', days: '화 · 수 · 목', start: '10:00', end: '18:00', off: false, available: true },
  { doctor: '박민준', department: '척추 클리닉', specialty: '허리 통증 · 비수술 치료', days: '월 · 목 · 금', start: '09:00', end: '16:00', off: false, available: false },
  { doctor: '오하나', department: '도수 재활센터', specialty: '재활 운동 · 기능 회복', days: '화 · 목 · 금', start: '09:30', end: '17:00', off: false, available: true },
]

export const transportGuide = {
  subway: '수원역 1호선·수인분당선 하차 후 병원 방향으로 이동합니다. 정확한 도보 동선은 실제 주소 확정 후 연결합니다.',
  bus: '수원역 주변 일반버스 및 직행버스 정류장을 이용할 수 있습니다. 정류장 정보는 실제 위치 확정 후 업데이트합니다.',
  car: '수원역 주변 도로에서 병원 방향으로 이동합니다. 방문객 주차 가능 여부와 주차 시간은 실제 운영 정책 확정 후 반영합니다.',
}
