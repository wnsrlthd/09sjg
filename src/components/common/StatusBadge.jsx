export default function StatusBadge({ status }) {
  const normalized = String(status || '').trim()
  const colorMap = {
    예약대기: 'warning',
    예약확정: 'info',
    진료완료: 'success',
    취소: 'danger',
    답변대기: 'warning',
    답변완료: 'success',
    처리중: 'info',
    처리완료: 'success',
    접수: 'neutral',
    노출: 'success',
    비노출: 'neutral',
    활성: 'success',
    비활성: 'neutral',
    공개: 'success',
    비공개: 'neutral',
    협력중: 'success',
    협력예정: 'warning',
    협력종료: 'neutral',
    사용중: 'success',
    '예약 가능': 'success',
    마감: 'warning',
    진료: 'info',
    휴진: 'danger',
    게시: 'success',
    '상담 안내': 'info',
    '맞춤 견적': 'info',
  }

  return <span className={`status-badge ${colorMap[normalized] || 'neutral'}`}>{normalized}</span>
}
