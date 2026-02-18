import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Dashboard() {
  return (
    <Row type='horizontal'>
      <Heading as='h1'>Dashboard</Heading>
      <img src='https://ocmwtywrlqjmiqtolypd.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg' />
      <p>TEST</p>
    </Row>
  )
}

export default Dashboard
