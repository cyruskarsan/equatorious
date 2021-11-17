import { useLocalStorage } from '..'

const usePageSelector = () =>
{
  const KNOWN_PAGES = [ "dashboard", "mint", "transfer" ]
  const [ currentPage, setCurrentPage ] = useState( "dashboard" )

  const getCurrentPage = () => currentPage

  const selectPage = ( newPage ) =>
  {
    if ( !KNOWN_PAGES.contains( newPage ) )
    {
      console.error( "Unknown page requested: " + newPage )
    }
    else
    {
      setCurrentPage( newPage )
    }
  }
}

export default usePageSelector
