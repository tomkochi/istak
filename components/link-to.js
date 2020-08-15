import { isUri } from 'valid-url'
import Link from 'next/link'

const LinkTo = ({ children, link }) => {
  const uri = isUri(link)
  return (
    <>
      {uri && (
        <a href={link} target="_blank">
          {children}
        </a>
      )}
      {!uri && (
        <Link href={link} passHref>
          <a>{children}</a>
        </Link>
      )}
    </>
  )
}

export default LinkTo
