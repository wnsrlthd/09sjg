export const adminUsers = [
  { id: 1, name: '홍길동', username: 'admin', role: 'SUPER_ADMIN', status: '활성', lastLogin: '2026-09-07 14:20' },
  { id: 2, name: '김관리', username: 'content_admin', role: 'CONTENT_ADMIN', status: '활성', lastLogin: '2026-09-06 09:12' },
  { id: 3, name: '박예약', username: 'reservation_admin', role: 'RESERVATION_ADMIN', status: '대기', lastLogin: '2026-09-05 17:40' },
  { id: 4, name: '최병원', username: 'hospital_admin', role: 'HOSPITAL_ADMIN', status: '활성', lastLogin: '2026-09-07 08:15' },
]

export const activityLogs = [
  { id: 1, date: '2026-09-07 14:20', admin: '홍길동', action: '공지사항 수정', target: '공지사항', result: '성공' },
  { id: 2, date: '2026-09-07 12:05', admin: '김관리', action: '배너 등록', target: '메인배너', result: '성공' },
  { id: 3, date: '2026-09-06 18:40', admin: '박예약', action: '예약 상태 변경', target: 'R-1002', result: '성공' },
  { id: 4, date: '2026-09-06 11:25', admin: '최병원', action: '의료진 정보 수정', target: '김철수 원장', result: '성공' },
  { id: 5, date: '2026-09-05 16:15', admin: '홍길동', action: '병원 기본정보 저장', target: '병원 기본정보', result: '성공' },
]
