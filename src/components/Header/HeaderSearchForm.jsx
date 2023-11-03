import {FiSearch} from 'react-icons/fi';

const HeaderSearchForm = () => {
  return (
    <form className="bg-secondary flex py-3 px-6 rounded-lg">
      <input type="text" className="bg-transparent text-xl" placeholder='What are you looking for?' />
      <FiSearch className='text-2xl' />
    </form>
  )
}

export default HeaderSearchForm