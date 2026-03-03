import { useQuery } from '@tanstack/react-query'
import { getStaysAfterDate } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'
import { subDays } from 'date-fns'

export function useRecentStays() {
  const [searchParams] = useSearchParams()

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'))

  const queryDays = subDays(new Date(), numDays).toISOString()

  const { isPending, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDays),
    queryKey: ['stays', `last-${numDays}`],
  })

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out',
  )

  return { isPending, stays, confirmedStays, numDays }
}
