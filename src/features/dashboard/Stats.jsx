import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import Stat from './Stat'
import { formatCurrency } from '../../utils/helpers'

const Stats = ({ bookings = [], confirmedStays = [], numDays, cabinCount }) => {
  const numBookings = bookings.length

  const totalSales = bookings.reduce((acc, cur) => (acc += cur.totalPrice), 0)

  const checkins = confirmedStays.length

  const occupations =
    confirmedStays.reduce((acc, cur) => (acc += cur.numNights), 0) /
    (cabinCount * numDays)

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title='Bookings'
        color='blue'
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title='Sales'
        color='green'
        value={formatCurrency(totalSales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title='Check ins'
        color='indigo'
        value={checkins}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title='Occupancy rate'
        color='yellow'
        value={Math.round(occupations * 100) + '%'}
      />
    </>
  )
}

export default Stats
