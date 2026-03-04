import styled from 'styled-components'
import Spinner from '../../ui/Spinner'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'
import Stats from './Stats'
import { useCabins } from '../cabins/useCabins'
import SalesChart from './SalesChart'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

const DashboardLayout = () => {
  const { isLoading: isPendingCabins, cabins } = useCabins()
  const { isPending: isPendingBookings, bookings } = useRecentBookings()
  const {
    isPending: isPendingStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays()

  if (isPendingBookings || isPendingStays || isPendingCabins) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today's activity</div>
      <div>Chart stay duration</div>

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
