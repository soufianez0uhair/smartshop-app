import HeaderBanner from './HeaderBanner'
import HeaderMenu from './HeaderMenu'
import HeaderSearchForm from './HeaderSearchForm'

const Header = () => {
  return (
    <header>
      <HeaderBanner />
      <div className="border-b border-black-30 flex justify-between px-[12rem] pt-[4rem] pb-[2rem] items-center">
        <h1 className="font-bold text-4xl">ShopSmart</h1>
        <HeaderMenu />
        <HeaderSearchForm />
      </div>
    </header>
  )
}

export default Header