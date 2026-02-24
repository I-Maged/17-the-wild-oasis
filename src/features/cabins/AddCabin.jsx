import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'
import CabinTable from './CabinTable'

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens='table'>
        <Button>Show Cabins</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CabinTable />
      </Modal.Window>
    </Modal>
  )
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
//         Add new cabin
//       </Button>
//       {/* {isOpenModal && <CreateCabinForm />}
//       {isOpenModal && <Modal />} */}
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   )
// }

export default AddCabin
