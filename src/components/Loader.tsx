import { Icon } from '@iconify/react/dist/iconify.js'

const Loader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Icon icon="bx:loader-circle" className='text-primary text-[52px] animate-spin' />
    </div>
  )
}

export default Loader
