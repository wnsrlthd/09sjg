export const centerProfile = {
  name: '수원 본브릿지 종합재활센터',
  tagline: '재활 · 예방 · 컨디셔닝 · 퍼포먼스',
  message: '다친 후의 재활을 넘어, 부상 전부터 선수와 운동인의 몸을 관리합니다.',
  location: '경기도 수원시 수원역 인근',
  address: '경기도 수원시 수원역 인근',
  phone: '031-000-0000',
  hours: '월~금 09:00 - 18:00 · 토 09:00 - 13:00',
  specialties: '기능평가 · 스포츠 재활 · 예방관리 · 컨디셔닝 · 퍼포먼스',
}

export const centerStats = [
  { label: '오늘 방문자', value: 127 }, { label: '오늘 평가 선수', value: 18 },
  { label: '현재 재활 선수', value: 32 }, { label: '관리 필요 선수', value: 7 },
  { label: '등록 팀', value: 12 }, { label: '등록 선수', value: 186 },
]

const sportsVideo = 'https://cdn.coverr.co/videos/coverr-a-man-doing-exercises-1573/1080p.mp4'
export const videos = [
  { id: 1, title: '축구 선수 재활', category: '스포츠 재활', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: '선수 컨디셔닝', category: '컨디셔닝', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: '움직임 평가', category: '기능 평가', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: '근력 회복', category: '회복 운동', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: '균형 훈련', category: '예방 관리', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: '경기 복귀 훈련', category: '퍼포먼스', duration: '00:10', src: sportsVideo, poster: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80' },
]

export const rehabilitationPrograms = [
  { id: 1, name: '개인 재활', stage: '기능 회복', description: '개인 상태 평가에 따른 단계별 기능 회복 프로그램', status: '운영중' },
  { id: 2, name: '스포츠 재활', stage: '경기 복귀', description: '종목별 요구 동작과 경기 복귀를 연결하는 프로그램', status: '운영중' },
  { id: 3, name: '수술 후 재활', stage: '재평가', description: '수술 후 회복 단계에 맞춘 정기 평가와 운동 관리', status: '운영중' },
  { id: 4, name: '컨디셔닝', stage: '퍼포먼스', description: '운동능력과 신체 상태를 오래 유지하는 프로그램', status: '운영중' },
]

export const preventionPrograms = [
  { id: 1, name: '부상 위험 평가', focus: '근력 · 유연성 · 밸런스', participants: 48, status: '정상' },
  { id: 2, name: '움직임 평가', focus: '관절 가동범위 · 움직임', participants: 36, status: '정상' },
  { id: 3, name: '스포츠 특화 평가', focus: '종목별 반복 부상 위험', participants: 29, status: '정상' },
  { id: 4, name: '정기 재평가', focus: '변화 추적 · 예방 계획', participants: 21, status: '정상' },
]

export const athletes = [
  { id: 1, name: '박지성', sport: '축구', position: '미드필더', status: '관리 필요', risk: '하체 반복 부담', program: '종목별 부상 예방 정보', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: '이강인', sport: '축구', position: '미드필더', status: '정상', risk: '방향 전환 동작', program: '스포츠 컨디셔닝 사례', image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: '황희찬', sport: '축구', position: '공격수', status: '관찰', risk: '고강도 가속 동작', program: '선수에게 필요한 예방관리', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: '이대훈', sport: '태권도', position: '겨루기', status: '정상', risk: '회전과 순간 체중 이동', program: '종목별 부상 예방 정보', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: '허훈', sport: '농구', position: '가드', status: '관찰', risk: '점프와 착지', program: '스포츠 컨디셔닝 사례', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: '안세영', sport: '배드민턴', position: '단식', status: '복귀 준비', risk: '점프와 착지', program: '스포츠 재활 콘텐츠', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: '박인비', sport: '골프', position: '프로 골퍼', status: '정상', risk: '회전 동작', program: '종목별 부상 예방 정보', image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: '우상혁', sport: '육상', position: '높이뛰기', status: '재활 중', risk: '도약과 착지', program: '기능 회복 프로그램', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80' },
]

export const teams = [
  { id: 1, name: '수원 중학교 축구부', type: '중학교', athletes: 28, normal: 21, observe: 4, rehab: 2, intensive: 1, next: '2026.09.14' },
  { id: 2, name: '수원 고등학교 체육부', type: '고등학교', athletes: 32, normal: 24, observe: 5, rehab: 2, intensive: 1, next: '2026.09.18' },
  { id: 3, name: '수원대학교 스포츠팀', type: '대학교', athletes: 41, normal: 33, observe: 5, rehab: 2, intensive: 1, next: '2026.09.21' },
  { id: 4, name: '수원 실업 스포츠팀', type: '실업팀', athletes: 24, normal: 19, observe: 3, rehab: 2, intensive: 0, next: '2026.09.24' },
]

export const educationPrograms = [
  { id: 1, university: '수원대학교 재활학과', program: '현장실습', students: 18, projects: 4, status: '진행중' },
  { id: 2, university: '경기대학교 스포츠과학과', program: '연구 프로젝트', students: 8, projects: 3, status: '진행중' },
  { id: 3, university: '수원과학대학교 물리치료과', program: '세미나 · 멘토링', students: 12, projects: 2, status: '예정' },
]

export const teamVisits = [
  { id: 1, team: '수원 고등학교 체육부', date: '2026.09.08', time: '10:00', program: '선수 신체 평가', expert: '김철수 전문가', visited: '방문 예정', status: '예약 완료' },
  { id: 2, team: '수원대학교 스포츠팀', date: '2026.09.10', time: '14:00', program: '예방관리 평가', expert: '이서윤 전문가', visited: '방문 예정', status: '진행 예정' },
  { id: 3, team: '수원 중학교 축구부', date: '2026.09.15', time: '09:30', program: '팀 전체 평가', expert: '오하나 전문가', visited: '미방문', status: '대기' },
]

export const membershipSports = [
  { name: '축구', focus: '허벅지 · 햄스트링 · 종아리 · 발목 · 무릎 · 고관절', movement: '방향 전환 · 감속 · 가속 · 킥 동작' },
  { name: '태권도', focus: '고관절 · 허벅지 · 햄스트링 · 발목 · 코어', movement: '균형 · 회전 · 발차기 · 순간 폭발력' },
  { name: '농구', focus: '무릎 · 발목 · 종아리 · 하체 안정성', movement: '점프 · 착지 · 방향 전환' },
  { name: '골프', focus: '허리 · 고관절 · 어깨 · 코어', movement: '회전 능력 · 좌우 밸런스' },
  { name: '배드민턴', focus: '어깨 · 팔꿈치 · 무릎 · 발목', movement: '점프 · 런지 · 방향 전환' },
]

export const athleteParticipation = [
  { id: 1, athlete: '손흥민', sport: '축구', program: '선수 컨디셔닝 콘텐츠', date: '2026.09.03', status: '참가 완료', content: '게시 완료', note: '공개 선수 관리 콘텐츠' },
  { id: 2, athlete: '이대훈', sport: '태권도', program: '종목별 예방관리 콘텐츠', date: '2026.09.12', status: '참가 예정', content: '준비중', note: '공개 스포츠 콘텐츠' },
  { id: 3, athlete: '안세영', sport: '배드민턴', program: '움직임 평가 인터뷰', date: '2026.09.20', status: '참가 예정', content: '미게시', note: '치료 이력과 무관한 콘텐츠' },
]
