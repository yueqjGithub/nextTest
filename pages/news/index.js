import React from 'react'
import Link from 'next/link'
export default function News() {
  const ids = [1, 2, 3, 4]
  const toDetail = function (event, id) {
    event.preventDefault()
    window.location.href = `/news/${id}`
  }
  return (
    <div>
      <div>新闻</div>
      <div>
        {
          ids.map(item => {
            return (
              <Link href={`/news/${item}`} key={item}>
                <a href="#" style={{ display: 'block' }}>{item}</a>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}