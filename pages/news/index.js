import React from 'react'
import Link from 'next/link'
import MainLayout from '../../layouts/mainLayout'
export default function News() {
  const ids = [1, 2, 3, 4]
  return (
    <div>
      <MainLayout>
        <div>新闻</div>
        <div>
          {
            ids.map(item => {
              return (
                <Link href={`/news/${item}`} key={item}>
                  <a href={`/news/${item}`} style={{ display: 'block' }} className='text-danger'>{item}</a>
                </Link>
              )
            })
          }
        </div>
      </MainLayout>
    </div>
  )
}