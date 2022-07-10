import type { NextPage } from 'next'
import Image from 'next/image'

const Footer: NextPage = () => {
  return (
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <span
          className="flex items-center justify-center gap-2"
        >
          Created by <a className="text-blue-500"
          href="https://www.davidmbaker.dev"
          target="_blank">David Baker</a>
        </span>
      </footer>
  )
}

export default Footer
